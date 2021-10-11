import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;

.n4{
background-color: #33E4FC !important;
    .b1 {
                background-color: red;

            }      
}
`
const ContRepor = styled.div `



.til {
margin-left: 3.2em;
}

.pes {
    display: flex;
    justify-content: flex-end;
    margin-right: 3em;
}


thead {
    background-color: #39B4CF;
    height: 100%;
    width: 100%;
}
th {
    height: 60px;
    text-align: left;
    padding: .1em 2.66em;
    color: #ffff;
} 





.table {
   margin-top: 2em;
   margin-left: 3em;
}
td {
    text-align: center;
    height:  61.93px;
    padding: .1em;
    color: #6D6868;
    font-weight: 600;
}

tbody {
    margin-left: 10px;
}
`

export {ContRepor, Container}
