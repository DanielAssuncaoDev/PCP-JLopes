import { Container } from './styled'
import Menu from '../menu/index'

import Cookie from 'js-cookie'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

export default function Cabecalho( props ){

const [ menu, setMenu ] = useState(false)

    const nav = useHistory()
    let CookieUser = Cookie.get('User')
    let CookieAdm = Cookie.get('Adm')

    if(CookieUser === undefined && CookieAdm === undefined)
        nav.push('/login')
    else{
        if ( CookieUser !== undefined )
            CookieUser = JSON.parse(CookieUser)
        else
            CookieAdm = JSON.parse(CookieAdm)
    } 

    

    function ExibirMenu(){

        if( menu === false )
            setMenu(true)
        else
            setMenu(false)

    }

    function Exit(){
        nav.push('/')
        Cookie.remove('User')
        Cookie.remove('Adm')
    }
    
    return(
        <Container>
            <div className="Box-SejaBemVindo">
                Seja Bem-Vindo <span> { CookieUser !== undefined ? CookieUser.nm_usuario : 'Administrador'} </span> 
            </div>

            <div className="Options" >
                {
                    props.OptionsNav.map( (Op) =>
                        <div onClick={ () =>  Op.function !== '' ? Op.function() : '' } className={Op.class}>
                            {Op.nome}
                        </div>
                    )
                }
                
            </div>

            <div className="Box-Exit" >
                <div onClick={ () => Exit() } id="Exit">
                    <img src="/assets/images/Exit.svg" alt="" />
                </div>
                <div id="Menu" >
                    <img onClick={ () => ExibirMenu() } id="Menu" src="/assets/images/Menu.svg" alt="" />
                </div>
            </div>

            {
                menu === true

                ?
                    <Menu OptionsNav={props.OptionsNav} Exit={Exit} />

                :
                    ''


            }

        </Container>
    )
}