import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 1rem;
    left: 10%;
    right: 10%;
    z-index: 1000;
    background: ${(p) => p.theme['base-card']};
    border-radius: 12px;
    padding: 1rem 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid transparent;
    
    background-image: linear-gradient(${(props) => props.theme['base-card']}, ${(props) => props.theme['base-card']}),
                      linear-gradient(135deg, ${(props) => props.theme['purple']}, ${(props) => props.theme['yellow']});
                      
    background-origin: border-box;
    background-clip: padding-box, border-box;
    transition: all 0.3s ease;
`;

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

/* group to keep logo and controls aligned */
export const RightGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

/* MOBILE-FIRST: hide full nav by default and show hamburger. On wider screens show nav and hide hamburger */
export const NavButtons = styled.nav`
    display: none; /* hidden on small screens */

    a,
    span {
        padding: 0.5rem 0.75rem;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 769px) {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
`;

export const HamburgerButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px solid transparent;
    padding: 0.35rem;
    font-size: 1.4rem;
    line-height: 1;
    border-radius: 8px;
    cursor: pointer;
    color: ${(p) => p.theme['base-text']};

    &:hover {
        background: rgba(0, 0, 0, 0.04);
    }

    @media (min-width: 769px) {
        display: none; /* hide on desktop */
    }
`;

export const MobileMenu = styled.div`
    /* hidden by default (data-open controls visibility) */
    display: none;
    position: absolute;
    top: calc(100% + 0.6rem);
    right: 1rem;
    left: 1rem;
    z-index: 100;
    padding: 0.75rem;
    border-radius: 10px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    background: ${(p) => p.theme['base-card']};
    transform-origin: top center;
    transition: transform 180ms ease, opacity 180ms ease;
    opacity: 0;
    transform: translateY(-6px) scaleY(0.98);
    pointer-events: none;

    /* show only on small screens; we'll toggle visibility with the data attribute */
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    /* when open via data-open="true" */
    &[data-open='true'] {
        opacity: 1;
        transform: translateY(0) scaleY(1);
        pointer-events: auto;
    }

    a {
        text-decoration: none;
        padding: 0.5rem;
    }
`;

export const Logo = styled.div`
    img {
        transition: transform 150ms ease;
        border-radius: 8px;
        padding: 0.25rem;
    }
    &:hover img {
        transform: scale(1.06);
    }
`;

export const Link = styled.span`
    color: ${(p) => p.theme['base-text']};
    font-weight: 500;
    transition: color 150ms ease;
    &:hover {
        color: ${(p) => p.theme['purple-dark']};
        cursor: pointer;
    }
`;

export const SelectedLink = styled.span`
    color: ${(p) => p.theme['base-title']};
    font-weight: 600;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background: ${(p) => p.theme['purple']};
        border-radius: 1px;
    }
    &:hover {
        cursor: pointer;
        color: ${(p) => p.theme['purple']};
    }
`;

export const Icon = styled.div`
    color: ${(p) => p.theme['base-text']};
    font-size: 1.1rem;
    padding: 0.4rem;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${(p) => p.theme['purple']};
        cursor: pointer;
    }
`;
