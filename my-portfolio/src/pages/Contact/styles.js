import styled from 'styled-components';

export const Container = styled.div`
    /* background: ${(props) => props.theme['base-card']}; */

    /* display: flex;
    align-items: center;
    height: 100vh;
    justify-content: space-between; */

    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`;

export const MailInfo = styled.h1`
    margin: 5rem;
`;

export const MailAddress = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    color: ${(props) => props.theme['text']};
`;

export const Footer = styled.div`
    margin-top: 30rem;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    display: flex;

    gap: 1rem;

    a {
        &:hover {
            cursor: pointer;
            color: #0366d6;
        }
    }
`;
