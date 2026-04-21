import { Card } from '@heroui/react';
import React from 'react';

const TaskCarts = ({p}) => {
    return (
        <Card variant="primary" className='border-2 border-secondary'>
        <Card.Header>
          <Card.Title>{p.title}</Card.Title>
          <Card.Description>{p.description}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>{p.priority}</p>
        </Card.Content>
        <Card.Content>
          <p>{p.status}</p>
        </Card.Content>
        <Card.Content>
          <p>The default card variant for most use cases</p>
        </Card.Content>
      </Card>
    );
};

export default TaskCarts;