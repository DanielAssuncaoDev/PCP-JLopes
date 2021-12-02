import { Container } from "./styled"

import { useHistory } from 'react-router-dom'


export default function Acessar( props ) {

const nav = useHistory() 

    return (
        <Container>
            <div className="BoxLeft">
                <img src="/assets/images/LogoPJL.svg" alt="" />
            </div> 

            <div className="BoxRight">
                <div className="ButtonVoltar"> 
                    <div onClick={ () => nav.push('/') } >
                        <img src="/assets/images/Arrow-Back.svg" alt="" />
                    </div>
                </div>

                <div className="BoxLogin">
                    <div className="TitleBox">
                        {props.Titulo}
                    </div>

                    <div className="FormLogin">
                        <div className="InputsLogin">
                            {
                                props.Inputs.map( (Input) => 
                                    <div>
                                        <input placeholder={Input.label} type={Input.type} 
                                            value={Input.value} 
                                                onChange={ (e) => Input.setValue(e.target.value) }  
                                        />
                                    </div>
                                )
                            }
                        </div>

                        <div className="LabelCadastrarse">
                            <span> {props.LabelPush.Query} </span>
                            <span onClick={ () => nav.push(props.LabelPush.Path) } > 
                                { props.LabelPush.LinkText } 
                            </span>
                        </div>

                        <div className="ButtonLogin">
                            <button onClick={ () => props.Button.Function() } >
                                { props.Button.Text }
                            </button>
                        </div>

                    </div>
                    
                </div>

            </div>
        </Container>
    )
    
}

