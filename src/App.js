import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';

function App() {
  return (
    <div style={{ margin: 'auto', paddingTop: '10%', paddingBottom: '2%' }}>
      <Container maxWidth="md" align="center" justify="center">
        <Navbar />
        <Form />
      </Container>
    </div>
  );
}

export default App;
