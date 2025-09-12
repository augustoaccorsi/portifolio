import styled from 'styled-components';

export const HeaderContainer = styled.div`
    margin-top: 2rem;
    margin-bottom: 3rem;
    background: ${(props) => props.theme['base-card']};
    border-radius: 12px;
    padding: 1.5rem 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid transparent;
    background-image: linear-gradient(${(props) => props.theme['base-card']}, ${(props) => props.theme['base-card']}),
                      linear-gradient(135deg, ${(props) => props.theme['purple']}, ${(props) => props.theme['yellow']});
    
    background-origin: border-box;
    background-clip: padding-box, border-box;
    transition: all 0.3s ease;

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
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 8px;
        text-decoration: none;
        transition: all 0.3s ease;

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
    position: relative;
    
    img {
        transition: all 0.3s ease;
        border-radius: 8px;
        padding: 0.25rem;
    }
    
    &:hover {
        cursor: pointer;
        
        img {
            transform: scale(1.1);
            /* background: ${(props) => props.theme['purple']}; */
            border-radius: 12px;
        }
    }
`;

export const Link = styled.span`
    color: ${(props) => props.theme['base-text']};
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['purple-dark']};
    }
`;

export const SelectedLink = styled.span`
    color: ${(props) => props.theme['base-title']};
    font-weight: 600;
    position: relative;
    transition: all 0.3s ease;

    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background: ${(props) => props.theme['purple']};
        border-radius: 1px;
    }

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['purple']};
        transform: scale(1.05);
    }
`;

export const Icon = styled.div`
    color: ${(props) => props.theme['base-text']};
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme['purple']};
    }
`;
