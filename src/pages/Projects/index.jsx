import React, { useContext } from 'react';

import { About, HeaderContainer, ProjectsContainer } from './styles';

import Project from './Project/index';
import { PortifolioContext } from '../../context/PortifolioContext';

const Projects = () => {
    const { projects } = useContext(PortifolioContext);
    return (
        <HeaderContainer>
            <About>
                <h1>Projects</h1>
                <p>Things I’ve built so far</p>
            </About>

            <ProjectsContainer>
                {projects.map((project, key) => {
                    return project.fork ? null : (
                        <Project key={key} project={project} />
                    );
                })}
            </ProjectsContainer>
        </HeaderContainer>
    );
};

export default Projects;
