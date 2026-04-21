import { Button } from '@heroui/react';
import {Envelope, Globe, Plus, TrashBin} from "@gravity-ui/icons";
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10'>About Page</h2>
            <div className='flex justify-center items-center'>
                <Button>Primary</Button>
                <Button variant='secondary' className={'bg-gray-800'}>Primary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="danger-soft">Danger Soft</Button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-5">
                <Button>
                    <Globe />
                    Search
                </Button>
                <Button variant="secondary">
                    <Plus />
                    Add Member
                </Button>
                <Button>
                    <Envelope />
                    Email
                </Button>
                <Button variant="danger">
                    <TrashBin />
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default page;