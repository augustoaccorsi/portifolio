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

export const LoadingText = styled.p`
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    padding: 3rem 0;
    letter-spacing: 0.05em;
`;

export const ErrorText = styled.div`
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    color: ${(props) => props.theme['yellow']};
    text-align: center;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const RetryButton = styled.button`
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme['purple']};
    background: transparent;
    color: ${(props) => props.theme['purple']};
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;

    &:hover {
        background: ${(props) => props.theme['purple']};
        color: #fff;
    }
`;
