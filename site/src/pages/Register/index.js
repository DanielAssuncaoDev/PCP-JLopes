import { Container } from "./styled"
export default function Login() {
    return (
        <Container>
            <div className="image">
                <img src="./assets/images/banner.svg" alt="" />
            </div>
            <div className="inser-info">
                <div className="message"> Cadastra-Se </div>
                <div className="names"> <div> Nome Completo </div> <input type="name" id="name" name="name" /> </div>
                <div className="email"> <div> Email  </div> <input type="email"id="email" name="email" />  </div>
                <div className="box-input1"> 
                    <div className="turma"><div> Turma </div> <input type="name" />  </div>
                    <div className="password"> <div> Senha </div> <input type="password" id="password" name="password"/></div>
                </div>
                <div className="access"> <button>Acessar</button> </div>
            </div>
        </Container>
    )
}