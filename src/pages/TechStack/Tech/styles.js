import styled from "styled-components";

export const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1.25rem 1rem;
    background: ${(props) => props.theme['base-card']};
    border-radius: 4px;
    border-bottom: 2px solid ${(props) => props.theme['purple']};
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: ${(props) => props.theme['yellow']};
        transform: translateY(-3px);
    }

    img {
        height: 3rem;
        width: 3rem;
        object-fit: contain;
    }

    span {
        font-family: 'Courier New', monospace;
        font-size: 0.8rem;
        font-weight: 600;
        color: ${(props) => props.theme['base-text']};
        text-align: center;
        letter-spacing: 0.03em;
    }
`;
