import {createGlobalStyle} from 'styled-components'



const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html,
body {
    &,
    *{
        cursor: none;
    }
}
body{
    max-width: 100vw;
    overflow-x: hidden;
    
}
a{
    text-decoration: none;
}
li{
    text-decoration: none;
    list-style: none;
}
h1 ,h2, h3, h4, h4, h6, p , span{
    margin: 0;
    padding: 0;
    
}

`

export default GlobalStyles