import { Conteudo, Container } from "./styled"
import Titulo from "../../../components/user-titulo/styled"
import Menu from "../../../components/menuUser/styled"
import CabeCalho from "../../../components/cabecalho/styled";

import { useState, useEffect } from 'react'
import Cookie from 'js-cookie'


import Api from '../../../service/api'
const api = new Api()

export default function Estoque(props){

const [ codigoP, setCodigoP ] = useState('')
const [ qtdM, setQtdM ] = useState('')

    function PegarCodigo(){
        if( props.location.state !== undefined ){
            let cod = props.location.state.nr_codigo
            setCodigoP(cod)
        }
    }
        useEffect( () => {
            PegarCodigo()
        }, [] )


    const ControleEstoque = async(mov) => {
        let cookieUser = JSON.parse( Cookie.get('User') )
        let ce = await api.controleEstoque( cookieUser.id_usuario,  {codigoP, qtdM, mov} )

        if(ce.erro !== undefined){
            alert(ce.erro)
        } else {
            alert('Movimentação Realizada')
        }
    }

    return (
        <Container> 
            <Menu />
            <Conteudo>
                <CabeCalho/>
                <div className="Entract"> 
                      <Titulo nome="Movimentação de Estoque"/> 
                </div>
                    <div className="box"> 
                        <div className="code"> 
                            <div> Código Interno </div>
                            <input type="text" 
                                value={codigoP}
                                onChange={ (e) => setCodigoP(e.target.value) }
                            />
                        </div>
                        <div className="amont"> 
                            <div> Quantidade </div>
                            <input type="text" 
                                value={qtdM}
                                onChange={ (e) => setQtdM(e.target.value) }
                            />
                        </div>
                        <div className="bus">
                            <button onClick={ () => ControleEstoque('Entrada') } className="en"> Entrada </button>
                            <button onClick={ () => ControleEstoque('Saida') } className="sai"> Saída </button>
                        </div>
                    </div>
            </Conteudo>
        </Container>
    )
}