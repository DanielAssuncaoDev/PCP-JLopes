import { Container } from "./styled";

import CabeCalho from "../../../components/cabecalho/index";
import PaginasListar from '../../../components/Outros/PaginaListar/index'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api.js'
const api = new Api()

export default function InManager() {

const [ users, setUsers ] = useState([])
const [ filtro, setFiltro ] = useState('')
const [situacao, setSituacao] = useState('')

const nav = useHistory()

    const ListarUsers = async() => {
        let users = await api.usersNaoCadastrados(filtro, filtro)
        setUsers(users)

    }
        useEffect( () => {

            const ListarUsers = async() => {
                let users = await api.usersNaoCadastrados(filtro, filtro)
                setUsers(users)
        
            }

            ListarUsers()
        }, [filtro] )


    const GerenciarCadastro = async(User) => {
        console.log(User)

        for( let i of User ){
            if(typeof(i) === 'object'){
                User = i
                break
            }
        }        
        let r = await api.gerenciarCadastro( User.id_usuario, situacao )

        if(r.erro !== undefined)
            return toast.error(r.erro)

        ListarUsers()

    }

    
function ConverterProdutos(){

    let p = []

    for( let i of users ){
        p.push( [i.nm_usuario, i.ds_email, i ] )
    }

    return p
}

    return (
        <Container>
            <ToastContainer />
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
                                class: 'OpstionSelct',
                                function:  () => nav.push('/inputManager')
                            }
                        ]
                    }
                />

            <PaginasListar
                TituloPagina={'Solicitações de Cadastro'}
                FiltroSimples={
                    {
                        label: 'Pesquisar por: Nome ou Email',
                        filtro: filtro,
                        setFiltro: setFiltro,
                        FiltrosAvancado: null,
                        setFiltrosAvancado: null,

                    }
                }
                FiltrosAvancado={
                    {
                        Inputs: [
                        
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
                                NCampo: 'Email',
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
                                img: '/assets/images/Aceitar.svg',
                                Function: (U) => {GerenciarCadastro(U); setSituacao('Aceitar')}
                            },
                            {
                                img: '/assets/images/Recusar.svg',
                                Function: (U) => {GerenciarCadastro(U); setSituacao('Recusar')  }
                            }
                        ],
                        Function: ''
                    }
                }
            />

                
        </Container>
    )

}
