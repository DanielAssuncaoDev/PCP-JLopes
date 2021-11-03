// import { Link } from "react-router-dom"
import { Container } from "./styled"

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


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
    let cookieAdm = Cookie.get('Adm')

    console.log('L26 Login - ' + cookieAdm)

        if(cookie !== undefined && JSON.parse(cookie).bt_ativo === true )  { 
            nav.push('/home')

        } else if( cookieAdm !== undefined ){ 
            nav.push('/inputManager')
        }


    let Login = async() => {

        if( email === '' || senha === '' ){
            alert('Todos os campos devem estar preenchidos')
            return
        }

        let user = await api.loginUsuario({email, senha})
        let adm = await api.loginAdm({email, senha})


            confirmAlert({
                title: 'Fazer Login Como ADM?',
                message: 'Deseja fazer login no site com uma conta administrativa?',
                buttons: [
                    {
                        label: 'Sim',
                        onClick: () => {
                            if( adm.erro !== undefined ){
                                alert(adm.erro)
                                return
                            } else {

                                Cookie.set('Adm', JSON.stringify(adm))
                                nav.push('/inputManager')
                            }
                        }
                    },
                    {
                        label: 'Não',
                        onClick: () => {
                            if(user.erro !== undefined){
                                alert(user.erro)
                                return
                            } else {
                
                                Cookie.set('User', JSON.stringify(user))
                
                                    if(user.bt_ativo === false){
                                        nav.push('/wait')
                                    } else {
                                        nav.push('/home')
                                    }
                                
                            }
                        }
                    }
                ]
            })

    }

    return (
        <Container>

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
                <div className="register-but" onClick={ () => nav.push('/cadastrarse') } > <button > Cadastrar-se </button></div>

                <div className="access" onClick={ () => Login() }> <button>Acessar</button> </div>
            </div>
        </Container>
    )
    
}