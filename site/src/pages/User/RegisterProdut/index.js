
import {ConRegister, Container} from "./styled"
import Titulo from '../../../components/user-titulo/styled'
import Cabecalho from '../../../components/cabecalho/styled'
import Menu from '../../../components/menuUser/styled'

import Cookie from 'js-cookie'
import { useState, useEffect } from "react"

import Api from '../../../service/api'
const api = new Api()

export default function Register(props) {

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

    function VerificarAlterando (){

        if (props.location.state !== undefined){
            setAlterando(true)
            let p = props.location.state
            let lucro = ( p.vl_venda - p.vl_custo ) * p.vl_custo / 100
            // console.log(lucro)
                
                setNome(p.nm_produto)
                setCategoria(p.ds_categoria[0].toUpperCase() + p.ds_categoria.substring(1) )
                setCodigoP(p.nr_codigo)
                setQtdAtual(p.qtd_atual)
                setQtdMinima(p.qtd_minima)
                setValorC(p.vl_custo)
                setLucro(lucro)

        }

    }    


    async function CarregarCategorias(){
        let categorias = await api.listarCategorias()
        setCategoriasSelect(categorias)
        console.log(props.location.state)
    }
        useEffect( () => {
            CarregarCategorias();
            VerificarAlterando();
        }, [] )


    function AddCategoria(){
        if(categoria === 'AddCategoria'){
            setAddCategoria(true)
            setCategoria('')
        }
    }
        useEffect( () => {
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

        // console.log(Inserirproduto)

        if(alterando === true) {

            
            let produto = await api.alterarProduto(props.location.state.id_produto, Inserirproduto)

                if(produto.erro !== undefined) {
                    alert(produto.erro)
                } else {
                    alert('Produto Alterado Com Sucesso')
                }

        } else {
            let produto = await api.cadastarProduto( Inserirproduto, user.id_usuario )
            
                if( produto.erro !== undefined ){
                    alert(produto.erro)
                } else {
                    alert('Produto Cadastrado Com Sucesso')
                }
        }

        
    }


    function CalcularLucro(){        
        setValorV( ( (valorC * (lucro / 100)) + Number(valorC) ).toFixed(2)  )
    }

    useEffect( () => {
        CalcularLucro();
    }, [lucro, valorC] )

    return(
        <Container>
            <Menu />
            <ConRegister>
                <Cabecalho />
                <div className="gg"> <Titulo nome="Cadastrar Produtos"/> </div>
                <div className="box">
                    <div className="boxinput"> 
                        <div> 
                            <Inputs typee="text" nome="Nome do Produto"
                                        valor={nome}
                                        funcao={ (c) => setNome(c.target.value)}
                            /> 
                            
                        </div>
                        <div> 
                            <Inputs typee="text" nome="Cód Interno" 
                                        valor={codigoP}
                                        funcao={ (c) => setCodigoP(c.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="boxinput"> 
                        <div className="a">   <div> Categoria</div>

                            {

                                addCategoria === true 

                                ?
                                    <div className="AddCategoria" >
                                        <input placeholder="Adicionar Categoria" 
                                                value={categoria}
                                                onChange={ (c) => setCategoria(c.target.value) }
                                        />
                                        <label onClick={ () => {
                                            setAddCategoria(false)
                                            setCategoria('')
                                        } } > Escolher Categoria </label>
                                    </div>

                                :
                                    <select value={categoria} name="categoria" id="categoria"
                                                onChange={ (c) => setCategoria(c.target.value) } >

                                        <option value="">Escolher</option>
                                        <option value="AddCategoria">Adicionar Categoria</option>

                                            {
                                                categoriasSelect.map( (Ca) =>

                                                    <option value={Ca} > {Ca} </option>

                                                )
                                            }


                                    </select> 
                            }

                        </div>
                        <div> 
                            <Inputs typee="number" nome="Estoque Minímo"
                                        valor={qtdMinima}
                                        funcao={ (c) => setQtdMinima(c.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="boxinput"> 
                        <div> 
                            <Inputs typee="text" nome="Valor de Custo"
                                        valor={valorC}
                                        funcao={ (c) => setValorC(c.target.value)}   
                            /> 
                        </div>
                        <div> 
                            <Inputs typee="number" nome="Estoque Atual"
                                        valor={qtdAtual}
                                        funcao={ (c) => setQtdAtual(c.target.value)}   
                            />
                        </div>
                    </div>
                    <div className="boxinput"> 
                        <div className="a"> <div> Valor de Venda </div>  
                            <input disabled value={valorV}/> 
                        </div>
                        <div> 
                            <Inputs typee="number" nome="Porcentagem de Lucro (%)"
                                        valor={lucro}
                                        funcao={ (c) => setLucro(c.target.value) } 
                            />
                        </div>
                    </div>

                    <button onClick={ cadastrarProduto } >Cadastrar</button>
                </div>
            </ConRegister>
        </Container>
    )


}

// Passar a função como props

 function Inputs(props) {
    return (
        <div>
            <div className="name">{props.nome}</div>
            <input type={props.typee}
                    value={props.valor}
                    onChange={ props.funcao }
            />
        </div>
    )
}