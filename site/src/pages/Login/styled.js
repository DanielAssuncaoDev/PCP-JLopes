import styled from "styled-components";

const Container = styled.div `
display: flex;
justify-content: space-between;
height: 100vh;

background-color: #006494;
color: white;


.message {
    text-align: center;
    font-size: 34px;
    margin-bottom: 2em;
}

.image {
    background-color: white;
    height: 100vh;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 3px;
     & img {
         margin-top: 5em;
     }
}
.inser-info {
padding: 7em 8em 7em 4em;
}

input {
    width: 29em;
    height: 1em;
    padding: 10px;
    margin-bottom: 2em;
}

button {
border: none;
background: none;
color: white;

cursor: pointer;

font-size: 18px;

}

.register-but {
display: flex;
justify-content: flex-end;
margin-bottom: 4em;
}


.access {
    border: 2px solid black;
    background-color: black;
    text-align: center;
    padding: 12px;

    cursor: pointer;

}


`

export {Container}