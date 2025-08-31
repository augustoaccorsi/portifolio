import styled from 'styled-components';

export const HomeContainer = styled.div`
    /* background: ${(props) => props.theme['base-card']}; */

    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
`;

export const UserInfo = styled.div`
    p {
        font-size: 4rem;
        font-weight: bold;
        color: ${(props) => props.theme['text']};
    }
`;

export const UserImage = styled.div`
    img {
        border-radius: 100%;
        height: 30rem;
        border-color: ${(props) => props.theme['text']};
        border: 2px solid ${(props) => props.theme['text']};
    }
`;