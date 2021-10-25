
import {ContRepor, Container} from "./styled"
import Cabecalho from '../../../components/cabecalho/styled'
import Titulo from "../../../components/user-titulo/styled"
import Pesquisar from "../../../components/pesquisar/styled"
import Menu from '../../../components/menuUser/styled'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import Api from '../../../service/api'
const api = new Api()

export default function Repor() {

const [ produtos, setProdutos ] = useState([])

const [filtro, setFiltro] = useState('')

const nav = useHistory()

    const ListarProdutosFalta = async() => {
        let cookie = JSON.parse( Cookie.get('User') )
        let p = await api.listarProdutos(cookie.id_usuario, filtro, filtro, '', '')

        console.log(filtro)

        let pFalta = p.filter( (x) => x.qtd_minima > x.qtd_atual )
        setProdutos(pFalta)
        console.log(pFalta)
    }
        useEffect( () => {
            ListarProdutosFalta()
        }, [filtro] )


    return (
        <Container>
            <Menu/>
            <ContRepor>
                <Cabecalho />
                 <div className="til"><Titulo nome="Sugestão de Reposição"/> </div>
                 <div className="pes"><Pesquisar filtro={{filtro, setFiltro}} /> </div>
                <div className="table">
                    <thead>
                            <th> Nome </th>
                            <th> Código </th>
                            <th > Qtd. Minima</th>
                            <th> Qtd. Atual </th>
                            <th> VL Custo </th>
                            <th> VL Venda</th>
                            <th className="a"> </th>
                    </thead>

                    <tbody>
                        {
                            produtos.map( 
                                (p) => 
                                    <tr>
                                        <td> {p.nm_produto} </td>
                                        <td> {p.nr_codigo} </td>
                                        <td> {p.qtd_minima} </td>
                                        <td style={{color: 'red'}} > {p.qtd_atual} </td>
                                        <td>R$: {p.vl_custo}</td>
                                        <td>R$: {p.vl_venda}</td>
                                        <td> <img  onClick={ () => nav.push( {pathname: '/Movement', state: p} )} src="./assets/images/reset.svg" alt=""/></td>
                                    </tr>
                                )
                        }
                        
                    </tbody>
                </div>
            </ContRepor>
        </Container>
    )
}