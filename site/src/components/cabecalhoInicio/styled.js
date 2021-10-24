import styled from "styled-components"

const Container = styled.div `
background-color: #000000;
color: #B834E7;

display: flex;
justify-content: space-between;
padding: 1em 25em 1em 25em;

div:hover {
    cursor: pointer;
    color: #10FFC6;
}

.b1 {
    color: #10ffc6;
}
`  

export default function Cards(props) {

    return (
        <Container>
            <div className="a1">Sobre Nós</div>
            <div className="b1">Home</div>
            <div className="c1">Acessar</div>
        </Container>
    )
}