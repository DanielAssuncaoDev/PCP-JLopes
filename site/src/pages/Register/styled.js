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
         width: 100%
     }
}


.FormCadastarse{
    width: 100%;

    .names input{
        width: 100%
    }

    .email,
    .password{
        width: 48%;
    
        input {
            width: 100%;
        }
    }

}

.credenciais{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.message {
    text-align: center;
    font-size: 34px;
    margin-bottom: 2em;
}

.inser-info {
    padding: 5em ;
    width: 35%;
}



input {
    box-sizing: border-box;
    height: 3em;
    padding: 10px;
    margin-top: 7px;
    margin-bottom: 1.9em;

    outline: red;
    border: none;
}

.box-input1 {
    display: flex;
    flex-direction: row;
}

.box-input1 input {
    width: 50%;
}

.fazerLogin{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-bottom: 1.4em;

    label:nth-child(2){
        color: #000;
        font-weight: 600;

        transition-property: all;
        transition-duration: .5s;

            &:hover{
                font-weight: 700;
                font-size: 17px;
            }   
    }

}


button {
border: none;
background: none;
color: white;

cursor: pointer;

font-size: 18px;

width: 100%;
/* height: 40px; */

}


.access {
    border: 2px solid black;
    background-color: black;
    text-align: center;
    padding: 12px;

    cursor: pointer;
    transition-property: all;
    transition-duration: .5s;

        &:hover{
            background-color:rgb(41, 41, 41);
            border-color: rgb(187, 187, 187);
            box-shadow: 0 0 5px .1px rgb(187, 187, 187, .80);
        }

}
`

export {Container}