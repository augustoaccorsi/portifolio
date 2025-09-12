import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
    padding: 0 2rem;
`;

export const UserInfo = styled.div`
    p {
        font-size: 4rem;
        font-weight: bold;
        margin: 0.5rem 0;
        transition: all 0.3s ease;
    }
`;

export const UserImage = styled.div`
    position: relative;
    transition: all 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 50%;
        background: linear-gradient(135deg, ${(props) => props.theme['purple']}, ${(props) => props.theme['purple-dark']});
        z-index: -1;
        opacity: 0.8;
    }

    img {
        border-radius: 100%;
        height: 30rem;
        width: 30rem;
        object-fit: cover;
        border: 4px solid ${(props) => props.theme['white']};
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        position: relative;
        z-index: 1;

        &:hover {
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
        }
    }
`;
