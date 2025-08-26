import { useState, forwardRef } from 'react';
import images from '../../assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        if (src) {
            setFallBack(src);
        } else {
            setFallBack(images.noImage);
        }
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || handleError()}
            alt={alt}
            {...props}
        />
    );
});

export default Image;
