import { Container, ImageBox, Info, Stack, Footer, Link, Stats, StatItem } from './styles';

import ImageGenerator from '../../../utils/ImageGenerator';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const Project = (props) => {
    const project = props.project;
    const svgString = ImageGenerator().generate(project.name);
    const liveUrl = project.homepage || (project.has_pages ? `https://augustoaccorsi.github.io/${project.name}` : null);
    return (
        <Container>
            <ImageBox>
                <img src={svgString} alt={project.name} />
            </ImageBox>
            <Info>
                <h2>{project.name}</h2>
                <p>
                    {project.description !== null
                        ? project.description
                        : project.name}
                </p>
            </Info>
            <Stack>
                <span>
                    <strong>Tech Stack:</strong> {project.language}
                </span>
            </Stack>

            <Footer>
                <Stats>
                    <StatItem title="Stars">
                        <FaStar />
                        {project.stargazers_count}
                    </StatItem>
                    <StatItem title="Forks">
                        <FaCodeBranch />
                        {project.forks_count}
                    </StatItem>
                </Stats>
                <div>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.html_url}
                    >
                        <FaGithub />
                        View Code
                    </Link>
                    {liveUrl && (
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href={liveUrl}
                        >
                            <FaExternalLinkAlt />
                            Live Demo
                        </Link>
                    )}
                </div>
            </Footer>
        </Container>
    );
};

export default Project;
