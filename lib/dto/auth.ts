export interface ReqLoginDto {
    email: string;
    password: string;
}

export interface LoginDto {
    token: string;
    avatar: string;
    id: string;
    email: string;
    fullName: string;
}
