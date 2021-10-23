import { Container, ContainerConteudo } from "./styled";


import Menu from '../../../components/menuAdm/styled'
import Filters from "../../../components/adminFilters/styled";
import CabeCalho from "../../../components/cabecalho/styled";
import Titulo from "../../../components/user-titulo/styled";


export default function LoginManager() {
    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <CabeCalho />
                <div className="title"> <Titulo nome="Gerenciador de Login"/> </div>
               <div className="filter">  <Filters option1="Nome" option2="Email" option3="Turma" /> </div>
               <div className="table">
                    
                    <thead>
                        <th> Nome </th>
                        <th> Email </th>
                        <th> Turma </th>
                        <th> Chamada</th>
                        <th>ação</th>
                    </thead>
                        <tbody>
                            <tr>
                                <td> Fulano deucrano da silva </td>
                                <td> FulanodeucranoADM-B@acaofatima.com.br </td>
                                <td> ADM-B</td>
                                <td>24</td>
                                <td>  
                                <div className="dd" style={{cursor: 'pointer'}}> <img src="./assets/images/lixeira.svg" alt="" width="20" /></div> 
                                </td>
                            </tr>
                       </tbody>
                </div>
            </ContainerConteudo>
        </Container>
    )

}