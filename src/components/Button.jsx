import React from "react";
import classNames from 'classnames'

const Button = ({outline,onClick,className,children,add}) => {
    return (
        <button onClick={onClick} className={classNames('button',className, {
            'button--outline': outline
            },
            )}>
            {children}
        </button>
    )
};

export default Button;