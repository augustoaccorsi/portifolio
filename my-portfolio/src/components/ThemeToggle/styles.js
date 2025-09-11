import styled from 'styled-components';

export const ToggleButton = styled.button`
    background: none;
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['gray']};
    font-size: 1.2rem;
    transition: color 0.2s ease;

    &:hover {
        color: ${(props) => props.theme['button-hover']};
    }

    &:focus {
        outline: none;
        outline-offset: 2px;
    }
`;
