import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center px-6">
      
      <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
        404
      </h1>

      <p className="text-2xl md:text-3xl font-semibold text-gray-600 mt-4">
        Page Not Found
      </p>

      <p className="text-gray-500 mt-2 mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </Link>

    </div>
    );
};

export default NotFound;