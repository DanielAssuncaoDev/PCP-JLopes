import { Container } from "./styled";

import CabeCalho from "../../../components/cabecalho/index";
import PaginasListar from '../../../components/Outros/PaginaListar/index'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api.js'
const api = new Api()

export default function Reports() {

const [relatorios, setRelatorios] = useState([])
const [filtro, setFiltro] = useState('')

const [nomeP, setNomeP] = useState('')
const [nomeUser, setNomeUser ] = useState('')
// const [categoriaP, setCategoriaP] = useState('')
const [dtMovimentacao, setDtMovimentacao] = useState('')
// const [ buscaAvancada, setBuscaAvancada ] = useState(false)

const [FiltrosAvancado, setFiltrosAvancado] = useState(false);


const nav = useHistory()

// const ListarRelatorios = async () => {

//     let r = null

//     if ( FiltrosAvancado === false )
//         r = await api.ListarControleEstoque(filtro, filtro, '', '', '', 'false')

//     else
//         r = await api.ListarControleEstoque(nomeP, '', nomeUser, dtMovimentacao, '', 'true')


//     setRelatorios(r)
//     console.log(r)
// }

useEffect(() => {

    
const ListarRelatorios = async () => {

    let r = null

    if ( FiltrosAvancado === false )
        r = await api.ListarControleEstoque(filtro, filtro, '', '', '', 'false')

    else
        r = await api.ListarControleEstoque(nomeP, '', nomeUser, dtMovimentacao, '', 'true')


    setRelatorios(r)
}

    ListarRelatorios()
}, [FiltrosAvancado, filtro, nomeP, nomeUser, dtMovimentacao])


function ConverterProdutos(){

    let p = []

    for( let i of relatorios ){
        p.push( [ i.id_usuario_pcpjp2021_tb_usuario.nm_usuario, i.id_produto_pcpjp2021_tb_produto.nm_produto, i.id_produto_pcpjp2021_tb_produto.nr_codigo, i.qtd_produtos, i.ds_movimentacao, i.vl_lucro, i.dt_movimentacao, i ] )
    }

    return p
}

    return (
        <Container>
            {/* <Menu /> */}
            {/* <ContainerConteudo> */}
            <CabeCalho 
                    OptionsNav={
                        [
                            {
                                nome: 'Listar Movimentações',
                                class: 'OpstionSelct',
                                function: () => nav.push('/ReportsManager')
                            },
                            {
                                nome: 'Listar Produtos',
                                class: '',
                                function: () => nav.push('/RegisteredProducts')
                            },
                            {
                                nome: 'Usuários Cadastrados',
                                class: '',
                                function: () => nav.push('/LoginsManager')
                            },
                            {
                                nome: 'Gerenciar Cadastro',
                                class: '',
                                function:  () => nav.push('/inputManager')
                            }
                        ]
                    }
                />      

            <PaginasListar
                TituloPagina={'Listar Movimentações'}
                FiltroSimples={
                    {
                        label: 'Pesquisar por: Nome ou Cód',
                        filtro: filtro,
                        setFiltro: setFiltro,
                        FiltrosAvancado: FiltrosAvancado,
                        setFiltrosAvancado: setFiltrosAvancado,

                    }
                }
                FiltrosAvancado={
                    {
                        Inputs: [
                            {
                                Label: 'Nome Produto',
                                Value: nomeP,
                                SetValue: setNomeP,
                                Type: 'text'
                            },
                            {
                                Label: 'Nome Usuário',
                                Value: nomeUser,
                                SetValue: setNomeUser,
                                Type: 'text'
                            },
                            {
                                Label: 'Data da Movimentação',
                                Value: dtMovimentacao,
                                SetValue: setDtMovimentacao,
                                Type: 'date'
                            }
                        ],
                        Buttons: [
                           
                        ]
                    }
                    
                }
                Table={
                    {
                        campos: [ 
                            { 
                                NCampo: 'Nome Completo',
                                Id: ''
                            }, 
                            {
                                NCampo: 'Nome Produto',
                                Id: ''
                            },
                            {
                                NCampo: 'Código Produto',
                                Id: ''
                            },
                            {
                                NCampo: 'Qtd. Movimentada',
                                Id: ''
                            },{ 
                                NCampo: 'Tipo Movimentação',
                                Id: ''
                            }, 
                            {
                                NCampo: 'Lucro', 
                                Id: ''
                            },
                            {  
                                NCampo: 'Data Movimentação',
                                Id: ''
                            }                            
                        ],
                        registros:  ConverterProdutos(),
                        options: [
                            
                        ],
                        Function: ''
                    }
                }
            />

        </Container>
    )

}

// div className="title"> <Titulo nome="Relátorio"/> </div>
//                <div className="filter">  {/* <Filters option1="Nome" option2="Email" option3="Turma" /> */}</div>
//                <div className="table">
                    
//                     <thead>
//                         <th> Nome </th>
//                         <th> Email </th>
//                         <th> Qtd Atual</th>
//                         <th> Tipo Movimentação </th>
//                         <th> Qtd Movimentada </th>
//                         <th> VL Total</th>

//                     </thead>
//                         <tbody>
//                             {
//                                 relatorios[0].map((r) => 
//                                     <tr>
//                                         <td> {r.id_usuario_pcpjp2021_tb_usuario.nm_usuario} </td>
//                                         <td> {r.id_usuario_pcpjp2021_tb_usuario.ds_email} </td>
//                                         <td> {r.id_produto_pcpjp2021_tb_produto} </td>
//                                         <td> {r.ds_movimentacao.qtd_atual} </td>
//                                         <td> {r.qtd_produtos} </td>
//                                         <td> {r.vl_lucro} </td>
//                                     </tr>
//                                 )
//                             }

//                        </tbody>


//                 </div>
//             </ContainerConteudo>