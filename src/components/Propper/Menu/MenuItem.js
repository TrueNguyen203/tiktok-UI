import Button from '../../Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    const handleClick = () => {
        if (data.onClick) data.onClick(); // Call the menu item's onClick
        if (onClick) onClick(); // Call the parent's onClick
    };

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={handleClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
