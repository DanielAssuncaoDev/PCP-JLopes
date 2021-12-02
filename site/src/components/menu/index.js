import { Container } from './styled'

export default function Menu( props ){

    return(
        <Container>
            <div className="BoxLogo">
                <img src="/assets/images/LogoPJL.svg" alt="" />
            </div>
            <div className="Space">

            </div>
            <div className="OptionsMenu">
            {
                    props.OptionsNav.map( (Op) =>
                        <div onClick={ () =>  Op.function !== '' ? Op.function() : '' } className={Op.class}>
                            {Op.nome}
                        </div>
                    )
                }
            </div>
            <div className="BoxExit">
                <div onClick={ () => props.Exit() } >
                    <img src="/assets/images/Exit.svg"alt="" />
                </div>
            </div>
        </Container>
    )
}