import styled from 'styled-components';

export const Container = styled.div`
    background: ${(props) => props.theme['base-card']};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme['base-hover']};
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: ${(props) => props.theme['purple']};
        transform: translateY(-3px);
    }
`;

export const ImageBox = styled.div`
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['base-input']};
    border-bottom: 1px solid ${(props) => props.theme['base-hover']};

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

export const Info = styled.div`
    padding: 1.25rem 1.25rem 0.5rem;
    flex: 1;

    h2 {
        font-family: 'Courier New', monospace;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme['purple']};
    }

    p {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
        line-height: 1.6;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;

export const Stack = styled.div`
    padding: 0 1.25rem 0.75rem;

    span {
        font-family: 'Courier New', monospace;
        font-size: 0.75rem;
        color: ${(props) => props.theme['yellow']};
        background: ${(props) => props.theme['base-input']};
        padding: 0.2rem 0.6rem;
        border-radius: 2px;
    }
`;

export const Footer = styled.div`
    padding: 0.75rem 1.25rem;
    border-top: 1px solid ${(props) => props.theme['base-hover']};
    display: flex;
    justify-content: flex-end;

    div {
        display: flex;
        gap: 1rem;
    }
`;

export const Link = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    color: ${(props) => props.theme['base-label']};
    transition: color 0.2s ease;

    &:hover {
        color: ${(props) => props.theme['purple']};
    }
`;
