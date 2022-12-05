import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary:#FF577F;
        --primary-50:#FF427F;
        --primary-disable:#59323F;
        --white:#FFFFFF;

        --grey4:#121214;
        --grey3:#212529;
        --grey2:#343B41;
        --grey1:#868E96;
        --grey0:#F8F9FA;

        --shadow-grey: rgba(0, 0, 0, 0.25);

        --sucess:#3FE864;
        --negative:#E83F5B;
    }

    .container-2{
        width: 750px;
        max-width: 94%;
        margin: 0 auto;
    }

`;
