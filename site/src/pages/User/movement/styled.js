import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: row;
background-color: #F5F5F5;


.n3 {
    background-color: #33E4FC;
            .b1 {
                background-color: red;
            }   
}
`

const Conteudo = styled.div`
display: flex;
flex-direction: column;


.Entract{
    margin-left: 4em;
    padding: 8px 0px;
}

.box {
    padding: 5em 13em;

    align-self:center;
    background-color: #FFFFFF;
    border-radius: 8px;
}

.amont {
 padding: 3em 12em;
text-align: center;}


.code input {
    margin-top: 12px;
    width: 40em;
    height: 2em;

    padding-left: .9em;
}

.amont input {
margin-top: 12px;
height: 1.8em;
text-align: center;}

.bus {
    display:flex;
    justify-content: space-between;
    padding: 0px 3em;

}

.en {
    border: solid #32B205;
    border-radius:10px;
    background-color: #32B205;
    width: 12em;
    height: 3.5em;
    cursor:pointer;

  &:hover {
            border: none;
            color: white;
            background-color: #4BD81A;
        }
    
}


.sai {
    border: solid #CF0C00;
    border-radius:10px;
    background-color: #CF0C00;
      width: 12em;
    height: 3.5em;
    cursor: pointer;
        &:hover {
            border: none;
            color: white;
            background-color: #FF3D31;
        }
}
`

export { Conteudo, Container }