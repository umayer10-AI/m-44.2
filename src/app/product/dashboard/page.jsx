import Menu from '@/component/Menu';
import Tab from '@/component/Tab';
import React from 'react';

const page = () => {
    return (
        <div className='flex justify-center my-20'>
            <Tab></Tab>
            <Menu></Menu>
        </div>
    );
};

export default page;