import styled from "styled-components"

const Conatainer = styled.div `

display: flex;
flex-direction: row;

input {
    height: 1.8em;
    width: 15em;
    margin-top: 5px;
}

.second-input {
    margin: 0em 3em 0em 3em
}


button {
    margin: 1.5em 0em 0em 2em;
    padding: .6em 2em;
    border: none;
    background-color: #E53913;
    cursor: pointer;

    border-radius: 2px;
    :hover {
        color: white;
    }
}

.a {
    background-color: #3BE32D;
}
`
export default function Filters(props){
    return (
        <Conatainer>
            <div className="first-input">
                <div className="name"> {props.option1}</div>
                <input type="" />
            </div>
            <div className="second-input">
                <div className="name"> {props.option2} </div>
                <input type="" />
            </div>
            <div className="third-input">
                <div className="name"> {props.option3} </div>
                <input type="" />
            </div>
            <div className="buttonss">
                <button className="a">Buscar</button>
                <button>Limpar</button>
            </div>
        </Conatainer>
    )}