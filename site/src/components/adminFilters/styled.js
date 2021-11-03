import styled from "styled-components"

import { useEffect } from 'react'

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
    margin: 1.99em 0em 0em 2em;
    padding: .55em 2em;
    border: none;
    background-color: #E53913;
    cursor: pointer;

    border-radius: 4px;
    :hover {
        color: white;
    }
}

.a {
    background-color: #3BE32D;
}
`
export default function Filters(props){

// const FuncionList = () => {
//     props.listarUser()
// }

useEffect( () => {
    props.listarUser()

}, [props.option1.value, props.option2.value] )

    return (
        <Conatainer>
            <div className="first-input">
                <div className="name"> {props.option1.label}</div>
                <input type="" 
                        value={props.option1.value}
                        onChange={ (e) => props.option1.set(e.target.value)}
                />
            </div>
            <div className="second-input">
                <div className="name"> {props.option2.label} </div>
                <input type="" 
                        value={props.option2.value}
                        onChange={ (e) => props.option2.set(e.target.value)}
                />
            </div>

            <div className="buttonss">
                <button onClick={ () => { props.option2.set(""); props.option1.set("") } } >
                    Limpar
                </button>
            </div>
        </Conatainer>
    )}