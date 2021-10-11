import styled from 'styled-components'

const Containers = styled.div`
display: flex;
flex-direction: row;
background-color: #EFFFFE;

`

const ContainerConteudo = styled.div`
display: flex;
flex-direction: column;

.box {
display: flex;
flex-direction: row;
margin: 3em 0em 0em 11em;
}

.box > div {
    margin-right: 5em;
}
`
export {Containers, ContainerConteudo}