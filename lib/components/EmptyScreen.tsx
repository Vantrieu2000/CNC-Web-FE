import { Empty } from 'antd';

export const EmptyScreen = (
    props: { height?: string } = {
        height: '%',
    }
) => {
    const { height } = props;
    return (
        <div className="system-screen" style={{ height: `100${height}` }}>
            <Empty description={'No data'} />
        </div>
    );
};
