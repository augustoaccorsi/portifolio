import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    padding: 0 2rem;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;       /* stack text + image */
        justify-content: center;
        text-align: center;          /* center text */
        height: auto;                /* allow content height */
        padding: 2rem 1rem;
    }
`;

export const UserInfo = styled.div`
    p {
        font-size: 4rem;
        font-weight: bold;
        margin: 0.5rem 0;
        transition: all 0.3s ease;

        @media (max-width: 1024px) {
            font-size: 3rem;
        }

        @media (max-width: 768px) {
            font-size: 2rem;   /* smaller on tablets */
        }

        @media (max-width: 480px) {
            font-size: 1.5rem; /* smallest on phones */
        }
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
        background: linear-gradient(
            135deg,
            ${(props) => props.theme['purple']},
            ${(props) => props.theme['purple-dark']}
        );
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

        @media (max-width: 1024px) {
            height: 22rem;
            width: 22rem;
        }

        @media (max-width: 768px) {
            height: 18rem;
            width: 18rem;
        }

        @media (max-width: 480px) {
            height: 12rem;
            width: 12rem;
        }
    }
`;
