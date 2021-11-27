import { Container, ContainerConteudo } from "./styled";


import Menu from '../../../components/menuAdm/styled'
import Filters from "../../../components/adminFilters/styled";
import CabeCalho from "../../../components/cabecalho/styled";
import Titulo from "../../../components/user-titulo/styled";

import { useState, useEffect } from 'react'

import Api from '../../../service/api.js'
const api = new Api()

export default function Reports() {

const [relatorios, setRelatorios] = useState([])

// Ta dando um erro q eu n entendi, tenta resolver dps

const ListarRelatorios = async () => {
    let r = await api.ListarControleEstoque()
    setRelatorios([r])
}

useEffect(() => {
    ListarRelatorios()
}, [])

    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <CabeCalho />
                <div className="title"> <Titulo nome="Relátorio"/> </div>
               <div className="filter">  {/* <Filters option1="Nome" option2="Email" option3="Turma" /> */}</div>
               <div className="table">
                    
                    <thead>
                        <th> Nome </th>
                        <th> Email </th>
                        <th> Qtd Atual</th>
                        <th> Tipo Movimentação </th>
                        <th> Qtd Movimentada </th>
                        <th> VL Total</th>

                    </thead>
                        <tbody>
                            {
                                relatorios[0].map((r) => 
                                    <tr>
                                        <td> {r.id_usuario_pcpjp2021_tb_usuario.nm_usuario} </td>
                                        <td> {r.id_usuario_pcpjp2021_tb_usuario.ds_email} </td>
                                        <td> {r.id_produto_pcpjp2021_tb_produto} </td>
                                        <td> {r.ds_movimentacao.qtd_atual} </td>
                                        <td> {r.qtd_produtos} </td>
                                        <td> {r.vl_lucro} </td>
                                    </tr>
                                )
                            }

                       </tbody>


                </div>
            </ContainerConteudo>
        </Container>
    )

}