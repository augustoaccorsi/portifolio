import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
`;

export const Section = styled.section`
    min-height: 100vh;
    padding-top: 56px;
    padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;
`;
