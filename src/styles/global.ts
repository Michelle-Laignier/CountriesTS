import { createGlobalStyle } from "styled-components"

import bg from "../../src/assets/bg.jpg"

export default createGlobalStyle`
  :root {
    font-size: 16px;

    @media screen and (max-width: 425px) {
      font-size: 12px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-image: url(${bg});
    background-position: center;
    color: ${({ theme }) => theme.COLORS.TEXT};
    height: 100vh;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  input,
  input::placeholder,
  button {
    color: ${({ theme }) => theme.COLORS.TEXT_INPUT};
  }

  input:focus {
    outline: 3px solid blue;
  }

  button {
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover, 
  button:focus {
    filter: brightness(0.8);
  }
`