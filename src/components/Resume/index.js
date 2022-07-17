import React from 'react';
import './style.css';
import { Container } from '@mui/material';
import resume from '../../assets/Resume.doc';
function Resume() {
  return (
    <div>
      <h1>Welcome!</h1>

      <Container id='project-card'>
        <p>Use the navigation bar to explore!</p>
        <div>
          <a key='resume' target='_blank' rel='noreferrer' href={resume}>
            view resume
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Resume;