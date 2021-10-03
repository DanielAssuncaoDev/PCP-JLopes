import styled from "styled-components"


const Conatainer = styled.div `
display: flex;
flex-direction: row;
input {
    height: 1.4em;
    outline: none;
    padding: 5px;
    width: 40em;
    border-radius: 3px;
    border: 1px solid #000000;
    
    }
div {
    position: absolute;
    left: 66.8em;
    width: 2em;
    border: 2px solid #3E3838;
    background-color: #3E3838;
    border-radius: 3px;
    text-align: center;
    padding: .2em;
}
`
export default function Pesquisar() {
    return (
        <Conatainer>
            <input type="text" placeholder="Pesquisar: por Nome ou Cod"/>
             <div> <img src="./assets/images/lupa.svg" alt="" /> </div>
        </Conatainer>
    )
}