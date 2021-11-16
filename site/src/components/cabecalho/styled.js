import { useHistory } from 'react-router-dom'
import { useState, useEffect } from  'react'
import Cookie from 'js-cookie'

import styled from "styled-components"


const ContainerCabe = styled.div `

background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
width: 81.2vw;

padding: 10px 0px;
.descri {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.descri > div {
margin-right: 17px;
}

.fot {
    margin-left: 18px;
}

img:hover {
cursor: pointer;
}

`  



export default function CabeCalho() {
    const nav = useHistory()

    const cookieUser = Cookie.get('User')
    
const [nomeUser, setNomeUser] = useState('')

useEffect( () => {
    if( JSON.parse(cookieUser).nm_usuario !== undefined ){
        let nome = JSON.parse(cookieUser).nm_usuario
        nome = nome.substring(0, nome.indexOf(' '))
        
        setNomeUser(nome)
    } else {
        setNomeUser('João Lopes')
    }
}, [] )


    return (
        <ContainerCabe>
            <div className="descri">
                <div className="fot"> <img src="./assets/images/Group.svg" alt="" /> </div>
                <div className="names"> Olá, <b>{nomeUser}</b> </div>
            </div>
            <div className="desc">
                <img src="./assets/images/sair.svg" alt="" 
                        onClick={ () => {
                                    if( cookieUser !== undefined ){
                                        Cookie.remove('User')
                                    } else {
                                        Cookie.remove('Adm')
                                    }
                                nav.push('/')

                            }
                        }
                />
            </div>
        </ContainerCabe>
    )
}