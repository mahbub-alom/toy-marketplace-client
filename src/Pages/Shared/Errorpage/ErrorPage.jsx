/* eslint-disable no-unused-vars */
import React from 'react';
import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {

    const {error, status} = useRouteError();

    return (
        <div>
            <div className='text-center mt-6 text-3xl'>
                <h2>{error.message}</h2>
            </div>
        </div>
    );
};

export default ErrorPage;