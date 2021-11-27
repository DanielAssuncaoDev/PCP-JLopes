import { Container, ContainerConteudo } from "./styled";

import Menu from '../../../components/menuAdm/styled'
import Filters from "../../../components/adminFilters/styled";
import CabeCalho from "../../../components/cabecalho/styled";
import Titulo from "../../../components/user-titulo/styled";

import { useState, useEffect } from 'react'

import Api from '../../../service/api.js'
const api = new Api()

export default function RegisteredProducts() {

const [produtos, setProdutos] = useState([])

const ListarProdutos = async () => {
    let p = await api.ListarProdutosUsuario()
    console.log(p)
    setProdutos(p)
}

useEffect(() => {
    ListarProdutos()
}, [])

    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <CabeCalho />
                <div className="title"> <Titulo nome="Produtos Cadastrado"/> </div>
               <div className="filter">  {/*<Filters option1="Nome" option2="Email" option3="Turma" />*/} </div>
               <div className="table">
                    
                    <thead>
                        <th> Nome </th>
                        <th> Nome do Produto </th>
                        <th> Categoria</th>
                        <th> Qtd Atual</th>
                        <th> Qtd Miníma</th>
                        <th> VL Custo</th>
                        <th> VL Venda</th>
                        <th> VL Cadastrado em</th>
                    </thead>
                        <tbody>
                            {
                                produtos.map((p) => 
                                    <tr>
                                        <td> {p.id_usuario_pcpjp2021_tb_usuario.nm_usuario} </td>
                                        <td> {p.nm_produto} </td>
                                        <td> {p.ds_categoria} </td>
                                        <td> {p.qtd_atual} </td>
                                        <td> {p.qtd_minima} </td>
                                        <td> {p.vl_custo} </td>
                                        <td> {p.vl_venda} </td>
                                        <td> {p.dt_cadastro} </td>
                                    </tr>
                                )
                            }
                       </tbody>
                </div>
            </ContainerConteudo>
        </Container>
    )

}