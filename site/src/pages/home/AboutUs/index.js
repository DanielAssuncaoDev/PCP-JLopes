import { Container } from "./styled";
import CabeCalho from "../../../components/cabecalhoInicio/styled";



export default function About() {
    return (
        <Container>
            <CabeCalho />
            <div className="content">
                <div className="title-box"> 
                    <div className="title"> Sobre Nós </div>
                    <div className="description"> O  Sistema JPL foi desenvolvido para ser o tomador de decisão do seu negócio, sendo um sistema  para sua loja (física ou virtual). Com controle total sobre estoque, produtos e administrativo,  tudo isso de maneira extremamente simples e prática, esse programa garantirá o desenvolvimento e crescimento da sua empresa.</div>
                </div>
                <div className="imagem"> 
                    <img src="./assets/images/computers.png" alt="" width="600" />
                </div>
            </div>

        </Container>
    )

}