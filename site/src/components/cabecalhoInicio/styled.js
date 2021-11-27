import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div `
background-color: #000000;
color: #B834E7;

display: flex;
justify-content: space-between;
padding: 1em 25em 1em 25em;

box-shadow: 0px 2px 10px rgba(0, 0, 0, .25);

a {
    outline: none;
    text-decoration: none;
    color: #B834E7;

}

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
             <Link to="./AboutUs"> <div className="a1">Sobre Nós</div> </Link>
            <Link to="./home">  <div className="b1">Home</div> </Link>
           <Link to="./login"> <div className="c1">Acessar</div> </Link>
        </Container>
    )
}