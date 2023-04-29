import { DashboardDto } from '@/dto/dashboard';
import { customAxios } from '..';

export const Dashboard = {
    getDetails,
};

async function getDetails(): Promise<DashboardDto> {
    const response = await customAxios.get('admin/api-dashboard');
    return response.data;
}
