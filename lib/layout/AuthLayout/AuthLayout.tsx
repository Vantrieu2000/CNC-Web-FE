
import React from 'react';

export const AuthLayout = ({ children }) => {
    return (
        <div className="authlayout-root">
            <div className="authlayout-container">{children}</div>
        </div>
    );
};
