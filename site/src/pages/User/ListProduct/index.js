import { Listar, Container } from "./styled"
import { useState } from "react"


import Titulo from "../../../components/user-titulo/styled"
import Pesquisar from "../../../components/pesquisar/styled"
import Button from "../../../components/button-filtrar/button-filtro"
import Inputs from "../../../components/button-filtrar/inputs"
import Menu from "../../../components/menuUser/styled"


export default function ListarProduto() {

    const [Filtros, setFiltros] = useState(false);


    function listar() {
        setFiltros(true)  
        onclick="select"
    }

    function remover(){
        setFiltros(false)
    }

    return (
        <Container>
             <Menu/>
            <Listar> 
                <div className="product">
                    <Titulo nome="Listar Produtos" />
                </div> 
                <div className="filter">
                    <div style={{marginRight: '5em'}}> <Pesquisar /> </div>
                    <div onclick={listar}>  <Button/> </div>
                </div>
            
                <div className="table">
                    
                    <thead>
                        <th> Nome </th>
                        <th> Categoria </th>
                        <th> Código </th>
                        <th> Qtd. Minima</th>
                        <th> Qtd. Atual </th>
                        <th> VL Custo </th>
                        <th> VL Venda</th>
                        <th>Data Cadast.</th>
                        <th className="b"></th>
                        <th className="a"></th>


                    </thead>
                    <tbody>
                    <tr>
                        <td> Cadeira Gamer</td>
                        <td> Cadeira </td>
                        <td> 690888999</td>
                        <td>4</td>
                        <td>5</td>
                        <td>R$: 150,00</td>
                        <td>R$: 450,00</td>
                        <td> 22/22/2222</td>
                        <td> <img src="./assets/images/editar (1) 5.svg" alt=""/></td>
                        <td> <img src="./assets/images/Vector.svg" alt=""/></td>
                    </tr>
                </tbody>
                </div>
                <div className="add">
                    <button> Adicionar </button>
                </div>
                <div className="bandeiras">
                     
                     {Filtros &&
                         <Inputs onClick={listar} />
                     }
                     
                

                 </div>
            </Listar>
        </Container>
       
        )
    }