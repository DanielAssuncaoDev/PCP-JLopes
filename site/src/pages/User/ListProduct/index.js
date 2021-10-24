import { Listar, Container } from "./styled"

import Titulo from "../../../components/user-titulo/styled"
import Pesquisar from "../../../components/pesquisar/styled"
import Button from "../../../components/button-filtrar/button-filtro"
import Inputs from "../../../components/button-filtrar/inputs"
import Menu from "../../../components/menuUser/styled"

import Cookie from 'js-cookie'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api'
const api = new Api()

export default function ListarProduto() {

const [produtos, setProdutos] = useState([])

const [nomeP, setNomeP] = useState('')
const [codigoP, setCodigoP] = useState('')
const [categoriaP, setCategoriaP] = useState('')
const [dtCadastro, setDtCadastro] = useState('')

let nav = useHistory()

    const ListarProdutos = async() => {
        let cookie = JSON.parse( Cookie.get('User') )

        let p = await api.listarProdutos(cookie.id_usuario, nomeP, codigoP, categoriaP, dtCadastro )

            if( p.erro !== undefined ){
                alert(p.erro)
            } else {
                setProdutos(p)
            }

        // console.log(p)
    }
        useEffect( () => {
            ListarProdutos()
        }, [] )


    const DeletarProduto = async( idProduto ) => {

        let r = await api.deletarProduto(idProduto)

        if( r.erro !== undefined ){
            alert(r.erro)
        } else {
            alert('Produto deletado')
            ListarProdutos()
        }

    }

    // Gelado Gay

    const [Filtros, setFiltros] = useState(false);


    function listar() {
        setFiltros(true)  
        onclick="select"
    }

    function remover(){
        setFiltros(false)
    }

    return (
        <Container>
             <Menu/>
            <Listar> 
                <div className="product">
                    <Titulo nome="Listar Produtos" />
                </div> 
                <div className="filter">
                    <div style={{marginRight: '5em'}}> <Pesquisar /> </div>
                    <div onclick={listar}>  <Button/> </div>
                </div>
            
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
                                    <td>R$:{p.vl_custo}</td>
                                    <td>R$: {p.vl_venda}</td>
                                    <td> {p.dt_cadastro}</td>
                                    <td> <img onClick={ () => nav.push({ pathname: '/Register', state: p }) } src="./assets/images/editar (1) 5.svg" alt=""/></td>
                                    <td> <img onClick={ () => DeletarProduto(p.id_produto) } src="./assets/images/Vector.svg" alt=""/></td>
                                </tr>
                            
                            )
                            
                        }
                </tbody>
                </div>
                <div className="add">
                    <button> Adicionar </button>
                </div>
                <div className="bandeiras">
                     
                     {Filtros &&
                         <Inputs onClick={listar} />
                     }
                     
                

                 </div>
            </Listar>
        </Container>
       
        )
    }