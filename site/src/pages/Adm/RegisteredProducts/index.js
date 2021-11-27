import { Container, ContainerConteudo } from "./styled";


import Menu from '../../../components/menuAdm/styled'
import Filters from "../../../components/adminFilters/styled";
import CabeCalho from "../../../components/cabecalho/styled";
import Titulo from "../../../components/user-titulo/styled";


export default function RegisteredProducts() {
    return (
        <Container>
            <Menu />
            <ContainerConteudo>
                <CabeCalho />
                <div className="title"> <Titulo nome="Produtos Cadastrado"/> </div>
               <div className="filter">  <Filters option1="Nome" option2="Email" option3="Turma" /> </div>
               <div className="table">
                    
                    <thead>
                        <th> Nome </th>
                        <th> Email </th>
                        <th> Nome do Produto </th>
                        <th>  Categoria</th>
                        <th> Qtd Atual</th>
                        <th> Qtd Miníma</th>
                        <th> VL Custo</th>
                        <th> VL Venda</th>
                        <th> VL Cadastrado em</th>
                    </thead>
                        <tbody>
                            <tr>
                                <td> Fulano deucrano da silva </td>
                                <td > FulanodeucranoADM-B@acaofatima.com.br </td>
                                <td> Mesa</td>
                                <td>Cadeira</td>
                                <td>  132</td>
                                <td>223</td>
                                <td> R$ 1.900</td>
                                <td> R$ 1.900</td>
                                <td> 11/11/1111</td>

                            </tr>
                       </tbody>
                </div>
            </ContainerConteudo>
        </Container>
    )

}