import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('info-wrapper')}>
                <a href="/" className={cx('info-text')}>
                    Công ty
                </a>
                <a href="/" className={cx('info-text')}>
                    Chương trình
                </a>
                <a href="/" className={cx('info-text')}>
                    Điều khoản và chính sách
                </a>
            </div>
            <div>
                <p className={cx('made-by')}>© 2025 TikTok-clone by true203</p>
            </div>
        </footer>
    );
}

export default Footer;
