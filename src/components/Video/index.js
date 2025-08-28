import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Video({ link, width, height, file_type, userId, userName }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolume = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
    };

    return (
        <div className={cx('wrapper')}>
            {link && (
                <div className={cx('video-container')}>
                    <video
                        className={cx('video')}
                        ref={videoRef}
                        width={width}
                        height={height}
                        onClick={handlePlayPause}
                    >
                        <source src={link} type={file_type} />
                        Your browser does not support the video tag.
                    </video>
                    <div className={cx('user-name')}>{userName}</div>
                    <div className={cx('controls')}>
                        <button className={cx('volume-btn')} onClick={handleVolume}>
                            <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Video;
