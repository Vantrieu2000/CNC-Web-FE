import { Validate } from '@/type/validate';

export function ValidateLibrary(): Validate {
    return {
        required: [
            {
                required: true,
                message: 'Required',
            },
        ],
    };
}
