import styled from "styled-components";

const Container = styled.div `
display: flex;
flex-direction: row;


.n1 {
    background-color: #33E4FC !important;
    .b1 {
                background-color: red;
            }      
}
`
const ContainerConteudo = styled.div `
display: flex;
flex-direction: column;


.title {
    margin: 1em 0em 1em 3em;
}

.filter {
    margin-left: 3em;
}






thead {
    background-color: #110808;
    height: 100%;
    width: 100%;
}
th {
    height: 60px;
    text-align: center;
    padding: .1em .2em;
    color: #ffff;
} 




table {
   margin-top: 3em;
   margin-left: 3em;

   border-collapse: collapse;
}

td {
    text-align: center;
    /* height:  61.93px; */
    padding: .1em;
    color: #6D6868;
    font-weight: 600;
}

.imgs {
    display: flex;
    flex-direction: row;    
    justify-content: center;
    margin-top: 1em;
}

.ss {
    margin-right: 1.9em;
}

tbody {
    margin-left: 10px;
}
`
export {Container, ContainerConteudo }