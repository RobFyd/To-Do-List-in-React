import styled from "styled-components";

export const Section1 = styled.section`
    margin: 10px 0;
    box-shadow: 0 0 5px 1px gainsboro;
    background-color: white;
`;

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Header = styled.h2`
    margin: 0;
    margin-right: auto;
    font-size: 18px;

    @media (max-width: 500px) {
        margin-bottom: 10px;
    }
`;