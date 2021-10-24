import styled from "styled-components";

const Container = styled.div`

display: flex;
flex-direction: row;


.n1 {
    background-color: #33E4FC !important;
    .b1 {
                background-color: red;

            }         
}

.name, .a > div {
margin-bottom: 10px;
}

input {
    padding: 2px  18px;
    width: 15em;
    height: 1.7em;
}

select {
    padding: 2px  18px;
    width: 18em;
    height: 2.3em;
    text-align: center;
}
`

const ConRegister = styled.div`



    background-color: #f5f5f5f5;

.gg {
    margin-left: 6em;
}

.AddCategoria{
    display: flex;
    flex-direction: column;

        label {
            align-self: flex-end;
            font-size: .8em
        }
}


.box {
    background-color: white;
    border-radius: 5px;
    margin: 1em 6em;
}
.boxinput {
    display: flex;
    justify-content: space-between;
    padding: 14px 5em 14px 5em;

}

button {
    border: none;
    background-color: #2F9AE8;
    border-radius: 2px;

    margin: 2em 22em;
    height: 3em;
    width: 35%;

    cursor: pointer;

        &:hover {
            background-color: #115C92;
            color: white;
        }
}
`

export {ConRegister, Container}