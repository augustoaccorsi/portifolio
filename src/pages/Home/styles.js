import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 6rem);
    padding: 0 2rem;
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
