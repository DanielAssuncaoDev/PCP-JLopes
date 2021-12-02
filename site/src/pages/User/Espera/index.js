
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'


import Cookie from 'js-cookie'
import { Container } from './styled'

import Api from '../../../service/api'
const api = new Api()

export default function Espera(){
    let nav = useHistory()

    // async function GerenciarUser (){
    //     let cookie = JSON.parse(Cookie.get('User'))

    //     let user = await api.gerenciarLogin(cookie.id_usuario)
    //     if(user.bt_ativo === true){
    //         Cookie.set('User', JSON.stringify(user) )
    //         nav.push('/List')
    //     }

    // }

    useEffect( () => {
        async function GerenciarUser (){
            let cookie = JSON.parse(Cookie.get('User'))
    
            let user = await api.gerenciarLogin(cookie.id_usuario)
            if(user.bt_ativo === true){
                Cookie.set('User', JSON.stringify(user) )
                nav.push('/List')
            }
    
        }

        GerenciarUser()
    }, [nav] )


       
    return(
        <Container>
            <div className="ContainerText" >
                <div className="ButtonVoltar"> 
                    <div onClick={ () => nav.push('/') } >
                        <img src="/assets/images/Arrow-Back.svg" alt="" />
                    </div>
                </div>
                <div className="BoxText">
                    <div className="Titulo" >
                        <div className="LineTitulo" >
                        </div> 
                        <div>Aguardando <span> Aprovação! </span> </div> 
                    </div>
                    <div className="Text">
                        Sua solicitação de Cadastro foi enviada para o administrador. Você será redirectionado assim que sua solicitação for aprovada.
                    </div>
                </div>
            </div>
            <div className="Logo" >
                <img src="/assets/images/LogoPJL.svg" alt="" />
            </div>
        </Container>
    )
}
