"use client";
import React from 'react';
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField, ListBox, Select} from "@heroui/react";

const ModalTask = ({createTask}) => {
    return (
        <Modal>
      <Button variant="secondary">Open Cart</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add To Cart</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createTask} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your cart Title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your description" />
                  </TextField>

        <Select className="w-[256px]" name='priority' placeholder="Select one">
      <Label>Priority</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="low" textValue="Low">
            Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="medium" textValue="Medium">
            Medium
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="high" textValue="High">
            High
            <ListBox.ItemIndicator />
          </ListBox.Item>
          
        </ListBox>
      </Select.Popover>
    </Select>

                                <Select className="w-[256px]" name='status' placeholder="Select one">
                                <Label>Status</Label>
                                <Select.Trigger>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                    <ListBox.Item id="pending" textValue="Pending">
                                        Pending
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="process" textValue="Process">
                                        Process
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="completed" textValue="Completed">
                                        Completed
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    
                                    </ListBox>
                                </Select.Popover>
                                </Select>
                  

                  <TextField className="w-full" name="AssignTo">
                    <Label>Assign To</Label>
                    <Input placeholder="Enter your Assign To" />
                  </TextField>

                    <Modal.Footer>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type='submit' slot="close">Send Task</Button>
                    </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default ModalTask;