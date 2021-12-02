import Styled from 'styled-components'

export const ContainerEscolherLogin = Styled.div`

background: #17191A;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding: 1.5em;

    .BoxLogin{
        width: 100%;
        max-width: 491px;
        height: 250px;
        background: #FFF;
        padding: 1.5em;
        border-radius: 10px;
        box-shadow: inset 10px 8px 10px rgba(0, 0, 0, 0.4);

    }

    .Titulo{
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        font: 700 35px Glegoo;
    }

    .LineTitulo{
        height: 50px;
        width: 8px;
        margin-right: 8px;
        border-radius: 33px;
        background: #085C85;
    }

    .Buttons{
        margin-top: 2em;
        height: calc( 100% - 50px );
        display: flex;
        justify-content: space-around;
        align-items: center;

        button{
            border: none;
            height: 35px;
            width: 49%;
            max-width: 208px;
            border-radius: 33px;
            font: 700 16px Glegoo;
            color: #FFF;
            background: #17191A;
            box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);

            transition-property: all;
            transition-duration: .4s;

            &:hover{
                background: #333333;
                box-shadow: 5px 6px 8px rgba(0, 0, 0, 0.3);

            }
        }
    }


    @media (max-width: 450px){

        .Titulo{
            font-size: 24px;
        }
        .LineTitulo{
            display: none;
        }
        
        .Buttons{
            height: calc( 100% - 96px );

        }

        .Buttons button{
            font-size: 12px;
        }

    }

`