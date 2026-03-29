import styled from 'styled-components';

export const HeaderContainer = styled.div`
    padding: 3rem 0 5rem;
`;

export const About = styled.div`
    position: relative;
    background: ${(props) => props.theme['base-card']};
    border-radius: 4px;
    padding: 2.5rem;
    margin-bottom: 3rem;
    border-left: 3px solid ${(props) => props.theme['purple']};
    text-align: center;

    &::before {
        content: '// projects.json';
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.75rem;
        color: ${(props) => props.theme['base-label']};
        letter-spacing: 0.05em;
    }

    h1 {
        font-family: 'Courier New', monospace;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: ${(props) => props.theme['purple']};
    }

    p {
        font-size: 1rem;
        color: ${(props) => props.theme['base-label']};
        letter-spacing: 0.03em;
    }
`;

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
`;
