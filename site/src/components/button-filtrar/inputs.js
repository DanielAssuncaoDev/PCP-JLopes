import styled from "styled-components"

const Conatainer = styled.div `

.box-inpt {
display: flex;
justify-content: space-between;
padding: 0em 0em 0em 0em;
}

.box-inpt1{
    display: flex;
    justify-content: space-between;
    padding: 0em .2em 0em 0em;

}

.cod > div {
    margin-bottom: 0px;
}

select {
    width: 15.4em;
    height: 2em;
    text-align: center;

}

input {
    height: 1.5em;
    width: 15em;
}

.botoes {
    display: flex;
    flex-direction: row;
    padding-top: 0em;
}

button:hover {
opacity: 80%;
color: white;
cursor: pointer;
}


.bus button{
    border: none;
    background-color: #339131;
    padding: 6px 22px;
}

.lim button {
    border: none;
    background-color: #F51E1E;
    padding: 6px 22px;
    margin-left: 2.5em;
}
`
export default function inputs(){
    return (
        <Conatainer>
           <div className="box-inpt"> 
                <div className="cod">
                    <div> Nome </div>
                    <input type="text" />
                </div>
                <div className="cod">
                    <div> Código </div>
                    <input type="text" maxlength="10"/> 
                </div>
           </div>
           <div className="box-inpt1">

                 <div className="cod">
                    <div> Categoria </div>
                    <select name="category" id="category">
                        <option value=""></option>
                        <option value="">Saab</option>
                        <option value="">Opel</option>
                        <option value="">Audi</option>
                    </select>
                </div>
                <div className="cod">
                    <div> Cadastrado em </div>
                    <input  type="date" id="birthday" name="birthday" style={{height: '1.8em', width: '15em'}}/> 
                </div>
                <div className="botoes"> 
                    <div className="bus"> 
                        <button>Buscar</button>
                    </div>
                    <div className="lim"> 
                        <button>Limpar</button>
                    </div>
                </div>
           </div>
        </Conatainer>
    )
}