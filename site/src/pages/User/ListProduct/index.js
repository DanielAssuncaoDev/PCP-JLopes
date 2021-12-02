import Cabecalho from '../../../components/cabecalho/index'
import PaginaListar from '../../../components/Outros/PaginaListar/index'

import CadastrarProduto from '../RegisterProdut/index'
import ControleEstoque from '../Replacement/index'

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookie from 'js-cookie'
import { useState, useEffect } from 'react'

import Api from '../../../service/api'
const api = new Api()

export default function ListarProduto() {

const [produtos, setProdutos] = useState([])

const [nomeP, setNomeP] = useState('')
const [codigoP, setCodigoP] = useState('')
const [categoriaP, setCategoriaP] = useState('')
const [dtCadastro, setDtCadastro] = useState('')

const [FiltrosAvancado, setFiltrosAvancado] = useState(false);
const [filtro, setFiltro] = useState('')
const [ abaixoEstoque, setAbaixoEstoque ] = useState(false)

const [ produtoAlterar, setProdutoAlterar] = useState(null)
const [ exibirCadastrarProduto, setExibirCadastrarProduto ] = useState(false)
const [ exibirControleEstoque, setExibirControleEstoque] = useState(false)
const [ controleEstoque, setControleEstoque] = useState(null)


    const ListarProdutos = async() => {
        let cookie = JSON.parse( Cookie.get('User') )

        let p = null

        if(FiltrosAvancado === false){
            p = await api.listarProdutos(cookie.id_usuario, filtro, filtro, '', '', 'false')
        } else {
            p = await api.listarProdutos(cookie.id_usuario, nomeP, codigoP, categoriaP, dtCadastro, 'true' )
        }

            if( p.erro !== undefined ){
                toast.error(p.erro)
            } else {
                setProdutos(p)
            }
    }
        useEffect( () => {

            const ListarProdutos = async() => {
                let cookie = JSON.parse( Cookie.get('User') )
        
                let p = null
        
                if(FiltrosAvancado === false){
                    p = await api.listarProdutos(cookie.id_usuario, filtro, filtro, '', '', 'false')
                } else {
                    p = await api.listarProdutos(cookie.id_usuario, nomeP, codigoP, categoriaP, dtCadastro, 'true' )
                }
        
                    if( p.erro !== undefined ){
                        toast.error(p.erro)
                    } else {
                        setProdutos(p)
                    }
            }

            ListarProdutos()
        }, [FiltrosAvancado, filtro, nomeP, codigoP, categoriaP, dtCadastro, exibirCadastrarProduto, exibirControleEstoque] )



    const DeletarProduto = async( produto ) => {

        let idProduto = null

        for( let i of produto ){

            if(typeof(i) === 'object'){
                idProduto = (i.id_usuario)
                break
            }
            
        }

        confirmAlert({
            title: 'Remoção de Produto',
            message: 'Deseja Remover o Produto ' + nomeP + ' ?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => { let r = await api.deletarProduto(idProduto);

                        if( r.erro !== undefined ){
                            toast.error(r.erro)
                        } else {
                            toast.success('Produto Removido com Sucesso')
                            ListarProdutos()
                        }
                       
                    }
                },
                {
                    label: 'Não',
                    onClick: () => {
                        toast.success('Produto Não Removido')

                    }
                }
            ]
        })

    }

    
   

    // Converte os registros dos produtos em Array para mandar para o component Table

    function ConverterProdutos(){

        let p = []

        for( let i of produtos ){
            p.push( [i.nm_produto, i.ds_categoria, i.nr_codigo, i.qtd_minima, i.qtd_atual, i.vl_custo, i.vl_venda, i.dt_cadastro, i ] )
        }

        return p
    }


    // Filtra Apenas os Produtos Abaixo do Estoque

    function AlterarListagem(){

        if(abaixoEstoque === false){
            setAbaixoEstoque(true)
            let PAbaixo = produtos.filter( p => p.qtd_atual < p.qtd_minima )
            setProdutos(PAbaixo)
        } else {
            setAbaixoEstoque(false)
            ListarProdutos()
        }
    }

    function PassarProdutoParaAlterar( produto ){
        for( let i of produto ){

            if(typeof(i) === 'object'){
                setProdutoAlterar(i)
                break
            }
            
        }

        setExibirCadastrarProduto(true)
    }

    function PassarProdutoControleEstoque( produto ){
        for( let i of produto ){

            if(typeof(i) === 'object'){
                setControleEstoque(i)
                break
            }
            
        }

        setExibirControleEstoque(true)
    }


    return (
        <div>
            <ToastContainer />
            {
                exibirCadastrarProduto === true 

                ? 
                    <CadastrarProduto esconderPopUp={setExibirCadastrarProduto} AlterarProduto={produtoAlterar} setAlterarProduto={ setProdutoAlterar } />

                : 
                    ''

            }
             {
                exibirControleEstoque === true 

                ? 
                    <ControleEstoque esconderPopUp={setExibirControleEstoque} ControleEstoque={controleEstoque} setControleEstoque={setControleEstoque} />

                : 
                    ''

            }
            
            <Cabecalho
                OptionsNav={
                    [
                        {
                            nome: 'Controle Estoque',
                            class: '',
                            function: () => setExibirControleEstoque(true) 
                        },
                        {
                            nome: 'Listar Produtos',
                            class: 'OpstionSelct',
                            function: ''
                        },
                        {
                            nome: 'Cadastrar Produto',
                            class: '',
                            function: () => setExibirCadastrarProduto(true)

                        }
                    ]
                }
            />
            
            <PaginaListar
                TituloPagina={'Listar Produtos'}
                FiltroSimples={
                    {
                        label: 'Pesquisar por: Nome ou Cód',
                        filtro: filtro,
                        setFiltro: setFiltro,
                        FiltrosAvancado: FiltrosAvancado,
                        setFiltrosAvancado: setFiltrosAvancado
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
                        ],
                        Buttons: [
                            {
                                Label: abaixoEstoque === false ? 'Abaixo do Estoque' : 'Todos Produtos',
                                // SetValue: setAbaixoEstoque,
                                Function: AlterarListagem
                            }
                        ]
                    }
                    
                }
                Table={
                    {
                        campos: [ 
                            { 
                                NCampo: 'Nome',
                                Id: ''
                            }, 
                            {
                                NCampo: 'Categoria',
                                Id: ''
                            },
                            { 
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
                            },
                            {
                                NCampo: '',
                                Id: 'Option'
                            }
                            
                        ],
                        registros:  ConverterProdutos(),
                        options: [
                            {
                                img: '/assets/images/Edit.svg',
                                Function: PassarProdutoParaAlterar
                            },
                            {
                                img: '/assets/images/Delete.svg',
                                Function: DeletarProduto
                            }
                        ],
                        Function: PassarProdutoControleEstoque
                    }
                }
            />

        </div>
       
        )
    }


    