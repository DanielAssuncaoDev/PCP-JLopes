import { Containers, ContainerConteudo} from "./styled";

import CabeCalho from "../../../components/cabecalho/styled";
import Cards from "../../../components/Cards/styled";
import Menu from "../../../components/menuUser/styled"

import Repor from './repor.svg'



export default function Inicio() {
    
    return(
        <Containers>
            <Menu />
            <ContainerConteudo>
                <CabeCalho />
                <div className="box">
                    <div> <Cards logo={Repor} name="Sugestão de Reposição"/> </div>
                    <div> <Cards logo="./assets/images/est.svg" name="Movimentação de Estoque"/> </div>
                </div>
                <div className="box">
                <div> <Cards logo="./assets/images/1311237.png" width="230" height="110" name="Cadastrar Produto"/> </div>
                <div> <Cards logo="./assets/images/register.svg" name="Listar Produtos"/> </div>
                </div>                
            </ContainerConteudo>
        </Containers>
    )
}