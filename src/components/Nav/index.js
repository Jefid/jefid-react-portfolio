import React from 'react';
import './style.css';
import avatar from '../../assets/icons/circle-avatar.png';
import { Link } from 'react-router-dom';
import { Container, SvgIcon, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Nav() {
  return (
    <div className='side-nav'>
      <img alt='avatar' src={avatar} />
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/work'>work</Link>
        </li>
        <li>
          <Link to='/contact'>contact</Link>
        </li>

        <Container>
          <a
            href='https://github.com/wolfskillobyte'
            rel='noreferrer'
            target='_blank'
          >
            <Tooltip title='GitHub'>
              <SvgIcon
                alt='github-icon'
                fontSize='large'
                component={GitHubIcon}
              />
            </Tooltip>
          </a>{' '}
          <a
            href='https://www.linkedin.com/in/srwolfskill/'
            rel='noreferrer'
            target='_blank'
          >
            <Tooltip title='LinkedIn'>
              <SvgIcon
                alt='linkedin-icon'
                fontSize='large'
                component={LinkedInIcon}
              />
            </Tooltip>
          </a>
        </Container>
      </ul>
    </div>
  );
}

export default Nav;