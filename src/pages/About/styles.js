import styled from 'styled-components';

export const HeaderContainer = styled.div`
    padding: 2rem 0;
`;

export const AboutMe = styled.div`
    background: ${(props) => props.theme['base-card']};
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 3rem;
    border-left: 4px solid ${(props) => props.theme['purple']};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
        color: ${(props) => props.theme['purple']};
        background: linear-gradient(
            135deg,
            ${(props) => props.theme['purple']},
            ${(props) => props.theme['purple-dark']}
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1rem;
        line-height: 1.6;
        color: ${(props) => props.theme['base-text']};
    }
`;

export const Experience = styled.div`
    justify-content: space-between;
    /* display: flex; */
    gap: 2rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const WorkExperience = styled.div`
    background: ${(props) => props.theme['base-card']};
    border-radius: 12px;
    padding: 2rem;
    flex: 1;
    border-left: 4px solid ${(props) => props.theme['purple']};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
        color: ${(props) => props.theme['purple']};
        background: linear-gradient(
            135deg,
            ${(props) => props.theme['purple']}
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1rem;
        line-height: 1.6;
        color: ${(props) => props.theme['base-text']};
    }
`;

export const EducationTitle = styled.h1`
    margin-bottom: 1rem;
    font-size: 3rem;
    color: ${(props) => props.theme['yellow']};
    background: linear-gradient(
        135deg,
        ${(props) => props.theme['yellow']},
        #b8860b
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const AchievementTitle = styled.h1`
    margin-top: 5rem;
    margin-bottom: 1rem;
    font-size: 3rem;
    color: ${(props) => props.theme['yellow']};
    background: linear-gradient(
        135deg,
        ${(props) => props.theme['yellow']},
        #b8860b
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;