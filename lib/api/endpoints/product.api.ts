import { customAxios } from '@/api/index';

export const Product = {
    createProduct
};


async function createProduct(payload: any): Promise<any> {
    const response = await customAxios.post('products', {
        ...payload,
    });
    return response.data;
}