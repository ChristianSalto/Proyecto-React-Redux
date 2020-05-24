import React from 'react';
import T from 'prop-types';

export default function Error(error) {
    return (
        <div className="div-error">
            <strong className="error-message">{error.message}</strong>
        </div>
    );
}


Error.prototype = {
    error: T.string,
};