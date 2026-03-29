import styled from 'styled-components';

export const HeaderContainer = styled.div`
    padding: 3rem 0 5rem;
`;

export const AboutMe = styled.div`
    position: relative;
    border-radius: 4px;
    padding: 2.5rem 2.5rem 2.5rem 3rem;
    margin-bottom: 3rem;
    background: ${(props) => props.theme['base-card']};
    border-left: 3px solid ${(props) => props.theme['purple']};

    &::before {
        content: '// about.md';
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
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme['purple']};

        &::before {
            content: '> ';
            opacity: 0.5;
        }
    }

    p {
        font-size: 1rem;
        line-height: 1.8;
        color: ${(props) => props.theme['base-text']};
        max-width: 80ch;
    }
`;

export const Experience = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
`;

export const WorkExperience = styled.div`
    background: ${(props) => props.theme['base-card']};
    border-radius: 4px;
    padding: 2rem;
    border-top: 3px solid ${(props) => props.theme['purple']};

    h1 {
        font-family: 'Courier New', monospace;
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 2rem;
        color: ${(props) => props.theme['purple']};
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &::before {
            content: '◆';
            font-size: 0.8rem;
        }
    }

    p {
        margin-bottom: 1rem;
        font-size: 1rem;
        line-height: 1.6;
        color: ${(props) => props.theme['base-text']};
    }
`;

export const EducationTitle = styled.h1`
    font-family: 'Courier New', monospace;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['yellow']};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '◆';
        font-size: 0.8rem;
    }
`;

export const AchievementTitle = styled.h1`
    font-family: 'Courier New', monospace;
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme['yellow']};
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '◆';
        font-size: 0.8rem;
    }
`;
