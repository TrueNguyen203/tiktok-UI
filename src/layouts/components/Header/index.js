import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Custom icons
import { UploadIcon, InboxIcon, MessageIcon } from '../../../components/Icon/Icon';

// React components + custom
import config from '../../../config';
import images from '../../../assets/images';
import Button from '../../../components/Button';
import Menu from '../../../components/Propper/Menu';
import React from 'react';
import Image from '../../../components/Image';
import Search from '../Search';

// Tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboards shortcuts',
    },
];

function Header() {
    const [currentUser, setCurrentUser] = useState(false);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    useEffect(() => {
        console.log('currentUser changed to:', currentUser);
    }, [currentUser]);

    const handleUser = () => {
        setCurrentUser((prev) => !prev);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/user',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            separate: true,
            onClick: handleUser,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <React.Fragment>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Link to={config.routes.upload}>
                                        <UploadIcon />
                                    </Link>
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                            </button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Button text to={config.routes.upload}>
                                Upload
                            </Button>
                            <Button primary onClick={handleUser}>
                                Login
                            </Button>
                        </React.Fragment>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} alt="Nguyen Van A" src="" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
