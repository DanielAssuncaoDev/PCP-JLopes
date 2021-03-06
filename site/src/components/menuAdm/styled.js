import styled from "styled-components"
import { Link, useHistory } from "react-router-dom"
import Cookie from "js-cookie"



const Conatainer = styled.div `
background-color: #17191A;
height: 100vh;
width: 16em;
a {
    text-decoration: none;
    outline: none;
    color: black;
}
.barra {
    margin-bottom: 2em;
    border: 2px solid none;
    background-color: black;
    height: 2em;
}

.box {
    margin-top: 0em;
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


    // let cookieUser = Cookie.get('User')
    let cookieAdm = Cookie.get('Adm')

    if( cookieAdm === undefined ){
        nav.push('/login')
    }

    return (
    <Conatainer>
        <div className="image">  <img src="./assets/images/removebg.png" alt="" width="250" height="220" /> </div>
        <div className="barra"></div>
        <div className="box">
            
            <Link to="/inputManager">
                <div className="n1"> 
                    <div className="b1"> </div>  
                    <div className="name">   Geren. de Entrada </div> 
                </div>
            </Link>

            <Link to="/LoginsManager">
                <div className="n2"> 
                    <div className="b1"> </div>
                    <div className="name"> Geren. de Login </div> 
                </div>
             </Link>

             <Link to="/RegisteredProducts"> 
                <div className="n3">
                    <div className="b1"> </div> 
                    <div className="name">   Produtos Cadastrados  </div>  
                </div>
            </Link>

            <Link to="/ReportsManager">
                <div className="n4">
                    <div className="b1"> </div>
                    <div className="name"> Rel??torios  </div>
                </div>
            </Link>
        </div>
    </Conatainer>
    )
}