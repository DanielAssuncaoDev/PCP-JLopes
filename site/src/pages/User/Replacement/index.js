
import {ContRepor, Container} from "./styled"
import Cabecalho from '../../../components/cabecalho/styled'
import Titulo from "../../../components/user-titulo/styled"
import Pesquisar from "../../../components/pesquisar/styled"
import Menu from '../../../components/menuUser/styled'


export default function Repor() {
    return (
        <Container>
            <Menu/>
            <ContRepor>
                <Cabecalho />
                 <div className="til"><Titulo nome="Sugestão de Reposição"/> </div>
                 <div className="pes"><Pesquisar /> </div>
                <div className="table">
                    <thead>
                            <th> Nome </th>
                            <th> Código </th>
                            <th > Qtd. Minima</th>
                            <th> Qtd. Atual </th>
                            <th> VL Custo </th>
                            <th> VL Venda</th>
                            <th className="a"> </th>
                    </thead>

                    <tbody>
                        <tr>
                            <td> Cadeira Gamer</td>
                            <td> 690888999</td>
                            <td style={{color: 'red'}}>4</td>
                            <td>5</td>
                            <td>R$: 150,00</td>
                            <td>R$: 450,00</td>
                            <td> <img src="./assets/images/reset.svg" alt=""/></td>
                        </tr>
                    </tbody>
                </div>
            </ContRepor>
        </Container>
    )
}