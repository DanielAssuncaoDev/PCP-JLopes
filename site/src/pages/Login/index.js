import { Container } from "./styled"
import Modal from '../../components/Modals/Categoria/styled'
import { useState } from "react";
export default function Login() {
    const [exibirModal, setExibirModal] = useState({show: false});


    return (
        <Container>
            <Modal show={exibirModal} />
            <div className="image">
                <img src="./assets/images/banner.svg" alt="" />
            </div>
            <div className="inser-info">
                <div className="message">Seja Bem-Vindo ! </div>
                <div className="emails"> Email <input type="email" /></div>
                <div className="password"> Senha <input type="password" /></div>
                <div className="register-but"> <button > Cadastrar-se </button></div>
                <div className="access"> <button onClick={( ) => setExibirModal({show: true})} >Acessar</button> </div>
            </div>
        </Container>
    )
}