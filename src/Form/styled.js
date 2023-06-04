import styled from "styled-components";

export const TasksForm = styled.form`
    padding: 20px;
    display: flex;

    @media (max-width: 500px) {
       display: flex;
       flex-direction: column;
       flex-basis: 1;
   }
`;

export const Field = styled.input`
    margin-right: 20px;
    padding: 8px 5px;
    border: 1px solid lightgray;
    flex-grow: 1;

    &:enabled {
        border-color: lightgrey;
    }

    &:read-only {
        color: red; //nie dziala
    }

    @media (max-width: 500px) {
        margin: 0;
    }
`;

export const Button = styled.button`
    background-color: teal;
    color: white;
    border: none;
    width: auto;
    padding: 8px 20px;
    transition: 0.1s;
    cursor: pointer;

    &:hover {
        background-color: darkcyan;
        transition: 0.2s;
        transform: scale(105%);
 }

    &:active {
        background-color: lightseagreen;
        transform: translateY(1px);
    }

    @media (max-width: 500px) {
        margin-top: 15px;
        display: flex;
        justify-content: center;
    }
`;