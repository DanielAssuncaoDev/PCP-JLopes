import styled from "styled-components"

const Container = styled.div `
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;


background-color: #1997BE;
border-radius: 5px;

padding: 4em 1em;
width: 20em;


    &:hover {
        background-color: #116883;
        color: white;
    }
.desc {
    margin-top: 20px;
}
`  

export default function Cards(props) {

    return (
        <Container>
            <div className="image">  <img src={props.logo} alt="" /></div>
            <div className="desc"> {props.name} </div>
        </Container>
    )
}