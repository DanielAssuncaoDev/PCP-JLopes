import styled from "styled-components"
import { Link, useHistory } from "react-router-dom"
import Cookie from "js-cookie"


const Conatainer = styled.div `
background-color: #17191A;
height: 100vh;
width: 16em;

a{
    text-decoration: none;
    outline: none;
    color: black;
}
.barra {
    margin-top: 3em;
    border: 2px solid none;
    background-color: black;
    height: 2em;
}

.box {
    margin-top: 5em;
}

.n1, .n2, .n3, .n4 {
        background-color: white;
        display: flex;
        margin-bottom: 20px;
        height: 3.4em;
        cursor: pointer;

        &:hover {
            background-color: #33E4FC;
            .b1 {
                background-color: red;

            }       
         }

       
}

.b1 {
    border: 2px solid none;
    background-color: #0064FB;
    
    width: .5em;
  
}

.name {
    margin: 17px 0px 0px 20px;
    }
`


export default function Menu(Props) {

const nav = useHistory()

let cookieUser = Cookie.get('User')
console.log(cookieUser)
    // let cookieAdm = Cookie.get('Adm')
    if( cookieUser === undefined || JSON.parse(cookieUser).bt_ativo === false  ){
        nav.push('/login')
    }

    return (
    <Conatainer>
        <div className="image"> </div>
        <div className="barra"></div>
        <div className="box">
            
            <Link to="/Register">
                <div className="n1"> 
                    <div className="b1"> </div>  
                    <div className="name">   Cadastrar Produtos </div> 
                </div>
            </Link>

            <Link to="/List">
                <div className="n2"> 
                    <div className="b1"> </div>
                    <div className="name"> Listar Produtos </div> 
                </div>
             </Link>

             <Link to="/Movement"> 
                <div className="n3">
                    <div className="b1"> </div> 
                    <div className="name">  Movimentação de Estoque  </div>  
                </div>
            </Link>

            <Link to="/Replacement">
                <div className="n4">
                    <div className="b1"> </div>
                    <div className="name"> Sugestão de Reposição  </div>
                </div>
            </Link>
        </div>
    </Conatainer>
    )
}