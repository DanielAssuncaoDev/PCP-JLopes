
import {ConRegister, Container} from "./styled"
import Cabecalho from '../../../components/cabecalho/styled'
import Menu from '../../../components/menuUser/styled'


export default function Register() {
    return(
        <Container>
            <Menu />
            <ConRegister>
                <Cabecalho />
                <div className="box">
                    <div className="boxinput"> 
                        <div> <Inputs typee="text" nome="Nome do Produto"/> </div>
                        <div> <Inputs typee="text" nome="Cód Interno"/></div>
                    </div>
                    <div className="boxinput"> 
                        <div className="a">   <div> Categoria</div>
                                <select name="categoria" id="categoria">
                                    <option value="">Escolher</option>
                                </select> 
                        </div>
                        <div> <Inputs typee="number" nome="Estoque Minímo"/></div>
                    </div>
                    <div className="boxinput"> 
                        <div> <Inputs typee="text" nome="Valor de Custo"/> </div>
                        <div> <Inputs typee="number" nome="Estoque Atual"/></div>
                    </div>
                    <div className="boxinput"> 
                        <div className="a"> <div> Valor de Venda </div>  <input disabled value="sla"/> </div>
                        <div> <Inputs type="text" nome="Porcentagem de Lucro (%)"/></div>
                    </div>

                    <button>Cadastrar</button>
                </div>
            </ConRegister>
        </Container>
    )
}



 function Inputs(props) {
    return (
        <div>
            <div className="name">{props.nome}</div>
            <input type={props.typee} />
        </div>
    )
}