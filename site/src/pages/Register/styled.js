import styled from "styled-components";

const Container = styled.div `
display: flex;
justify-content: space-between;
height: 100vh;

background-color: #006494;
color: white;



.image {
    background-color: white;
    height: 100vh;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 3px;
    width: 48em;
     & img {
         margin-top: 5em;
     }
}


.message {
    text-align: center;
    font-size: 34px;
    margin-bottom: 2em;
}

.inser-info {
padding: 5em 3em 7em 3em;
}



input {
    width: 34em;
    height: 1.4em;
    padding: 10px;
    margin-top: 7px;
    margin-bottom: 2.5em;

    outline: red;
    border: none;
}

.box-input1 {
    display: flex;
    flex-direction: row;
}

.box-input1 input {
    width: 15em;
}

.turma {
    margin-right: 25px;
}


button {
border: none;
background: none;
color: white;

cursor: pointer;

font-size: 18px;

}


.access {
    border: 2px solid #17191A;
    background-color: #17191A;
    text-align: center;
    padding: 12px;

    cursor: pointer;

}
`

export {Container}