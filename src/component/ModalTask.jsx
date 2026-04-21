"use client";
import React from 'react';
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

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
                  <TextField className="w-full" name="email" type="text">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField className="w-full" name="company">
                    <Label>Company</Label>
                    <Input placeholder="Enter your company name" />
                  </TextField>
                  <TextField className="w-full" name="message">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
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