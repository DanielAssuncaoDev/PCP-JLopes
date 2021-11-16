import { Container } from "./styled"
import { useState } from "react"
import { useHistory } from 'react-router-dom'

import Cookie from 'js-cookie'

import Api from '../../service/api'
const api = new Api()

export default function Login() {

const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')

let nav = useHistory()

let cookie = Cookie.get('User')
    if(cookie !== undefined && JSON.parse(cookie).bt_ativo === true){    
        nav.push('/home')
    } 
    let CadastrarUsuario = async() => {
        let user = await api.cadastarUsuario({nome, email, senha})

            if( user.erro !== undefined )
            {
                alert(user.erro)
            } else {
                alert('Cadastro criado!')
                Cookie.set('User', JSON.stringify(user))
                nav.push('/wait')
            }
    }
    


    return (
        <Container>
            <div className="image">
                <img src="./assets/images/banner.svg" alt="" />
            </div>
            <div className="inser-info">
                <div className="Form">
                    <div className="message"> Cadastrar-se </div>
                        <div className="FormCadastarse" >
                            <div className="names"> 
                                <div> Nome Completo </div> 
                                <input type="name" id="name" name="name" 
                                            value={nome}
                                            onChange={ (e) => {
                                                    setNome(e.target.value)
                                                }
                                            }
                                /> 
                            </div>
                            <div className="credenciais">
                                <div className="email">
                                    <div> Email  </div> 
                                    <input type="email" id="email" name="email" 
                                                value={email}
                                                onChange={ (e) => {
                                                        setEmail(e.target.value)
                                                    } 
                                                }
                                    /> 
                                </div>
                                    <div className="password"> 
                                        <div> Senha </div> 
                                        <input type="password" id="password" name="password"
                                                    value={senha}
                                                    onChange={ (e) => {
                                                            setSenha(e.target.value)
                                                        } 
                                                    }
                                        />
                                    </div>

                            </div>

                            <div className="fazerLogin">
                                <label> Já tem uma conta? </label>
                                <label onClick={ () => nav.push('/login') } > Fazer Login  </label>
                            </div>
                            
                            <div className="access"> <button onClick={() => CadastrarUsuario()} >Acessar</button> </div>
                        </div>
                    </div>
                </div>
        </Container>
    )
}