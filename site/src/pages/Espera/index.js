
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import Cookie from 'js-cookie'

import Api from '../../service/api'
const api = new Api()

export default function(){


    useEffect( () => {
        gerenciarLogin()
    }, [] )

    let nav = useHistory()

        async function gerenciarLogin (){
            let cookie = JSON.parse(Cookie.get('User'))

            let user = await api.gerenciarLogin(cookie.id_usuario)

            console.log(user)

            if(user.bt_ativo === true){
                // nav.push({
                //     path: '/',
                //     state: cookie
                // })
                nav.push('/')
                // alert('Caiu aqui poxa')
            }

        }
    return(
        <div>
            <h1>
                Aquieta o facho pangaré, quando o ADM aceitar tu entra
            </h1>
        </div>
    )
}