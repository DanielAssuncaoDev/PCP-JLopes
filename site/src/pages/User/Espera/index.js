
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import Cookie from 'js-cookie'

import Api from '../../../service/api'
import { Container } from './styled'
const api = new Api()

export default function(){


    useEffect( () => {
        gerenciarLogin()
    }, [] )

    let nav = useHistory()

        async function gerenciarLogin (){
            let cookie = JSON.parse(Cookie.get('User'))

            let user = await api.gerenciarLogin(cookie.id_usuario)
            if(user.bt_ativo === true){
                nav.push('/home')
            }

        }
    return(
        <Container>
            <div className="box-titles">
                <div className="aprov"> <div> </div>   <h4>Aguardando Aprovação !</h4> </div>
                
                <h6>Sua solicitação de Cadastro foi enviada para o administrador. Você será redirectionado assim que sua solicitação for aprovada.</h6>
            </div>
            <div className="image">
                <img src="./assets/images/banner.svg" alt=""  width="660"/>
            </div>
        </Container>
    )
}