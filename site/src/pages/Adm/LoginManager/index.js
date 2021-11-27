import { Container, ContainerConteudo } from "./styled";


import Menu from '../../../components/menuAdm/styled'
import Filters from "../../../components/adminFilters/styled";
import CabeCalho from "../../../components/cabecalho/styled";
import Titulo from "../../../components/user-titulo/styled";


import { useEffect, useState } from "react";

import Api from '../../../service/api.js'
const api = new Api()

export default function LoginManager() {

const [users, setUsers] = useState([])
const [email, setEmail] = useState('')
const [nome, setNome] = useState('')

async function ListarUsers(){
    let users = await api.ListarUsuarios(nome, email)
    console.log(users)
    setUsers(users)
}

useEffect( () => {
    ListarUsers()

}, [] )


async function DeletarUser(idUser, nmUser){
    let deleteUser = await api.DeletarUsuarios(idUser)

    if(deleteUser.erro !== undefined){
        alert(deleteUser.erro)
    } else {
        alert(`"${nmUser}" Deletado`)
        ListarUsers()
    }
}

    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <CabeCalho />
                <div className="title"> <Titulo nome="Gerenciador de Login"/> </div>
               <div className="filter">  <Filters listarUser={ () => ListarUsers() } option1={{label: 'Nome', value: nome, set: setNome}} option2={{label:"Email", value: email, set: setEmail}} /></div>
               <div className="table">
                    
                    <thead>
                        <th> Nome </th>
                        <th> Email </th>
                    
                        <th>ação</th>
                    </thead>
                        <tbody>
                            {
                                users.map( (u) => 
                                    <tr>
                                        <td> {u.nm_usuario} </td>
                                        <td> {u.ds_email} </td>
                                        
                                        <td>  
                                            <div className="dd" style={{cursor: 'pointer'}}> 
                                                <img onClick={() => DeletarUser(u.id_usuario, u.nm_usuario)} src="./assets/images/lixeira.svg" alt="" width="20" />
                                            </div> 
                                        </td>
                                    </tr>
                                )
                            }
                            
                       </tbody>
                </div>
            </ContainerConteudo>
        </Container>
    )

}