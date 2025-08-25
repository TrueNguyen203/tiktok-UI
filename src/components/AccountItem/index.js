import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:100:100.jpeg?biz_tag=tiktok_user.user_cover&dr=14579&idc=my2&ps=13740610&refresh_token=19ffe2b3&shcp=c1333099&shp=30310797&t=4d5b0474&x-expires=1756177200&x-signature=fux1V4bn7ONJzM%2F0i4hGR1in7K0%3D"
                alt="Account avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
