import { ContainerEscolherLogin } from './styled'
import ComponentLogin from '../../components/Outros/Acessar/index'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react'
import {useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

import Api from '../../service/api'
const api = new Api()


export default function Login() {

const [ email, setEmail ] = useState('')
const [ senha, setSenha ] = useState('')

const [ loginUser, setLoginUser ] = useState(null)

    let nav = useHistory()

    let cookie = Cookie.get('User')
    let cookieAdm = Cookie.get('Adm')

    // Cookie.remove('User')


        if(cookie !== undefined && JSON.parse(cookie).bt_ativo === true )  { 
            nav.push('/List')

        } else if( cookieAdm !== undefined ){ 
            nav.push('/inputManager')
        }


    let Login = async() => {

        if( email === '' || senha === '' ){
            toast.error('Todos os campos devem estar preenchidos')
            return
        }

        if ( loginUser === true ){
            let user = await api.loginUsuario({email, senha})

                if(user.erro !== undefined){
                    toast.error(user.erro)
                } else{
                    Cookie.set('User', JSON.stringify(user) )
                    nav.push('/wait')
                }

        } else if ( loginUser === false ){
            let adm = await api.loginAdm({email, senha})

            if(adm.erro !== undefined){
                toast.error(adm.erro)
            } else{
                Cookie.set('Adm', JSON.stringify(adm))
                nav.push('/LoginsManager')

            }

        }



    }

    return (
        <div>
            <ToastContainer />

            {
                loginUser === null

                ?
                    <ContainerEscolherLogin>
                        <div className="BoxLogin">
                            <div className="Titulo">
                                <div className="LineTitulo" ></div>
                                Fazer Login Como?
                            </div>
                            <div className='Buttons'>
                                <button onClick={ () => setLoginUser(false) } > Administrador </button>
                                <button onClick={ () => setLoginUser(true) } > Usuário </button>
                            </div>
                        </div>
                    </ContainerEscolherLogin>

                :
                    <ComponentLogin 
                        Titulo="Fazer Login"
                        Inputs={[ 
                            {
                                label: 'Email',
                                type: 'email',
                                value: email,
                                setValue: setEmail
                            },
                            {
                                label: 'Senha',
                                type: 'password',
                                value: senha,
                                setValue: setSenha
                            }
                        ]}
                        LabelPush={
                            {
                                Query: 'Já tem uma conta?',
                                LinkText: 'Cadastrar-se',
                                Path: '/cadastrarse'
                            }
                        }
                        Button={
                            {
                                Function: Login,
                                Text: 'Entrar'
                            }
                        }
                    />

            }

        </div>
        
    )
    
}

