import { Container, ImageBox, Info, Stack, Footer, Link } from './styles';

import ImageGenerator from '../../../utils/ImageGenerator';
import { FaGithub } from 'react-icons/fa';

const Project = (props) => {
    const project = props.project;
    const svgString = ImageGenerator().generate(project.name);
    return (
        <Container>
            <ImageBox>
                <img src={svgString} />
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
                    <strong>Tech Stach:</strong> {project.language}
                </span>
            </Stack>

            <Footer>
                <div>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.html_url}
                    >
                        <FaGithub />
                        View Code
                    </Link>
                </div>
            </Footer>
        </Container>
    );
};

export default Project;
