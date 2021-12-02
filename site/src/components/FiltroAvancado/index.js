import { ContainerFiltro } from './styled'


export default function FiltroAvancado( props ){

    return(
        <ContainerFiltro>
            <div className="ContainerInputs">
                {
                    props.Inputs.map( i =>
                        <div>
                            <label> {i.Label} </label>
                            <input type={i.Type}
                                value={i.Value} onChange={ (e) => i.SetValue(e.target.value) }    
                            />
                        </div>    
                    )
                }
            </div>
            <div className="ContainerButtons">
                {
                    props.Buttons.map( b =>
                        <button onClick={ () => b.Function() } >
                            {b.Label}
                        </button>    
                    )
                }
            </div>
        </ContainerFiltro>
    )
}