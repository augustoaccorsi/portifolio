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
        transition: all 0.3s ease;
    }
    &:hover {
        cursor: pointer;
        filter: brightness(0) saturate(100%) invert(40%) sepia(90%)
            saturate(500%) hue-rotate(200deg);
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
    color: ${(props) => props.theme['base-title']};

    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['button-hover']};
    }
`;

export const Icon = styled.div`
    color: ${(props) => props.theme['gray']};

    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['button-hover']};
    }
`;
