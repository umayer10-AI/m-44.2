"use client"
import React from 'react';
import { Button } from '@heroui/react';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {

    const {pending} = useFormStatus();

    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Sending..." : "Send Task"}
        </Button>
    );
};

export default SubmitButton;