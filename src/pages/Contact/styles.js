import styled from 'styled-components';

export const PageContainer = styled.div`
    padding: 2rem 0;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const HeaderSection = styled.div`
    text-align: center;
    background: ${(props) => props.theme['base-card']};
    border-radius: 16px;
    padding: 3rem 2rem;
    border-left: 4px solid ${(props) => props.theme['purple']};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        background: ${(props) => props.theme['purple']};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 700;
    }

    p {
        font-size: 1.3rem;
        color: ${(props) => props.theme['base-text']};
        line-height: 1.6;
        max-width: 600px;
        margin: 0 auto;
    }
`;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
`;

export const ContactCard = styled.div`
    background: ${(props) => props.theme['base-card']};
    border-radius: 16px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(
            135deg,
            ${(props) => props.theme['yellow-dark']},
            ${(props) => props.theme['purple-dark']}
        );
    }
`;

export const ContactIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${(props) => props.theme['base-text']};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;

    svg {
        font-size: 2rem;
        color: white;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const ContactTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    background: ${(props) => props.theme['base-text']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
`;

export const ContactText = styled.p`
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
`;

export const ContactButton = styled.a`
    background: ${(props) => props.theme['purple']};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    display: inline-block;
    margin-top: 0.5rem;

    &:hover {
        background: ${(props) => props.theme['purple-dark']};
    }
`;

export const SocialSection = styled.div`
    text-align: center;
    background: ${(props) => props.theme['base-card']};
    border-radius: 16px;
    padding: 2.5rem;
    border-left: 4px solid ${(props) => props.theme['yellow']};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
`;

export const SocialTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    background: ${(props) => props.theme['yellow']};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

export const SocialLink = styled.a`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${(props) => props.theme['yellow']};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${(props) => props.theme['yellow']};
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    svg {
        font-size: 1.5rem;
        color: white;
        position: relative;
        z-index: 1;
    }

    &:hover {
        background: ${(props) => props.theme['yellow-dark']};
    }
`;
