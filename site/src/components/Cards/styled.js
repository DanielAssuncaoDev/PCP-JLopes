import styled from "styled-components"

const Container = styled.div `

`  

export default function Cards(props) {
    return (
        <Container>
            <div className="image">  <img src={props.logo} alt="" /></div>
            <div className="desc"> {props.name}</div>
        </Container>
    )
}