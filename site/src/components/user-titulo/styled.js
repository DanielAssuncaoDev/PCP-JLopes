import styled from "styled-components"

const Conatainer = styled.div `
display: flex;
flex-direction: row;
align-items: center;
div {
height: 3em;
width: .5em;
background: rgba(12, 75, 238, 0.6);
border-radius: 20px;
}
`
export default function Comp1(Props){
    return (
        <Conatainer>
            <div style={{marginRight: '10px'}}></div>
            <h1>{Props.nome} </h1>
        </Conatainer>
    )
}