import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    fetch('/resumeData.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.portfolio.projects);
      });
  }, []);

  return (
    <section id='portfolio' className='h-auto'>
      <h1 className=''>Check Out Some of My Works.</h1>

      <div
        className='hideScrollbar'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          margin: '0 40px',
          overflowX: 'scroll',
          overflowY: 'hidden',
          width: '95%',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none', // Hide the scrollbar for Firefox
          '-ms-overflow-style': 'none', // Hide the scrollbar for IE and Edge
        }}
      >
        {projects &&
          projects.map((project) => (
            <div
              key={project.title}
              style={{
                flex: '0 0 auto', // Prevents items from stretching
                height: '320px',
                width: '200px',
                backgroundColor: project.bgColor,
                margin: '0 10px', // Adds some space between items
                cursor: 'pointer',
                position: 'relative',
                display: 'flex', // Center the image
                justifyContent: 'center', // Center the image
                alignItems: 'center', // Center the image
              }}
              onClick={() => window.open(project.url, '_blank')}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                src={`images/portfolio/${project.image}`}
                alt=''
                style={{
                  height: '120px',
                  width: '120px',
                  objectFit: 'contain',
                }}
              />
              {hoveredProject === project.title && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    padding: '8px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    wordWrap: 'break-word',
                    whiteSpace: 'normal',
                  }}
                >
                  {project.title}
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
