import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,600;1,600&display=swap');
body{
    /* background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%)); */
    background-image: radial-gradient(#2C6EC3, #141539 );
    /* background-color: #2C6EC3; */
    background-repeat: no-repeat;
    height: 100vh;
    margin:0;
    padding:0;
    /* fonts */
    --main-font: 'Barlow Semi Condensed', sans-serif;
    --darkTextColor: hsl(229, 25%, 31%);
    --scoreTextColor: hsl(229, 64%, 46%);
    --headerOutlineColor: hsl(217, 16%, 45%);

p{
    margin: 0;
    font-family: 'Barlow Semi Condensed', sans-serif;
}



/* - Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
- Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
- Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
- Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
- Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%) */

}
`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

export default Layout;
