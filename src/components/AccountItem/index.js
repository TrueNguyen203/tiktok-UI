import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data, bold = false }) {
    let nickname = 'nguyenvana';
    let fullName = 'NguyenVanA';
    if (data.nickname) {
        nickname = data.nickname;
    }
    if (data.fullName) {
        fullName = data.fullName;
    }

    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="" alt="Account avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className={cx({ bold })}>{fullName}</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>{nickname}</span>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
