/* eslint-disable @typescript-eslint/ban-types */
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import cssVariable from '../../styles/variables.module.scss';

export const ErrorScreen = (
    props: { failureCount?: number; height?: string; callback?: Function } = {
        failureCount: 0,
        height: '%',
        callback: () => null,
    }
) => {
    const { callback, height } = props;
    return (
        <div className="system-screen" style={{ height: `100${height}` }}>
            <ExclamationCircleOutlined style={{ fontSize: 64, color: cssVariable.primaryColor }} />
            <br />
            <div className="txt__huge text-center">
                {'Error'}
                <br/>
                <Link href="/" onClick={() => callback && callback()}>
                    {'Go back'}
                </Link>
            </div>
        </div>
    );
};
