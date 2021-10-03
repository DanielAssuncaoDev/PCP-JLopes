import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: row;

.n2 {
    background-color: #33E4FC;
            .b1 {
                background-color: red;
            }   
}

`

const Listar = styled.div`

padding: 0px 1em 0px 1em;
.filter {
    display: flex;
justify-content: flex-end;
}


thead {
    background-color: #39B4CF;
    height: 100%;
    width: 100%;
}
th {
    height: 60px;
    text-align: left;
    padding: .1em 1.36em;
    color: #ffff;
} 

.a {
    padding: 0px;
}

.b {
    padding: 0px;
}


.table {
   margin-top: 2em;
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

.add {
    display: flex;
    justify-content: flex-end;
}

button {
    border: none;
    background-color: #12E100;
    width: 12em;
    padding: 15px 0px;
    border-radius: 5px;

    &:hover {
        background-color: #097600;
;
        color: white;
    }
}
`

export { Listar, Container }