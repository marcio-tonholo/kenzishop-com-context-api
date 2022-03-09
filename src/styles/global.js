import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;  
}
button{
    cursor: pointer;
    
}
body{
    background-color:var(--black-1);
    color:#e0e0e0;
    font-family: 'Roboto Mono', monospace;
    }
    
    :root{
        --black-0:#474747;
        --black-1:#303030;
        --red-0:#ff2e2e;
        --red-1:#a61e1e;
    }
`;
