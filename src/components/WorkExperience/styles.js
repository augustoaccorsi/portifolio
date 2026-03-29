import styled from 'styled-components';

export const WorkExperienceContainer = styled.div`
    margin-bottom: 1.5rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;

    span {
        font-weight: 700;
        font-size: 0.95rem;
        color: ${(props) => props.theme['base-text']};
    }

    p {
        font-family: 'Courier New', monospace;
        font-size: 0.75rem;
        color: ${(props) => props.theme['base-label']};
        white-space: nowrap;
    }
`;

export const Body = styled.div`
    margin-bottom: 0.75rem;

    ul {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem 1.5rem;
    }

    li {
        font-size: 0.82rem;
        color: ${(props) => props.theme['base-text']};
        line-height: 1.6;
        padding-left: 1rem;
        position: relative;

        &::before {
            content: '›';
            position: absolute;
            left: 0;
            color: ${(props) => props.theme['purple']};
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 0.75rem;

    div {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;

        > div {
            display: inline-flex;
            align-items: center;
            gap: 0.3rem;
            font-family: 'Courier New', monospace;
            font-size: 0.72rem;
            color: ${(props) => props.theme['yellow']};
            background: ${(props) => props.theme['base-input']};
            padding: 0.2rem 0.5rem;
            border-radius: 2px;
        }

        p {
            margin: 0;
            font-size: 0.72rem;
        }
    }
`;

export const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid ${(props) => props.theme['base-hover']};
    margin: 1.25rem 0;
`;
