import styled from "styled-components"

const Conatainer = styled.div `
background-color: #7A6FFF;
display: flex;
flex-direction: row;
border-radius: 3px;
text-align: center;
padding: 5px 3px;
width: 10em;
cursor: pointer;
:hover{
    background-color:  #000000;
    color: white;
}
div {
    margin-right: 7px;
}
`
export default function button(){
    return (
        <Conatainer>
            <div> <img src="./assets/images/lupa.svg" alt=""/> </div>
            <div> Busca Avançada </div>
        </Conatainer>
    )
}