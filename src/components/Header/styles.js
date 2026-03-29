import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: ${(p) => p.theme['base-card']};
    border-bottom: 1px solid ${(p) => p.theme['base-hover']};
    transition: background 0.3s ease, border-color 0.3s ease;
`;

export const HeaderInner = styled.div`
    padding: 0 10%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const RightGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

export const NavButtons = styled.nav`
    display: none;

    @media (min-width: 769px) {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: ${(p) => p.theme['base-text']};
    transition: color 0.15s ease;

    &:hover {
        color: ${(p) => p.theme['purple']};
    }
`;

export const Link = styled.span`
    font-family: 'Courier New', monospace;
    font-size: 0.82rem;
    font-weight: 500;
    color: ${(p) => p.theme['base-label']};
    padding: 0.35rem 0.75rem;
    border-radius: 3px;
    transition: color 0.15s ease, background 0.15s ease;
    white-space: nowrap;

    &:hover {
        color: ${(p) => p.theme['base-text']};
        background: ${(p) => p.theme['base-input']};
        cursor: pointer;
    }
`;

export const SelectedLink = styled.span`
    font-family: 'Courier New', monospace;
    font-size: 0.82rem;
    font-weight: 700;
    color: ${(p) => p.theme['base-text']};
    padding: 0.35rem 0.75rem;
    border-radius: 3px;
    background: ${(p) => p.theme['base-input']};
    white-space: nowrap;

    &:hover {
        cursor: default;
    }
`;

export const Icon = styled.div`
    color: ${(p) => p.theme['base-label']};
    font-size: 1rem;
    width: 32px;
    height: 32px;
    border-radius: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s ease, background 0.15s ease;

    &:hover {
        color: ${(p) => p.theme['purple']};
        background: ${(p) => p.theme['base-input']};
        cursor: pointer;
    }
`;

export const HamburgerButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px solid ${(p) => p.theme['base-hover']};
    width: 32px;
    height: 32px;
    border-radius: 3px;
    font-size: 1rem;
    cursor: pointer;
    color: ${(p) => p.theme['base-label']};
    transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;

    &:hover {
        color: ${(p) => p.theme['purple']};
        border-color: ${(p) => p.theme['purple']};
        background: ${(p) => p.theme['base-input']};
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        transition: max-height 0.25s ease, opacity 0.2s ease;
        border-top: 1px solid ${(p) => p.theme['base-hover']};
        background: ${(p) => p.theme['base-card']};

        &[data-open='true'] {
            max-height: 400px;
            opacity: 1;
        }

        a {
            text-decoration: none;
            padding: 0 1.5rem;

            span {
                display: block;
                padding: 0.75rem 0;
                border-bottom: 1px solid ${(p) => p.theme['base-input']};
                font-family: 'Courier New', monospace;
                font-size: 0.85rem;
            }
        }
    }
`;
