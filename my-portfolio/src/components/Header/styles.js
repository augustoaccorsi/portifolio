import styled from 'styled-components';

export const HeaderContainer = styled.div`
    margin-top: 2rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const NavButtons = styled.div`
    gap: 1rem;

    a {
        background: none;
        /* padding: 0.5rem; */
        border: none;
        border-radius: 8px;
        text-decoration: none;
        color: ${(props) => props.theme['gray']};

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:disabled:hover {
            cursor: not-allowed;
        }
    }
`;