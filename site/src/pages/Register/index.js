import ComponentCadastrarse from '../../components/Outros/Acessar/index'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                toast.error(user.erro)
            } else {
                toast.success('Cadastro criado!')
                Cookie.set('User', JSON.stringify(user))
                nav.push('/wait')
            }
    }
    


    return (
    <div>
        <ToastContainer /> 
        <ComponentCadastrarse 
            Titulo="Cadastrar-se"
            Inputs={[
                {
                    label: "Nome Completo",
                    type: "text",
                    value: nome,
                    setValue: setNome
                },
                {
                    label: "Email",
                    type: "email",
                    value: email,
                    setValue: setEmail
                },
                {
                    label: "Senha",
                    type: "password",
                    value: senha,
                    setValue: setSenha
                }
            ]}
            LabelPush={
                {
                    Query: "Já tem uma conta?",
                    LinkText: "Fazer Login",
                    Path: "/login"
                }
            }
            Button={
                {
                    Text: "Cadastrar-se",
                    Function: CadastrarUsuario
                }
            }
        />
    </div>
    )
}