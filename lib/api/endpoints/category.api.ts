import { customAxios } from '@/api/index';

export const Category = {
    getAllCategory,
    getAllCategoryAndData
};


async function getAllCategory(payload: any): Promise<any> {
    const response = await customAxios.get('category/getListCategory', {
        params : payload,
    });
    return response.data;
}

async function getAllCategoryAndData(payload: any): Promise<any> {
    const response = await customAxios.get('category', {
        params : payload,
    });
    return response.data;
}