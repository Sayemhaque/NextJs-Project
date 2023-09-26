import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center flex-col gap-8 items-center h-screen'>
            <h1 className='text-4xl font-bold'>This page is not found</h1>
            <Link href="/" className='underline underline-offset-4 text-fuchsia-700'>Back to home page</Link>
        </div>
    );
};

export default NotFound;