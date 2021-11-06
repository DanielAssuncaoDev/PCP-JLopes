import styled from "styled-components";

const Container = styled.div `
background-color: #FAFEFF;
height: 100vh;
display: flex;
flex-direction: column;

.a1 {
    color: #10ffc6;
}

.b1 {
    color: #B834E7;

}

.content {
    display: flex;
    flex-direction: row;
    padding: 0em 4em;
}

.title {
    margin: 25px 0px;
    color: #1539B9;
    font-size: 50px;
}

.description {
    text-align: justify;
    font-size: 30px;
}


.imagem {
    padding-top: 5em;
}

`
export {Container }