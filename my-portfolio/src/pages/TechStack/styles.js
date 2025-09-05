import styled from 'styled-components';

export const HeaderContainer = styled.div`


`;

export const About = styled.div`
    /* background: ${(props) => props.theme['base-card']}; */
    
    /* margin-right: 35%; */
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

    h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1rem;
    }
`;

export const TechContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;

    
`;
