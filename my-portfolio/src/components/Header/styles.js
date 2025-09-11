import styled from 'styled-components';

export const HeaderContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 3rem;

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

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:disabled:hover {
            cursor: not-allowed;
        }
    }
`;

export const Logo = styled.div`
    img {
        border-radius: 100%;
        height: 2rem;
        border-color: ${(props) => props.theme['text']};
        border: 2px solid ${(props) => props.theme['text']};
    }
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['button-hover']};
    }
`;

export const Link = styled.a`
    color: ${(props) => props.theme['gray']};
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['button-hover']};
    }
`;

export const SelectedLink = styled.a`
    color: ${(props) => props.theme['text']};
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['button-hover']};
    }
`;

export const Icon = styled.div`
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['button-hover']};
    }
`;
