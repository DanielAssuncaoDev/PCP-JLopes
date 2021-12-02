import Styled from 'styled-components'


export const Container = Styled.div`
    z-index: 1;
    position: fixed;
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 20px 3px rgba( 0, 0, 0, .25 );
    min-height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    .BoxCadastrarProduto{
        background: #1C1C1D;
        padding: 2em;
        color: #FFF;
    }

    .Option{
        display: flex;
        justify-content: flex-end;

        div{
            width: 33px;
            height: 33px;
            border-radius: 50%;
        
            display: flex;
            justify-content: center;
            align-items: center;

            transition-property: all;
            transition-duration: .6s;

            &:hover{
                background: #333333;
            }
        }

    }

    .Titulo{
        display: flex;
        align-items: center;
        margin-bottom: 1.5em;

        font: 700 28px Glegoo;
    }

    .LineTitulo{
        height: 40px;
        width: 8px;
        margin-right: 8px;
        border-radius: 33px;
        background: #085C85;
    }

    .ContainerInputs{
        display: flex;
        
        .ColumnInput:nth-child(1){
            margin-right: 2em;
        }

    }

    .ColumnInput{

        div{
            display: flex;
            flex-direction: column;
            margin-bottom: 1em;

            label{
                font: 400 15px Glegoo;
                margin-bottom: 1px;
            }

            input,
            select{
                height: 30px;
                width: 260px;

                border: none;
                border-radius: 5px;
                padding-left: 10px; 
            }

        }
    }

    .BoxAddCategoria{
        margin: 0px !important;
    }
    
    .AddCategoria{
        margin: 0px !important;

        div{
            text-align: right;
            font: 700 10px Glegoo;
            margin: 0px;
            cursor: pointer;
        }    
    }

    .BoxButton{
        margin-top: 2em;
        display: flex;
        justify-content: center;

        button{
            width: 227px;
            height: 30px;

            border: none;
            border-radius: 5px;
            
            background: #085C85;
            color: #FFF;
            font: 300 16px Roboto;

            transition-property: all;
            transition-duration: .6s;

            &:hover{
                background: #1C678B;
            }
        }

    }


    @media (max-width: 653px){

        .ContainerForm{
            height: calc( 100% - 28px - 47px );
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .Titulo{
            font-size: 26px;
            margin: 0;
        }

        .BoxCadastrarProduto{
            width: 100vw;
            height: 100vh;

            padding: 1em;
        }

        .ContainerInputs{

            .ColumnInput{
                width: 50%;

                label{
                    font-size: 11px;
                }

                input,
                select{
                    width: 100%
                }
            }

            
        }

    }

`