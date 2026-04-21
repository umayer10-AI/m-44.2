"use client"
import React from 'react';
import ProductNavLink from '../../component/ProductNavLink';

const layout = ({children}) => {

    return (
        <div className='flex '>

            <ProductNavLink></ProductNavLink>
            
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;