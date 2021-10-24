import { Container } from "./styled"

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import Api from '../../service/api'
const api = new Api()


export default function Login() {

const [ email, setEmail ] = useState('')
const [ senha, setSenha ] = useState('')

    let nav = useHistory()

    let cookie = Cookie.get('User')
        if(cookie !== undefined && JSON.parse(cookie).bt_ativo === true )  { 
            nav.push('/')
        }


    let Login = async() => {

        let user = await api.loginUsuario({email, senha})
        console.log(user)

            if(user.erro !== undefined){
                alert(user.erro)
                return
            } else {

                Cookie.set('User', JSON.stringify(user))

                    if(user.bt_ativo === false){
                        nav.push('/wait')
                    } else {
                        nav.push('/')
                    }
                
            }

    }

    return (
        <Container>
            {/* <Modal show={exibirModal} /> */}
            <div className="image">
                <img src="./assets/images/banner.svg" alt="" />
            </div>
            <div className="inser-info">
                <div className="message">Seja Bem-Vindo ! </div>
                <div className="emails"> Email 
                    <input type="email" 
                            value={email}
                            onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="password"> Senha 
                    <input type="password" 
                            value={senha}
                            onChange={ (e) => setSenha(e.target.value) }
                    />
                </div>
                <div className="register-but"> <button > Cadastrar-se </button></div>
                <div className="access" onClick={ () => Login() }> <button>Acessar</button> </div>
            </div>
        </Container>
    )
    
}