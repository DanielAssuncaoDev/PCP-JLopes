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

                <div className="image1"> <img src="./assets/images/Img-Graficos.png" alt="" width="700" /> </div>
            </div>
        </Container>
    )

}