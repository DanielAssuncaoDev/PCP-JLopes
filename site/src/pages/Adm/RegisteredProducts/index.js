import { Container } from "./styled";

import CabeCalho from "../../../components/cabecalho/index";
import PaginasListar from '../../../components/Outros/PaginaListar/index'

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api.js'
const api = new Api()

export default function RegisteredProducts() {

const [produtos, setProdutos] = useState([])

const [nomeP, setNomeP] = useState('')
const [codigoP, setCodigoP] = useState('')
const [categoriaP, setCategoriaP] = useState('')
const [dtCadastro, setDtCadastro] = useState('')
const [filtro, setFiltro] = useState('')

const [FiltrosAvancado, setFiltrosAvancado] = useState(false);

const nav = useHistory()

// const ListarProdutos = async () => {
//     let p = null

//     if(FiltrosAvancado === false){
//         p = await api.ListarProdutosUsuario( filtro, filtro, '', '', 'false')
//     } else {
//         p = await api.ListarProdutosUsuario( nomeP, codigoP, categoriaP, dtCadastro, 'true' )
//     }

//     console.log(p)
//     setProdutos(p)
// }

function ConverterProdutos(){

    let p = []

    for( let i of produtos ){
        p.push( [ i.id_usuario_pcpjp2021_tb_usuario.nm_usuario, i.nm_produto, i.ds_categoria, i.nr_codigo, i.qtd_minima, i.qtd_atual, i.vl_custo, i.vl_venda, i.dt_cadastro, i ] )
    }

    return p
}


useEffect(() => {

        
    const ListarProdutos = async () => {
        let p = null

        if(FiltrosAvancado === false){
            p = await api.ListarProdutosUsuario( filtro, filtro, '', '', 'false')
        } else {
            p = await api.ListarProdutosUsuario( nomeP, codigoP, categoriaP, dtCadastro, 'true' )
        }

        setProdutos(p)
    }

    ListarProdutos()
}, [nomeP, codigoP, categoriaP, dtCadastro, filtro, FiltrosAvancado])

    return (
        <Container>
            <CabeCalho 
                    OptionsNav={
                        [
                            {
                                nome: 'Listar Movimentações',
                                class: '',
                                function: () => nav.push('/ReportsManager')
                            },
                            {
                                nome: 'Listar Produtos',
                                class: 'OpstionSelct',
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
                TituloPagina={'Listar Produtos'}
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
                                Label: 'Nome',
                                Value: nomeP,
                                SetValue: setNomeP,
                                Type: 'text'
                            },
                            {
                                Label: 'Código',
                                Value: codigoP,
                                SetValue: setCodigoP,
                                Type: 'text'
                            },
                            {
                                Label: 'Categoria',
                                Value: categoriaP,
                                SetValue: setCategoriaP,
                                Type: 'text'
                            },
                            {
                                Label: 'Data de Cadastro',
                                Value: dtCadastro,
                                SetValue: setDtCadastro,
                                Type: 'date'
                            }
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
                                NCampo: 'Categoria',
                                Id: ''
                            },{ 
                                NCampo: 'Código',
                                Id: ''
                            }, 
                            {
                                NCampo: 'Qtd. Mínima', 
                                Id: ''
                            },
                            {  
                                NCampo: 'Qtd. Atual',
                                Id: ''
                            },
                            {
                                NCampo: 'Vl. Custo',
                                Id: ''
                            }, 
                            {
                                NCampo: 'Vl. Venda',
                                Id: ''
                            }, 
                            {
                                NCampo: 'Dt. Cadastro',
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

// <div className="title"> <Titulo nome="Produtos Cadastrado"/> </div>
//                <div className="filter">  {/*<Filters option1="Nome" option2="Email" option3="Turma" />*/} </div>
//                <div className="table">
                    
//                     <thead>
//                         <th> Nome </th>
//                         <th> Nome do Produto </th>
//                         <th> Categoria</th>
//                         <th> Qtd Atual</th>
//                         <th> Qtd Miníma</th>
//                         <th> VL Custo</th>
//                         <th> VL Venda</th>
//                         <th> VL Cadastrado em</th>
//                     </thead>
//                         <tbody>
//                             {
//                                 produtos.map((p) => 
//                                     <tr>
//                                         <td> {p.id_usuario_pcpjp2021_tb_usuario.nm_usuario} </td>
//                                         <td> {p.nm_produto} </td>
//                                         <td> {p.ds_categoria} </td>
//                                         <td> {p.qtd_atual} </td>
//                                         <td> {p.qtd_minima} </td>
//                                         <td> {p.vl_custo} </td>
//                                         <td> {p.vl_venda} </td>
//                                         <td> {p.dt_cadastro} </td>
//                                     </tr>
//                                 )
//                             }
//                        </tbody>
//                 </div>
//             </ContainerConteudo>