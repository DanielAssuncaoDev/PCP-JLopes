import { Container, ContainerConteudo } from "./styled";


import Menu from '../../../components/menuAdm/styled'
import Filters from "../../../components/adminFilters/styled";
import CabeCalho from "../../../components/cabecalho/styled";
import Titulo from "../../../components/user-titulo/styled";


export default function Reports() {
    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <CabeCalho />
                <div className="title"> <Titulo nome="Relátorio"/> </div>
               <div className="filter">  <Filters option1="Nome" option2="Email" option3="Turma" /> </div>
               <div className="table">
                    
                    <thead>
                        <th> Nome </th>
                        <th> Email </th>
                        <th> Turma </th>
                        <th> Qtd Atual</th>
                        <th> Qtd Entrada</th>
                        <th> Qtd Saída</th>
                        <th> VL Total</th>

                    </thead>
                        <tbody>
                            <tr>
                                <td> Fulano deucrano da silva </td>
                                <td> FulanodeucranoADM-B@acaofatima.com.br </td>
                                <td> 3</td>
                                <td>24</td>
                                <td>  132</td>
                                <td>223</td>
                                <td> R$ 1.900</td>
                            </tr>
                       </tbody>
                </div>
            </ContainerConteudo>
        </Container>
    )

}