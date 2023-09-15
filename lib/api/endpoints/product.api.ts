import { customAxios } from '@/api/index';

export const Product = {
    createProduct,
    getDetailProduct
};


async function createProduct(payload: any): Promise<any> {
    const response = await customAxios.post('products', {
        ...payload,
    });
    return response.data;
}

async function getDetailProduct(payload: any): Promise<any> {
    const response = await customAxios.get(`products/${payload}`);
    return response.data;
}