import React from 'react';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainer {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainer> = ({ messages }) => (
  <Container>
    {messages.map((message) => (
      <Toast
        key={message.id}
        toast={message}
      />
    ))}
  </Container>
);

export default ToastContainer;