import { api } from '@/api/index';
import { DashboardGeneral } from '@/components/dashboard/DashboardGeneral';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { DashboardRegion } from '@/components/dashboard/DashboardRegion';
import { ErrorScreen } from '@/components/ErrorSceen';
import { LoadingScreen } from '@/components/LoadingScreen';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { Page } from 'lib/layout/Page';

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['dashboard'], api.Dashboard.getDetails);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

function Dashboard() {
    // const intl = useIntl();
    const { data, isLoading, isError } = useQuery(['dashboard'], api.Dashboard.getDetails, {});

    if (isLoading) return <LoadingScreen height="%" />;

    if (isError || !data) return <ErrorScreen height="%" />;

    return (
        <>
            <div className="dashboard-title unbold">Dashboard</div>
            <DashboardGeneral data={data} />
            <DashboardOverview data={data} />
            <DashboardRegion data={data} />
        </>
    );
}

export default Page(Dashboard, 'InnerLayout', 'dashboard');
