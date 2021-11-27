import { Container } from "./styled";

import { useHistory } from 'react-router-dom'

export default function Home() {

const nav =  useHistory()

    return (
        <Container>
            <div className="track1">
                <div className="title1"> <span>Automatize</span> Operações e garanta <span>Produtividade</span> na gestão de armazenamento</div>

                <div className="butonsHome" >
                    <button onClick={ () => nav.push('/login') } > Entrar </button>
                    <button onClick={ () => nav.push('/cadastrarse') } > Cadastrarse </button>
                </div>

                <div className="image1"> <img src="./assets/images/ground.png" alt="" width="700" /> </div>
            </div>
            <div className="track2">
                <div className="title2"> <span>Aumente a eficiência da sua armazenagem </span> e garanta agilidade na movimentação de mercadorias</div>
                <div className="cards"> 
                    <div className="card1"> 
                        <div className="log"> <img src="./assets/images/unnamed 1.png" alt="" width="130"/> </div>
                        <div className="title"> Controle de Estoque </div>
                        <div className="description">Através de nosso Cadastro Rápido você gerencia a entrada e saída de serviços e produtos de seu estoque sem complicações e sem perda de tempo. </div>
                    </div>
                    <div className="card1"> 
                        <div className="log"> <img src="./assets/images/produtos-serviços 1.png" alt="" width="290"/> </div>
                        <div className="title"> Controle de Orçamentos </div>
                        <div className="description">  Com nossa tecnologia de Cadastro Rápido você gerencia a entrada e saída de produtos e serviços sem complicações e sem perda de tempo. </div>
                    </div>
                    <div className="card1"> 
                        <div className="log"> <img src="./assets/images/kisspng-reset-download-clip-art-restart-png-photos-5a758941b92ea7 2.png" alt="" width="150"/></div>
                        <div className="title"> Sugestões </div>
                        <div className="description"> Conte com nosso sistema de Reposição de mercadoria Sendo fundamental buscar a perfeição durante a realização dessa atividade, evitando problemas como as rupturas e as perdas de produtos da loja. </div>
                    </div>
                </div>
            </div>
            <div className="track3">
                <div className="title3"> Gerencie os recebimentos e acompanhe toda a movimentação de entrada dos produtos </div>
                <div className="box-track"> 
                    <div className="box-titles"> 
                        {/* <ul>
                            <li>  O sistema de fluxo de caixa é simples e não toma tempo. Para utilizar não é necessário possuir conhecimentos avançados em informática.  </li>
                            <li> O sistema mostra relatórios que vão direto ao ponto e ajudam o empreendedor a entender o que está acontencendo em diversos setores de sua empresa. </li>
                            <li> Confira em tempo real o histórico das movimentações de seu estoque.  </li>
                            <li> Entenda quais são os produtos e serviços com maior saída e quais não estão vendendo muito. </li>
                        </ul> */}
                        <div className="box-captions">
                            <div className="bord"> </div>
                            <div className="caption"> O sistema de fluxo de caixa é simples e não toma tempo. Para utilizar não é necessário possuir conhecimentos avançados em informática. </div>
                        </div>
                        <div className="box-captions">
                            <div className="bord"> </div>
                            <div className="caption">  O sistema mostra relatórios que vão direto ao ponto e ajudam o empreendedor a entender o que está acontencendo em diversos setores de sua empresa. </div>
                        </div>
                        <div className="box-captions">
                            <div className="bord"> </div>
                            <div className="caption"> Confira em tempo real o histórico das movimentações de seu estoque.  </div>
                        </div>
                        <div className="box-captions">
                            <div className="bord"> </div>
                            <div className="caption"> Entenda quais são os produtos e serviços com maior saída e quais não estão vendendo muito. </div>
                        </div>
                    </div>
                     <div className="images-box">  <img src="./assets/images/viu.png" alt="" width="450" height="420" /></div>
                </div>
            </div>
        </Container>
    )

}