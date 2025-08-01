import React from 'react';
import { useLoader } from '../../context/LoaderContext';

const Loading = () => {

    const { loading } = useLoader();

    if (!loading) return null;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin h-16 w-16 rounded-full border-4 border-blue-500 border-b-transparent">

            </div>

        </div>
    )
}

export default Loading
