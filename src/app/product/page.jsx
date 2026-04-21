"use client"
import { Avatar, Button, toast } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div>
        <div className="flex items-center gap-4 justify-center my-10">
            <Avatar color="default">
            <Avatar.Fallback>DF</Avatar.Fallback>
            </Avatar>
            <Avatar color="accent">
            <Avatar.Fallback>AC</Avatar.Fallback>
            </Avatar>
            <Avatar color="success">
            <Avatar.Fallback>SC</Avatar.Fallback>
            </Avatar>
            <Avatar color="warning">
            <Avatar.Fallback>WR</Avatar.Fallback>
            </Avatar>
            <Avatar color="danger">
            <Avatar.Fallback>DG</Avatar.Fallback>
            </Avatar>
        </div>
        <div className="flex justify-center">
            <Button size="sm" variant="secondary" onPress={() => toast.success("Operation completed")}>
                Success
            </Button>
        </div>
    </div>
  );
};

export default page;
