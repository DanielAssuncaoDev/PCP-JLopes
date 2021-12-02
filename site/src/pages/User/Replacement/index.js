
import { Container} from "./styled"

import { useState, useEffect } from 'react'
import Cookie from 'js-cookie'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api'
const api = new Api()

export default function Repor( props ) {

const [ codigoP, setCodigoP ] = useState('')
const [ qtdM, setQtdM ] = useState('')

    // function PegarCodigo(){
    //     if( props.ControleEstoque !== null ){
    //         let cod = props.ControleEstoque.nr_codigo
    //         setCodigoP(cod)
    //         props.setControleEstoque(null)
    //     }
    // }
        useEffect( () => {
            function PegarCodigo(){
                if( props.ControleEstoque !== null ){
                    let cod = props.ControleEstoque.nr_codigo
                    setCodigoP(cod)
                    props.setControleEstoque(null)
                }
            }

            PegarCodigo()
        }, [props] )


    const ControleEstoque = async(mov) => {
        let cookieUser = JSON.parse( Cookie.get('User') )
        let ce = await api.controleEstoque( cookieUser.id_usuario,  {codigoP, qtdM, mov} )

        if( codigoP === '' || qtdM === '' ){
            toast.error('Todos os campos devem estar preenchidos')
            return        
        }

        if(ce.erro !== undefined){
            toast.error(ce.erro)
        } else {
            toast.succes('Movimentação Realizada')
            props.esconderPopUp(false)
        }
    }
    

    return (
        <Container>
            <ToastContainer />
            <div className="BoxControleEstoque">
                <div className="Option"> 
                    <div  onClick={ () => props.esconderPopUp(false) } className="BoxClose">
                        <img src="/assets/images/Close.svg" alt="" />
                    </div>
                </div>

                <div className="Titulo">
                    <div className="LineTitulo" ></div>
                    Controle de Estoque
                </div>

                <div className="Conteudo">
                    <div className="Input">
                        <label> Código do Produto </label>
                        <input 
                            value={codigoP}
                                onChange={ (e) => setCodigoP(e.target.value)}
                        />
                    </div>
                    <div className="Input">
                        <label> Qtd. Movimentada </label>
                        <input 
                            value={qtdM}
                                onChange={ (e) => setQtdM(e.target.value)}
                        />
                    </div>
                    <div className="Buttons">
                        <button onClick={ () => ControleEstoque('Saida') } > Saída </button>
                        <button onClick={ () => ControleEstoque('Entrada') } > Entrada </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

