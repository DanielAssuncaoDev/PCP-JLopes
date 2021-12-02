import { ContainerTable } from './styled'

export default function Table( props ){

console.log( props.registros )

    return(
        <ContainerTable>
            <thead>
                <tr>
                    {
                        props.campos.map( t => 
                            <th id={t.Id} > 
                                {t.NCampo} 
                            </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.registros.map( r =>
                        <tr>
                            { r.map( valor => 
                                    typeof(valor) !== 'object'

                                    ? 
                                        <td onDoubleClick={ () => props.Function !== '' ? props.Function(r) : '' } >
                                            {valor}
                                        </td>

                                    : 
                                        ''
                                                                
                                  
                            ) }
                             
                            {
                                props.options.lenght === 0

                                ? 
                                    ''

                                :
                                <td>
                                    <div id="ValueOption" >
                                        {props.options.map( Op =>
                                            <div onClick={ () =>  Op.Function === '' ? '' : Op.Function(r)}  >
                                                <img src={Op.img} alt="" />
                                            </div>
                                        )}
                                    </div>
                                </td>
                            }
                            
                        </tr>                        
                    )
                }
            </tbody>
        </ContainerTable>
    )
}