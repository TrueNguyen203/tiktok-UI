import { useEffect, useState } from 'react';
import { createClient } from 'pexels';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import Video from '../../components/Video';

const API_KEY = process.env.REACT_APP_PEXEL_API_KEY;
const cx = classNames.bind(styles);
const videoIdList = [33561877, 33461196, 33054658, 32679331, 3111343];

function Following() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const client = createClient(API_KEY);

    useEffect(() => {
        setLoading(true);
        // Create an array of promises for all video requests
        const videoPromises = videoIdList.map((id) =>
            client.videos.show({ id }).then((data) => ({
                userId: data.user.id,
                userName: data.user.name,
                key: data.video_files[0].id,
                width: data.video_files[0].width,
                height: data.video_files[0].height,
                link: data.video_files[0].link,
                file_type: data.video_files[0].file_type,
            })),
        );

        // Wait for all promises to resolve
        Promise.all(videoPromises)
            .then((videoData) => {
                setVideos(videoData);
            })
            .catch((error) => {
                console.error('Error fetching videos:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            {loading ? (
                <p>Loading videos...</p>
            ) : (
                videos.map((video, index) => (
                    <Video
                        key={video.key || index}
                        link={video.link}
                        width={video.width}
                        height={video.height}
                        file_type={video.file_type}
                        userId={video.userId}
                        userName={video.userName}
                    />
                ))
            )}
        </div>
    );
}

export default Following;
