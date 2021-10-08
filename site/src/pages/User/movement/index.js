import { Conteudo, Container } from "./styled"


import Titulo from "../../../components/user-titulo/styled"
import Menu from "../../../components/menuUser/styled"
import CabeCalho from "../../../components/cabecalho/styled";


export default function Estoque(){
    return (
        <Container> 
            <Menu />
            <Conteudo>
                <CabeCalho/>
                <div className="Entract"> 
                      <Titulo nome="Movimentação de Estoque"/> 
                </div>
                    <div className="box"> 
                        <div className="code"> 
                            <div> Código Interno </div>
                            <input type="text" />
                        </div>
                        <div className="amont"> 
                            <div> Quantidade </div>
                            <input type="text" />
                        </div>
                        <div className="bus">
                            <button className="en"> Entrada </button>
                            <button className="sai"> Saída </button>
                        </div>
                    </div>
            </Conteudo>
        </Container>
    )
}