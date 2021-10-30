import Cookies from "js-cookie"
import styled from "styled-components"
import { useHistory } from 'react-router-dom'

import Cookie from 'js-cookie'


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

    let nav = useHistory()

    let cookieUser = Cookie.get('User')
    let cookieAdm = Cookie.get('Adm')
    

    return (
        <ContainerCabe>
            <div className="descri">
                <div className="fot"> <img src="./assets/images/Group.svg" alt="" /> </div>
                <div className="names"> Olá, João Lopes </div>
            </div>
            <div className="desc">
                <img src="./assets/images/sair.svg" alt="" 
                        onClick={ () => {
                                    if( cookieUser !== undefined ){
                                        Cookie.remove('User')
                                    } else {
                                        Cookie.remove('Adm')
                                    }
                                nav.push('/login')

                            }
                        }
                />
            </div>
        </ContainerCabe>
    )
}