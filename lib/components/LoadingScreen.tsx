import { Spin } from 'antd';

const defaultProps = {
    failureCount: 0,
    height: '%',
    type: '',
    margin: '0',
    overlay: false,
    loadingSize: { width: 128, height: 128 },
};

export const LoadingScreen = (
    props: {
        failureCount?: number;
        height?: string;
        margin?: string;
        overlay?: boolean;
        loadingSize?: { width: number; height: number };
    } = defaultProps
) => {
    const { failureCount, height, margin, loadingSize } = {
        ...defaultProps,
        ...props,
    };
    return (
        <div className={'system-screen'} style={{ height: `100${height}`, margin: margin }}>
            <Spin indicator={<img src="/images/loading.svg" style={loadingSize} alt="" />} />
            {!!failureCount && <div className={`text-center`}>Retrying {failureCount}/3</div>}
        </div>
    );
};
