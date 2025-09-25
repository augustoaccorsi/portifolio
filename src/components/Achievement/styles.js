import styled from 'styled-components';

export const AchievementContainer = styled.div`
    /* margin-right: 35%; */
    /* margin-left: 5rem; */
`;

export const Header = styled.div`
    /* background: ${(props) => props.theme['base-card']}; */

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        margin-bottom: 1rem;
        /* font-size: 3rem; */
    }

    p {
        margin-bottom: 1rem;
        font-size: 0.7rem;
    }
`;

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 0.3rem;
        align-items: center;

        > div {
            display: flex;
            gap: 0.3rem;
        }

        display: flex;
        flex-wrap: wrap;
        p {
            flex-wrap: wrap;
            margin: 0;
            font-size: 0.7rem;
        }
    }
`;

export const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid ${(props) => props.theme['base-label']};
    margin: 1rem 0;
`;

export const DownloadFile = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 4px;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: ${(props) => props.theme['base-hover'] || 'rgba(0, 0, 0, 0.1)'};
        transform: translateY(-1px);
    }
    
    &:active {
        transform: translateY(0);
    }
    
    svg {
        color: ${(props) => props.theme['primary'] || '#007bff'};
    }
    
    p {
        color: ${(props) => props.theme['primary'] || '#007bff'};
        font-weight: 500;
    }
`;
