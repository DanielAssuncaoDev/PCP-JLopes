import { Container } from "./styled";

import CabeCalho from "../../../components/cabecalho/index";
import PaginasListar from '../../../components/Outros/PaginaListar/index'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api.js'
const api = new Api()

export default function LoginManager(props) {

const [users, setUsers] = useState([])
const [filtro, setFiltro] = useState('')

const nav = useHistory()

async function ListarUsers(){
    let users = await api.ListarUsuarios(filtro, filtro)
    console.log(users)
    setUsers(users)
}

useEffect( () => {

    async function ListarUsers(){
        let users = await api.ListarUsuarios(filtro, filtro)
        console.log(users)
        setUsers(users)
    }

    ListarUsers()

}, [filtro] )


async function DeletarUser(User){

    for( let i of User ){
        if(typeof(i) === 'object'){
            User = i
            break
        }
    }
    console.log(User)
    let deleteUser = await api.DeletarUsuarios(User.id_usuario)

    if(deleteUser.erro !== undefined){
        toast.error(deleteUser.erro)
    } else {
        toast.success(`Usuário Deletado`)
        ListarUsers()
    }
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
                                class: 'OpstionSelct',
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
                TituloPagina={'Usuários Cadastrados'}
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
                                img: '/assets/images/Delete.svg',
                                Function: DeletarUser
                            }
                        ],
                        Function: ''
                    }
                }
            />

               
        </Container>
    )

}

// <div className="title"> <Titulo nome="Gerenciador de Login"/> </div>
// <div className="filter">  <Filters listarUser={ () => ListarUsers() } option1={{label: 'Nome', value: nome, set: setNome}} option2={{label:"Email", value: email, set: setEmail}} /></div>
// <div className="table">
     
//      <thead>
//          <th> Nome </th>
//          <th> Email </th>
     
//          <th>ação</th>
//      </thead>
//          <tbody>
//              {
//                  users.map( (u) => 
//                      <tr>
//                          <td> {u.nm_usuario} </td>
//                          <td> {u.ds_email} </td>
                         
//                          <td>  
//                              <div className="dd" style={{cursor: 'pointer'}}> 
//                                  <img onClick={() => DeletarUser(u.id_usuario, u.nm_usuario)} src="./assets/images/lixeira.svg" alt="" width="20" />
//                              </div> 
//                          </td>
//                      </tr>
//                  )
//              }
             
//         </tbody>
//  </div>