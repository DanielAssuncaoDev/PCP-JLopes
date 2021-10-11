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
                    <div> <Cards logo={Repor} name="Sugestão de Reposição"/> </div>
                </div>
                <div className="box">
                <div> <Cards logo={Repor} name="Sugestão de Reposição"/> </div>
                <div> <Cards logo={Repor} name="Sugestão de Reposição"/> </div>
                </div>                
            </ContainerConteudo>
        </Containers>
    )
}