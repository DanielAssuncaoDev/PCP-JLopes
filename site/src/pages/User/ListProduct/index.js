import { Listar, Container } from "./styled"
import Cabecalho from '../../../components/cabecalho/styled'
import Titulo from "../../../components/user-titulo/styled"
import Pesquisar from "../../../components/pesquisar/styled"
import Button from "../../../components/button-filtrar/button-filtro"
import Inputs from "../../../components/button-filtrar/inputs"
import Menu from "../../../components/menuUser/styled"


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import Cookie from 'js-cookie'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Api from '../../../service/api'
const api = new Api()

export default function ListarProduto() {

const [produtos, setProdutos] = useState([])

const [nomeP, setNomeP] = useState('')
const [codigoP, setCodigoP] = useState('')
const [categoriaP, setCategoriaP] = useState('')
const [dtCadastro, setDtCadastro] = useState('')

const [filtro, setFiltro] = useState('')
const [FiltrosA, setFiltrosA] = useState(false);


let nav = useHistory()

    const ListarProdutos = async() => {
        let cookie = JSON.parse( Cookie.get('User') )

        let p = null

        if(FiltrosA === false){
            p = await api.listarProdutos(cookie.id_usuario, filtro, filtro, '', '', 'false')
            console.log(filtro)
        } else {
            p = await api.listarProdutos(cookie.id_usuario, nomeP, codigoP, categoriaP, dtCadastro, 'true' )
        }

            if( p.erro !== undefined ){
                alert(p.erro)
            } else {
                setProdutos(p)
            }
    }
        useEffect( () => {
            ListarProdutos()
        }, [FiltrosA, filtro, nomeP, codigoP, categoriaP, dtCadastro] )


    const DeletarProduto = async( idProduto ) => {

        confirmAlert({
            title: 'Remoção de Produto',
            message: 'Deseja Remover o Produto ' + nomeP + ' ?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => { let r = await api.deletarProduto(idProduto);

                        if( r.erro !== undefined ){
                            alert(r.erro)
                        } else {
                            alert('Produto Removido com Sucesso')
                            ListarProdutos()
                        }
                       
                    }
                },
                {
                    label: 'Não',
                    onClick: () => {
                        alert('Produto Não Removido')

                    }
                }
            ]
        })

    }

    
    async function Filtrar() {
        if(FiltrosA === true){
            setFiltrosA(false)
        }
        else {
            setFiltrosA(true)
        }
    }

    
    return (
        <Container>
             <Menu/>
            <Listar>
                <Cabecalho />
                <div className="product">
                    <Titulo nome="Listar Produtos" />
                </div> 
                {/* 
                <div className="filter">
                    <div style={{marginRight: '5em'}}> <Pesquisar /> </div>
                    <div onClick={ () => Filtrar() } className="xx">  <Button/> </div>
                    <div style={{marginRight: '5em'}}> <Pesquisar filtro={{filtro, setFiltro}} /> </div>
                </div>   
                {
                    FiltrosA === true
                    ? <Inputs filtros={ {nomeP, setNomeP, codigoP, setCodigoP, categoriaP, setCategoriaP, dtCadastro, setDtCadastro } } />
                    : ""

                }  */}
                <div className="table">
                    
                    <thead>
                        <th> Nome </th>
                        <th> Categoria </th>
                        <th> Código </th>
                        <th> Qtd. Minima</th>
                        <th> Qtd. Atual </th>
                        <th> VL Custo </th>
                        <th> VL Venda</th>
                        <th>Data Cadast.</th>
                        <th className="b"></th>
                        <th className="a"></th>


                    </thead>
                    <tbody>
                        {
                            produtos.map( (p) =>
                            
                                <tr>
                                    <td title={p.nm_produto} > {p.nm_produto.length > 12 ? p.nm_produto.substring(0, 12) + '...' : p.nm_produto  } </td>
                                    <td> {p.ds_categoria} </td>
                                    <td> {p.nr_codigo}</td>
                                    <td> {p.qtd_minima} </td>
                                    <td> {p.qtd_atual} </td>
                                    <td>R$: {p.vl_custo}</td>
                                    <td>R$: {p.vl_venda}</td>
                                    <td> {p.dt_cadastro}</td>
                                    <td> <img onClick={ () => nav.push({ pathname: '/Register', state: p })  } src="./assets/images/edit_icon_128873.svg" alt="" style={{cursor: 'pointer'}}/></td>
                                    <td> <img onClick={ () => DeletarProduto(p.id_produto) } src="./assets/images/Vector.svg" alt="" style={{cursor: 'pointer'}}/></td>
                                </tr>
                            
                            )
                            
                        }
                </tbody>
                </div>
                <div className="add">
                     <Link to="./Register"> <button> Adicionar Produto</button> </Link>
                </div>
            </Listar>
        </Container>
       
        )
    }