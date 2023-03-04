

import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Projects.css';
import port from './portfolio.png'
import dt from './Devtimes.png'
import br from './Brof.png'
import li from './more.png'

const projectsData = [
    {
      name: 'Portfolio',
      link:  'dghskdhgksjg',
      image: port,
    },
    {
      name: 'DeveloperTimes',
      link: 'https://developer-times-project-front.vercel.app/',
      image: dt,
    },
    {
      name: 'BroFood',
      link: 'https://www.linkedin.com/posts/deep-salunkhe-917931225_project-github-mern-activity-7025070234503897088-rAgp?utm_source=share&utm_medium=member_android',
      image: br,
    },
    {
      name: '....More ',
      link: 'https://www.linkedin.com/in/deep-salunkhe-917931225/',
      image: li,
    },

  ];

export default function Projects() {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    delay: 500,
  });

  return (
    <animated.div className='Projects' style={props}>
      <h1>Projects</h1>
      <div className='allProjects'>
        {projectsData.map((project, index) => (
          <div key={index} className='project'>
            <h2>{project.name}</h2>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <img src={project.image} alt={project.name} className="proimg" />
            </a>
          </div>
        ))}
      </div>
    </animated.div>
  );
}

