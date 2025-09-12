import styled from 'styled-components';

export const Container = styled.div`
    background: ${(props) => props.theme['base-card']};
    border: 2px solid transparent;
    border-radius: 16px;
    height: 25rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, ${(props) => props.theme['yellow']}, ${(props) => props.theme['purple']});
    }
`;

export const ImageBox = styled.div`
    flex: 1; /* take available vertical space */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

export const Info = styled.div`
    margin: 0 1rem 1rem 1rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 1rem;
        background: ${(props) => props.theme['purple']};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 600;
    }

    p {
        max-width: 20rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${(props) => props.theme['base-text']};
        line-height: 1.5;
    }
`;

export const Stack = styled.div`
    display: flex;
    margin: 0 1rem 1rem 1rem;
`;

export const Footer = styled.div`
    margin: 0 1rem 1rem 1rem;
    display: flex;

    div {
        margin-left: auto;
        justify-content: center;
        align-items: center;
        display: flex;

        a {
            margin-left: 0.5rem;
        }
    }
`;

export const Link = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['purple']};
    }
`;
