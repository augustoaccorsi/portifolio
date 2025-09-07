import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.theme['background-hover']};
    border: 2px solid ${(props) => props.theme['text']};
    border-radius: 5%;
    height: 25rem;

    display: flex;
    flex-direction: column;
    overflow: hidden; /* prevent children from overflowing */

    /* &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme['background-hover']};
    } */
`;

export const ImageBox = styled.div`
    flex: 1; /* take available vertical space */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

export const Info = styled.div`
    margin: 0 1rem 1rem 1rem;
    gap: 1rem;
    /* display: flex; */
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        max-width: 20rem;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis; /* keep it one line */
    }
`;

export const Stack = styled.div`
    display: flex;
    margin: 0 1rem 1rem 1rem;
`;

export const Footer = styled.div`
    margin: 0 1rem 1rem 1rem;
    display: flex;

    div {
        margin-left: auto;
        justify-content: center;
        align-items: center;
        display: flex;

        a {
            margin-left: 0.5rem;
        }
    }
`;

export const Link = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: inherit;

    &:hover {
        cursor: pointer;
        color: #0366d6;
    }
`;
