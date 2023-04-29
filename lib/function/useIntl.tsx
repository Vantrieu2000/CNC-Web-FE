/* eslint-disable no-useless-escape */
import jaJP from '@/locale/ja-JP';

export const injectString = (base: string, variables: { [key: string]: string }) => {
    const re = /\$\(([^\)]+)?\)/g;
    let match;
    while ((match = re.exec(base))) {
        base = base.replace(match[0], variables[match[1]] || '');
        re.lastIndex = 0;
    }
    return base;
};

export const useIntl = (language = 'ja-JP') => {
    const messages = { 'ja-JP': jaJP };

    return {
        message: function (id: string, options?: { variables?: { [key: string]: string }; fallbackId?: string }) {
            if (messages?.[language]?.[id] !== undefined) {
                if (options?.variables) {
                    return injectString(messages[language][id], options.variables);
                }
                return messages[language][id];
            } else {
                console.error('Intl not found', id);
                return options?.fallbackId ? this.message(options.fallbackId) : 'Intl ERROR';
            }
        },
    };
};
