import React from 'react';
import './style.css';
import { Container } from '@mui/material';
import resume from '../../assets/wolfskill-resume.pdf';

function Home() {
  return (
    <div>
      <h1>howdy!</h1>

      <Container id='project-card'>
        <p>Welcome! Use the left navigation to explore.</p>
        <div>
          <a key='resume' target='_blank' rel='noreferrer' href={resume}>
            view resume
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Home;