import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 6rem);
    padding: 0 2rem;
    gap: 3rem;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
        font-family: 'Courier New', monospace;
        font-size: clamp(2rem, 6vw, 4.5rem);
        font-weight: 700;
        line-height: 1.15;
        color: ${(props) => props.theme['base-title']};
        transition: color 0.3s ease;

        &:nth-child(1) {
            font-size: clamp(1rem, 2.5vw, 1.5rem);
            color: ${(props) => props.theme['base-label']};
            font-weight: 400;
            letter-spacing: 0.1em;
            text-transform: uppercase;

            &::before {
                content: '$ ';
                color: ${(props) => props.theme['purple']};
            }
        }

        &:nth-child(2) {
            font-size: clamp(1rem, 2vw, 1.2rem);
            color: ${(props) => props.theme['base-label']};
            font-weight: 400;
        }

        &:nth-child(3) {
            color: ${(props) => props.theme['purple']};
        }

        &:nth-child(4) {
            font-size: clamp(0.9rem, 2vw, 1.2rem);
            color: ${(props) => props.theme['base-label']};
            font-weight: 400;
            letter-spacing: 0.05em;

            &::after {
                content: '_';
                animation: blink 1s step-end infinite;
                color: ${(props) => props.theme['purple']};
            }
        }
    }

    @keyframes blink {
        50% { opacity: 0; }
    }

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ResumeButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.65rem 1.4rem;
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme['purple']};
    background: transparent;
    color: ${(props) => props.theme['purple']};
    font-family: 'Courier New', monospace;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: background 0.2s ease, color 0.2s ease;

    svg {
        font-size: 0.8rem;
    }

    &:hover {
        background: ${(props) => props.theme['purple']};
        color: #fff;
    }
`;

export const ScrollHint = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    background: none;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme['base-label']};
    font-family: 'Courier New', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.7;
    transition: opacity 0.2s ease, color 0.2s ease;
    animation: bounce 2s ease-in-out infinite;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        opacity: 1;
        color: ${(props) => props.theme['purple']};
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(6px); }
    }
`;
