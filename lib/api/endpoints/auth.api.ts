import { customAxios } from '@/api/index';
import { LoginDto, ReqLoginDto } from '@/dto/auth';

export const Auth = {
    login,
    me
};

async function login(payload: ReqLoginDto): Promise<LoginDto> {
    const response = await customAxios.post('auth/login-admin', {
        ...payload,
    });
    return response.data;
}
async function me(): Promise<any> {
    const response = await customAxios.get('auth/me');
    return response.data;
}
