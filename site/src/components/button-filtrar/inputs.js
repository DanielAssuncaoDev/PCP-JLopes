import styled from "styled-components"

import { useState, useEffect } from 'react' 

import Api from '../../service/api'
const api = new Api()

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
export default function Inputs(props){

const [ categorias, setCategorias ] = useState([])

    const ListarCategorias = async() => {
        let c = await api.listarCategorias()
        setCategorias(c)
    }
        useEffect( () => {
            ListarCategorias()
        }, [] )

    return (
        <Conatainer>
           <div className="box-inpt"> 
                <div className="cod">
                    <div> Nome </div>
                    <input type="text"
                            value={props.filtros.nomeP}
                            onChange={ (e) => props.filtros.setNomeP(e.target.value) }
                    />
                </div>
                <div className="cod">
                    <div> Código </div>
                    <input type="text" maxlength="9"
                            value={props.filtros.codigoP}
                            onChange={ (e) => props.filtros.setCodigoP(e.target.value) }
                    /> 
                </div>
           </div>
           <div className="box-inpt1">

                 <div className="cod">
                    <div> Categoria </div>
                    <select name="category" id="category"
                            // value={props.filtros.setCategoriaP}
                            onChange={ (e) => props.filtros.setCategoriaP(e.target.value) }
                    >
                        <option value=""> Escolher Categoria </option>

                        {
                            categorias.map
                            ( (categoria) =>
                                <option value={categoria}> {categoria} </option>
                            )
                        }

                    </select>
                </div>
                <div className="cod">
                    <div> Cadastrado em </div>
                    <input  type="date" id="birthday" name="birthday" style={{height: '1.8em', width: '15em'}}
                        value={props.filtros.dtCadastro}
                        onChange={ (e) => props.filtros.setDtCadastro(e.target.value) }
                    /> 
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