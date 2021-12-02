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
    padding: 1em;

    .BoxControleEstoque{
        border-radius: 10px;
        width: 100%;
        max-width: 634px;
        height: 465px;

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

    .Input{
        display: flex;
        flex-direction: column;
        align-items: center;


        label{
                font: 400 15px Glegoo;
                margin-bottom: 1px;
            }

            input{
                height: 30px;
                width: 100%;
                max-width: 327px;
   
                border: none;
                border-radius: 5px;
                padding-left: 10px; 
            }

        }
    }

    .Input:nth-child(2){

        margin: 1em;

        input{
            width: 190px;
            text-align: center;
        }

    }

    .Buttons{
        display: flex;
        justify-content: center;
        margin-top: 2em;

        button{
            margin: 0 10px;
            border: none;
            border-radius: 5px;

            width: 150px;
            height: 33px;
            font: 700 15px Glegoo;
            color: #FFF;
            transition-property: all;
            transition-duration: .2s;
            
            &:nth-child(1){
                background: #D11C1C;

                &:hover{
                    background: #DA3A3A
                }
            }
            &:nth-child(2){
                background: #00923A;

                &:hover{
                    background: #269F56
                }
            }
        }
    }



@media ( max-width: 400px ){
    .Titulo{
        font-size: 20px;
    }

    .LineTitulo{
        height: 30px;
    }
}

`