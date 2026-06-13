import React, { useContext } from 'react';

import { About, HeaderContainer, ProjectsContainer, LoadingText, ErrorText, RetryButton } from './styles';

import Project from './Project/index';
import { PortifolioContext } from '../../context/PortifolioContext';

const Projects = () => {
    const { projects, loading, error, refetchProjects } = useContext(PortifolioContext);
    return (
        <HeaderContainer>
            <About>
                <h1>Projects</h1>
                <p>Things I've built so far</p>
            </About>

            {loading && <LoadingText>// fetching repositories...</LoadingText>}

            {error && !loading && (
                <ErrorText>
                    {error}
                    <RetryButton onClick={refetchProjects}>retry</RetryButton>
                </ErrorText>
            )}

            {!loading && !error && (
                <ProjectsContainer>
                    {projects.map((project) =>
                        project.fork ? null : (
                            <Project key={project.id} project={project} />
                        )
                    )}
                </ProjectsContainer>
            )}
        </HeaderContainer>
    );
};

export default Projects;
