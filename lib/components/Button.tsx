import { Button as AntdButton } from 'antd';
import { ButtonProps } from 'antd/es/button/button';
import clsx from 'clsx';

const Button = (props: ButtonProps) => <AntdButton {...props}>{props.children}</AntdButton>;

Button.Confirm = function Confirm(props: ButtonProps) {
    return (
        <AntdButton type="primary" {...props} className={clsx('btn-confirm', props.className)}>
            {props.children}
        </AntdButton>
    );
};

Button.Cancel = function Cancel(props: ButtonProps) {
    return (
        <AntdButton type="default" {...props} className={clsx('btn-cancel', props.className)}>
            {props.children}
        </AntdButton>
    );
};

export default Button;
