import React from 'react';
import './style.css';
import { Container } from '@mui/material';

// photos
import battlebots from '../../assets/projects/battlebots.jpg';
import hisscussions from '../../assets/projects/hisscussions.gif';
import mockUp from '../../assets/projects/mock-up.gif';
import runbuddy from '../../assets/projects/runbuddy.jpg';
import noteTaker from '../../assets/projects/NoteTaker.png';
import taskinator from '../../assets/projects/Taskinator.png';

const Portfolio = () => {
  const projects = [
    {
      id: 'battlebots',
      name: 'Battle Bots',
      description:
        'Name your robot and fight other robots to the death!',
      image: battlebots,
      url: 'https://jefid.github.io/robot-gladiators/'
    },
    {
      id: 'hisscussions',
      name: 'Hisscussions',
      description:
        'A forum for snake owners! I created this repo and acted as the admin for this group project',
      image: hisscussions,
      url: 'https://pets-r-app.herokuapp.com/'
    },
    {
      id: 'brewsForBootcampers',
      name: ' Brews for Bootcampers',
      description: 'This ap helps burnt out programmers find a drink after a successful project!',
      image: mockUp,
      url: 'https://lawalker4.github.io/date-night-for-bootcampers/'
    },
    {
      id: 'runbuddy',
      name: '',
      description:
        'This app helped me learn HTML. Currently not functional, but focuses on HTML and CSS skills',
      image: runbuddy,
      url: 'https://github.com/Jefid/run-buddy'
    },
    {
      id: 'noteTaker',
      name: 'Note Taker',
      description:
        'Note organizer',
      image: noteTaker,
      url: 'https://pacific-plains-32894.herokuapp.com/notes'
    },
    {
      id: 'taskinator',
      name: 'Taskinator',
      description: 'A task organizer that users date and time to organize plans',
      image: taskinator,
      url: 'https://jefid.github.io/taskinator/'
    },
  ];

  return (
    <div className='work-page'>
      <h1 id='header'> deployed projects </h1>
      {projects.map((project, i) => (
        // <Card id='project-card' key={project.id}>
        //   <CardContent className='card-content'>
        <Container id='project-card' key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <Container>
            <div class='border'>
              <a href={project.url} target='_blank' rel='noreferrer'>
                <img
                  className='img-thumb'
                  src={project.image}
                  alt={project.name}
                  key={project.id}
                />
              </a>
            </div>
          </Container>
        </Container>
      ))}
    </div>
  );
};

export default Portfolio;