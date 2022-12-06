import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

body{
    position: relative;
    font-family: 'Inter', sans-serif;
}

input, select{
    outline: none;
}

button{
    cursor: pointer;
    border: none;
}




`