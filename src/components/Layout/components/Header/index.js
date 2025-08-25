import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PropperWrapper } from '../../../Propper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Propper/Menu';
import React from 'react';
import Image from '../../../Image';

import {
    UploadIcon,
    InboxIcon,
    SearchIcon,
    HomeIcon,
    HomeActivateIcon,
    UpseGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    MessageIcon,
} from '../../../Icon/Icon';

// Tippy
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmarkCircle,
    faSpinner,
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
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
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
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Image src={images.logo} alt="tiktok" />
                <HeadlessTippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PropperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PropperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <React.Fragment>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
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
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </React.Fragment>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1594805258216454~tplv-tiktokx-cropcenter:100:100.jpeg?biz_tag=tiktok_user.user_cover&dr=14579&idc=my2&ps=13740610&refresh_token=19ffe2b3&shcp=c1333099&shp=30310797&t=4d5b0474&x-expires=1756177200&x-signature=fux1V4bn7ONJzM%2F0i4hGR1in7K0%3D"
                            />
                        ) : (
                            <React.Fragment>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </React.Fragment>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
