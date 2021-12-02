import {Container} from "./styled"

import Cookie from 'js-cookie'
import { useState, useEffect } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Api from '../../../service/api'
const api = new Api()

export default function Register(props) {

const [idProduto, setIdProduto] = useState('')
const [nome, setNome] = useState('')
const [categoria, setCategoria] = useState('')
const [codigoP, setCodigoP] = useState('')
const [qtdAtual, setQtdAtual] = useState('')
const [qtdMinima, setQtdMinima] = useState('')
const [valorC, setValorC] = useState('')
const [valorV, setValorV] = useState('')

const [categoriasSelect, setCategoriasSelect] = useState([])
const [lucro, setLucro] = useState(0)
const [addCategoria, setAddCategoria] = useState(false)

const [alterando, setAlterando] = useState(false)

let cookie = Cookie.get('User')

    // function VerificarAlterando (){


    //     if (props.AlterarProduto !== null){
    //         setAlterando(true)
    //         let p = props.AlterarProduto
    //         let lucro = ( p.vl_venda - p.vl_custo ) / p.vl_custo * 100
                 
    //             setIdProduto(p.id_produto)
    //             setNome(p.nm_produto)
    //             setCategoria(p.ds_categoria[0].toUpperCase() + p.ds_categoria.substring(1) )
    //             setCodigoP(p.nr_codigo)
    //             setQtdAtual(p.qtd_atual)
    //             setQtdMinima(p.qtd_minima)
    //             setValorC(p.vl_custo)
    //             setLucro(lucro)
    //             props.setAlterarProduto(null)

    //     }

    // }    


    // async function CarregarCategorias(){
    //     let categorias = await api.listarCategorias()
    //     setCategoriasSelect(categorias)
    // }


        useEffect( () => {
            async function CarregarCategorias(){
                let categorias = await api.listarCategorias()
                setCategoriasSelect(categorias)
            }

            function VerificarAlterando (){


                if (props.AlterarProduto !== null){
                    setAlterando(true)
                    let p = props.AlterarProduto
                    let lucro = ( p.vl_venda - p.vl_custo ) / p.vl_custo * 100
                         
                        setIdProduto(p.id_produto)
                        setNome(p.nm_produto)
                        setCategoria(p.ds_categoria[0].toUpperCase() + p.ds_categoria.substring(1) )
                        setCodigoP(p.nr_codigo)
                        setQtdAtual(p.qtd_atual)
                        setQtdMinima(p.qtd_minima)
                        setValorC(p.vl_custo)
                        setLucro(lucro)
                        props.setAlterarProduto(null)
        
                }
        
            } 

            CarregarCategorias();
            VerificarAlterando();
        }, [ props ] )


    // function AddCategoria(){
    //     if(categoria === 'AdicionarGategoria'){
    //         setAddCategoria(true)
    //         setCategoria('')
    //     }
    // }
        useEffect( () => {
            function AddCategoria(){
                if(categoria === 'AdicionarGategoria'){
                    setAddCategoria(true)
                    setCategoria('')
                }
            }

            AddCategoria();
        }, [categoria, addCategoria] )


    const cadastrarProduto = async() => {
        let user = JSON.parse(cookie)
        let Inserirproduto = {
                nome,
                categoria,
                codigoP,
                qtdAtual,
                qtdMinima,
                valorC: Number( Number(valorC).toFixed(2) ),
                valorV: Number(valorV)
        } 


        if(alterando === true) {

            
            let produto = await api.alterarProduto( idProduto, Inserirproduto)

                if(produto.erro !== undefined) {
                    toast.error(produto.erro)
                    return
                } else {
                    toast.success('Produto Alterado Com Sucesso')
                    props.esconderPopUp(false)

                }

        } else {

            let produto = await api.cadastarProduto( Inserirproduto, user.id_usuario )
            
                if( produto.erro !== undefined ){
                    toast.error(produto.erro)
                    return
                } else {
                    toast.success('Produto Cadastrado Com Sucesso')
                    props.esconderPopUp(false)

                }
        
            }
            
        
    }



    useEffect( () => {
        function CalcularLucro(){        
            setValorV( ( (valorC * (lucro / 100)) + Number(valorC) ).toFixed(2)  )
        }

        CalcularLucro();
    }, [lucro, valorC] )

    return(
        <Container >
            <ToastContainer /> 
            <div className="BoxCadastrarProduto">
                <div className="Option">
                    <div onClick={ () => props.esconderPopUp(false) } className="BoxClose">
                        <img src="/assets/images/Close.svg" alt="" />
                    </div>
                </div>

                <div className="Titulo">
                    <div className="LineTitulo" ></div>
                    { alterando === false ? "Cadastrar Produto" : 'Alterando Produto' }
                </div>

                <div className="ContainerForm">
                    <div className="ContainerInputs">
                        <div className="ColumnInput">
                            <div>
                                <label> Nome Produto </label>
                                <input 
                                    value={nome}
                                        onChange={ (e) => setNome(e.target.value) }
                                /> 
                            </div>
                            <div className={ addCategoria === false ? '' : 'BoxAddCategoria' } >
                                <label> Categoria </label>
                                {
                                    addCategoria === false
                                    
                                    ?
                                        <select
                                            value={categoria}
                                                onChange={ (e) => setCategoria(e.target.value) }
                                        >
                                            <option value="" >
                                                Escolher
                                            </option>
                                            <option value="AdicionarGategoria" >
                                                Adicionar Categoria
                                            </option>
                                            {
                                                categoriasSelect.map( C  =>
                                                    <option value={C} >
                                                        {C}
                                                    </option>
                                                )
                                            }
                                        </select> 

                                    : 
                                        <div className="AddCategoria">
                                            <input 
                                                value={categoria}
                                                    onChange={ (e) => setCategoria(e.target.value) }
                                            />
                                            <div onClick={ () => setAddCategoria(false) } >
                                                Escolher Gategoria 
                                            </div>
                                        </div>

                                }
                                
                            </div>
                            <div>
                                <label> Valor Custo </label>
                                <input 
                                    value={valorC}
                                        onChange={ (e) => setValorC(e.target.value) }
                                /> 
                            </div>
                            <div>
                                <label> Valor Venda </label>
                                <input
                                    value={valorV}
                                /> 
                            </div>
                        </div>

                        <div className="ColumnInput">
                            <div>
                                <label> Código Produto </label>
                                <input
                                    value={codigoP}
                                        onChange={ (e) => setCodigoP(e.target.value) }
                                /> 
                            </div>
                            <div>
                                <label> Qtd. Mínima </label>
                                <input
                                    value={qtdMinima}
                                        onChange={ (e) => setQtdMinima(e.target.value) }
                                /> 
                            </div>
                            <div>
                                <label> Qtd. Atual </label>
                                <input
                                    value={qtdAtual}
                                      onChange={ (e) => setQtdAtual(e.target.value) }
                                /> 
                            </div>
                            <div>
                                <label> Porcentagem Lucro (%) </label>
                                <input 
                                    value={lucro}
                                        onChange={ (e) => setLucro(e.target.value) }
                                /> 
                            </div>
                        </div>
                    </div>
                    

                    <div className="BoxButton">
                        <button onClick={ () => cadastrarProduto() } >
                            { alterando === false ? "Cadastrar Produto" : 'Alterar Produto' }
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )


}
