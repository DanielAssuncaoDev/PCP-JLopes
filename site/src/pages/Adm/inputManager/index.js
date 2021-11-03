import { Container, ContainerConteudo } from "./styled";

import Menu from '../../../components/menuAdm/styled'
import Filters from "../../../components/adminFilters/styled";
import CabeCalho from "../../../components/cabecalho/styled";
import Titulo from "../../../components/user-titulo/styled";


import { useState, useEffect } from 'react'

import Api from '../../../service/api.js'
const api = new Api()

export default function InManager() {

const [ users, setUsers ] = useState([])
const [email, setEmail] = useState('')
const [nome, setNome] = useState('')

    const ListarUsers = async() => {
        let users = await api.usersNaoCadastrados(nome, email)
        setUsers(users)
        console.log(users)

    }
        useEffect( () => {
            ListarUsers()
        }, [] )


    const GerenciarCadastro = async( idUser, situacao ) => {

        console.log(situacao)
        let r = await api.gerenciarCadastro( idUser, situacao )

        if(r.erro !== undefined)
            return alert(r.erro)

        ListarUsers()

    }


    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <CabeCalho />
                <div className="title"> <Titulo nome="Gerenciador de Entrada"/> </div>
               <div className="filter">  <Filters listarUser={ () => ListarUsers() } option1={{label: 'Nome', value: nome, set: setNome}} option2={{label:"Email", value: email, set: setEmail}} /> </div>
               <table>
                    
                    <thead>
                        <th> Nome </th>
                        <th> Email </th>
                        <th className="a">Ações</th>
                    </thead>
                        <tbody>
                            {
                                users.map( (user) =>
                                        
                                    <tr>
                                        <td> {user.nm_usuario} </td>
                                        <td> {user.ds_email} </td>
                                        <td className="imgs">  
                                            <div onClick={ () => GerenciarCadastro( user.id_usuario, 'Aceitar') } className="ss" style={{cursor: 'pointer'}}>  <img src="./assets/images/pngwing 9.png" alt="" height="40"/> </div> 
                                            <div onClick={ () => GerenciarCadastro( user.id_usuario, 'Recusar') } className="dd" style={{cursor: 'pointer'}}> <img src="./assets/images/pngwing 10.png" alt="" height="40"/></div> 
                                        </td>
                                    </tr>  

                                )
                            
                            }
                            
                       </tbody>
                </table>
            </ContainerConteudo>
        </Container>
    )

}