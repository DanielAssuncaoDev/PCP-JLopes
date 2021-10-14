import { Container } from "./styled"
export default function Login() {
    return (
        <Container>
            <div className="image">
                <img src="./assets/images/banner.svg" alt="" />
            </div>
            <div className="inser-info">
                <div className="message">Seja Bem-Vindo ! </div>
                <div className="emails"> Email <input type="email" /></div>
                <div className="password"> Senha <input type="password" /></div>
                <div className="register-but"> <button > Cadastrar-se </button></div>
                <div className="access"> <button>Acessar</button> </div>
            </div>
        </Container>
    )
}