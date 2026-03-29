import styled from 'styled-components';

export const PageContainer = styled.div`
    padding: 3rem 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const HeaderSection = styled.div`
    position: relative;
    background: ${(props) => props.theme['base-card']};
    border-radius: 4px;
    padding: 2.5rem;
    border-left: 3px solid ${(props) => props.theme['purple']};
    text-align: center;

    &::before {
        content: '// contact.md';
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

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.5rem;
`;

export const ContactCard = styled.div`
    background: ${(props) => props.theme['base-card']};
    border-radius: 4px;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border: 1px solid ${(props) => props.theme['base-hover']};
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: ${(props) => props.theme['purple']};
        transform: translateY(-3px);
    }
`;

export const ContactIcon = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 1.25rem;
        color: ${(props) => props.theme['purple']};
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;
`;

export const ContactTitle = styled.h3`
    font-family: 'Courier New', monospace;
    font-size: 0.85rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-label']};
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0;
`;

export const ContactText = styled.p`
    font-size: 0.95rem;
    color: ${(props) => props.theme['base-text']};
    margin: 0;
    line-height: 1.4;
`;

export const ContactButton = styled.a`
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    background: transparent;
    border: 1px solid ${(props) => props.theme['purple']};
    color: ${(props) => props.theme['purple']};
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease;

    &:hover {
        background: ${(props) => props.theme['purple']};
        color: #fff;
    }
`;

export const SocialSection = styled.div`
    background: ${(props) => props.theme['base-card']};
    border-radius: 4px;
    padding: 2rem;
    border-top: 2px solid ${(props) => props.theme['yellow']};
    text-align: center;
`;

export const SocialTitle = styled.h2`
    font-family: 'Courier New', monospace;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme['yellow']};
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;

export const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.25rem;
`;

export const SocialLink = styled.a`
    width: 48px;
    height: 48px;
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-hover']};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: border-color 0.2s ease, background 0.2s ease;

    svg {
        font-size: 1.3rem;
        color: ${(props) => props.theme['base-text']};
        transition: color 0.2s ease;
    }

    &:hover {
        border-color: ${(props) => props.theme['purple']};
        background: ${(props) => props.theme['base-card']};

        svg {
            color: ${(props) => props.theme['purple']};
        }
    }
`;
