import { useEffect, useState } from 'react';
import { createClient } from 'pexels';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const API_KEY = '6nmBoWxQDEnSKZVdtp4gDQHLq4UnTo8vktuDpa2RCYOHAbetfQow4ja4';
const cx = classNames.bind(styles);

function Home() {
    const [videoLink, setVideoLink] = useState({
        key: '',
        width: 0,
        height: 0,
        link: '',
        file_type: '',
    });
    const [loading, setLoading] = useState(true);
    const client = createClient(API_KEY);

    useEffect(() => {
        setLoading(true);
        client.videos
            .show({ id: 33561877 })
            .then((data) => {
                const videoFile = data.video_files[0];
                setVideoLink({
                    key: videoFile.id,
                    width: videoFile.width,
                    height: videoFile.height,
                    link: videoFile.link,
                    file_type: videoFile.file_type,
                });
            })
            .catch((error) => {
                console.error('Error fetching video:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-content')}>
                {loading ? (
                    <p>Loading video...</p>
                ) : (
                    videoLink.link && (
                        <video
                            className={cx('video')}
                            controls
                            key={videoLink.key}
                            width={videoLink.width}
                            height={videoLink.heigth}
                        >
                            <source src={videoLink.link} type={videoLink.file_type} />
                            Your browser does not support the video tag.
                        </video>
                    )
                )}
                <div className={cx('btn-actions')}></div>
            </div>
        </div>
    );
}

export default Home;
