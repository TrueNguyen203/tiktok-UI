import { useState } from 'react';

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

import { Wrapper as PropperWrapper } from '../';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnclick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
            <PropperWrapper className={cx('menu-propper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PropperWrapper>
        </div>
    );

    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <>
            <Tippy
                interactive={true}
                delay={[0, 400]}
                offset={[12, 8]}
                hideOnClick={hideOnclick}
                placement="bottom-end"
                render={renderResult}
                onHide={handleResetMenu}
            >
                {children}
            </Tippy>
        </>
    );
}

Menu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array,
    hideOnclick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
