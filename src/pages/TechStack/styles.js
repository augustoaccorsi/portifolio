import styled from 'styled-components';

export const HeaderContainer = styled.div`
    padding: 2rem 0;
`;

export const About = styled.div`
    background: ${(props) => props.theme['base-card']};
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 3rem;
    text-align: center;
    border-left: 4px solid ${(props) => props.theme['purple']};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
        background: linear-gradient(135deg, ${(props) => props.theme['purple']}, ${(props) => props.theme['purple-dark']});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1.2rem;
        color: ${(props) => props.theme['base-text']};
        line-height: 1.6;
    }
`;

export const TechContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
`;
