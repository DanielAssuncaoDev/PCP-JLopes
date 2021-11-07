import { Container, ContainerConteudo } from "./styled";


import Menu from '../../../components/menuAdm/styled'
import Filters from "../../../components/adminFilters/styled";
import CabeCalho from "../../../components/cabecalho/styled";
import Titulo from "../../../components/user-titulo/styled";


export default function InManager() {
    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <CabeCalho />
                <div className="title"> <Titulo nome="Gerenciador de Entrada"/> </div>
               <div className="filter">  <Filters  option1="Nome" option2="Email" option3="Turma" /> </div>
               <div className="table">
                    
                    <thead>
                        <th> Nome </th>
                        <th> Email </th>
                        <th className="a">Ações</th>
                    </thead>
                        <tbody>
                            <tr>
                                <td> Fulano deucrano da silva </td>
                                <td> FulanodeucranoADM-B@acaofatima.com.br </td>
                                <td className="imgs">  
                                    <div className="ss" style={{cursor: 'pointer'}}>  <img src="./assets/images/pngwing 9.png" alt="" height="40"/> </div> 
                                    <div className="dd" style={{cursor: 'pointer'}}> <img src="./assets/images/pngwing 10.png" alt="" height="40"/></div> 
                                </td>
                            </tr>
                       </tbody>
                </div>
            </ContainerConteudo>
        </Container>
    )

}