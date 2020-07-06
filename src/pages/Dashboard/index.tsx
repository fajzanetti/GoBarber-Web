import React from 'react';

import { Container } from './styles';

import progress from '../../assets/in_progress.svg';

const Dashboard: React.FC = () => (
  <Container>
    <img src={progress} alt="GoBarber" />
  </Container>
);

export default Dashboard;
