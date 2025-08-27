import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import AccountItem from '../AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    const [accounts, setAccounts] = useState([]);
    const [seeMore, setSeeMore] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => {
                let accountlist = [...users];
                if (seeMore === true) {
                    setAccounts(accountlist.slice(0, 3));
                } else {
                    setAccounts(accountlist);
                }
            });
    }, [seeMore]);

    const handleSeeMore = () => {
        setSeeMore(!seeMore);
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {accounts.map((account) => (
                <AccountItem
                    key={account.id}
                    data={{
                        nickname: account.username,
                        fullName: account.name,
                    }}
                    bold={true}
                />
            ))}
            <div className={cx('btn-wrapper')}>
                <p className={cx('more-btn')} onClick={handleSeeMore}>
                    {seeMore ? 'See All' : 'See Less'}
                </p>
            </div>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string,
};

export default SuggestedAccount;
