import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('upload-container')}>
                <div className={cx('upload-header')}>
                    <h2 className={cx('upload-title')}>Upload page</h2>
                    <h3 className={cx('upload-subtitle')}>Post video on your account</h3>
                </div>
                <div className={cx('upload-form')}>
                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                    <p className={cx('upload-text')}>Select video to upload</p>
                    <p className={cx('upload-hint')}>Or drag and drop a file</p>
                    <p>MP4</p>
                    <p>Up to 30 minutes</p>
                    <p>Less than 2GB</p>
                    <button className={cx('upload-btn')}>Select file</button>
                </div>
            </div>
        </div>
    );
}

export default Upload;
