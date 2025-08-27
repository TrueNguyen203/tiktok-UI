import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '../../../config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccount from '../../../components/SuggestedAccount/SuggestedAccount';
import Footer from '../../../components/Footer';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '../../../components/Icon/Icon';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccount label="Suggested Account" />
            <SuggestedAccount label="Following Account" />
            <Footer />
        </aside>
    );
}

export default Sidebar;
