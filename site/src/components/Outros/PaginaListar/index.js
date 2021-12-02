import { Container } from "./styled"

import Table from '../../../components/Table/index'
import FiltroAvancado from '../../../components/FiltroAvancado/index'


export default function PaginasListar( props ){

    function ExibirFiltroAvancado() {
        if(props.FiltroSimples.FiltrosAvancado === true){
            props.FiltroSimples.setFiltrosAvancado(false);
            // console.log(props.FiltrosAvancado.Buttons)
        }
        else {
            props.FiltroSimples.setFiltrosAvancado(true)
        }
    }

    return(
        <Container>
            <div className="Conteudo" >
                <div className="ContainerDesc" >
                    <div className="Titulo">
                        <div className="LineTitulo" ></div>
                        {props.TituloPagina}
                    </div>

                    <div className="FiltrosSimples">

                        <div className="InputFiltrar" >
                            <input placeholder={props.FiltroSimples.label}
                                value={props.FiltroSimples.filtro} onChange={ (e) => props.FiltroSimples.setFiltro(e.target.value) }
                             />
                            <div className="Lupa" > <img src="/assets/images/Lupa.svg" alt="" /> </div>
                        </div>

                        {
                            props.FiltroSimples.FiltrosAvancado !== null

                            ?
                                <div className="ButtonFiltro" >
                                    <button onClick={ () => ExibirFiltroAvancado() } >
                                        { props.FiltroSimples.FiltrosAvancado === false ? 'Busca Avançada' : 'Esconder' }
                                    </button>
                                </div>

                            :
                                ''
                        }
                        
                        
                    </div>
                </div>

                {
                    props.FiltroSimples.FiltrosAvancado === true

                    ?
                        <div className="ContainerFiltroAvancado">
                            <FiltroAvancado 
                                Inputs={
                                    props.FiltrosAvancado.Inputs
                                }
                                Buttons={
                                    props.FiltrosAvancado.Buttons
                                }
                            />
                        </div>

                    :
                        ''

                }

                


                <div className="ContainerTable" >
                    <Table
                        campos={
                            props.Table.campos
                        }
                        registros={
                            props.Table.registros   
                        }
                        options={
                            props.Table.options
                        }
                        Function={
                            props.Table.Function
                        }
                    />
                </div>
            </div>
        </Container>
    )
}