import React from 'react';

function Alert({ message, type }) {
    const alertClass = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div className={`fixed bottom-5 right-5 p-4 ${alertClass} text-white rounded-md shadow-md`}>
            <p>{message}</p>
        </div>
    );
}

export default Alert;
