import React from 'react';
import profilePic from '../../assets/cover/profile.jpg';
import './style.css';
import { Container } from '@mui/material';

function About() {
  return (
    <div>
      <h1>I'm Jefid!</h1>

      <Container id='project-card'>
        <h3>My name is Jefferson Quandt</h3>
        <Container>
          <img
            title='hangin in Malibu'
            id='wolfpic'
            alt='wolfpic'
            src={profilePic}
          />
        </Container>
        <p>
          <ul>
            <li>
              I'm a full-stack JavaScript developer with a background in Management.
            </li>
            <li>
              I love solving puzzles, enhancing code, and creating/collaborating
              on projects.
            </li>
            <li>
              I'm skilled in JavaScript, React, CSS, Node, MySql, NoSql, HTML, and Express.
            </li>
          </ul>
        </p>
      </Container>

      <Container id='project-card'>
        <p>
          Current developer plans:
          <ul>
            <li>- honing in my skills on C++ and C# to be able to work with older code</li>
            <li>- updating and improving old projects</li>
            <li>- practicing algorithms</li>
          </ul>
        </p>
      </Container>
    </div>
  );
}

export default About;