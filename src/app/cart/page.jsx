import ModalTask from '@/component/ModalTask';
import TaskCarts from '@/component/TaskCarts';
import { createTask } from '@/lib/action';
import { cartInfo } from '@/lib/cart';
import React from 'react';

const page = async () => {

    const data = await cartInfo()
    // console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-6'>Carts Page: {data.length}</h2>
            <div className='flex justify-center my-5'>
                <ModalTask createTask={createTask}></ModalTask>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[90%] mx-auto'>
                {
                    data.map(v => <TaskCarts key={v.id} p={v}></TaskCarts>)
                }
            </div>
        </div>
    );
};

export default page;