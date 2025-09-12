import styled from "styled-components";

export const Image = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    background: ${(props) => props.theme['base-card']};
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
        background: linear-gradient(90deg, ${(props) => props.theme['yellow']}, ${(props) => props.theme['purple-dark']});
    }

    img {
        height: 9rem;
        border-radius: 12px;
        transition: all 0.3s ease;
        margin-bottom: 1rem;
    }

    span {
        text-align: center;
        font-weight: 600;
        color: ${(props) => props.theme['base-text']};
        font-size: 1.1rem;
        background: ${(props) => props.theme['base-text']};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;
