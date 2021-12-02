import Styled from 'styled-components'


export const Container = Styled.div`

    padding-bottom: 3em;

    .ContainerDesc{
        padding: 3em 3em;
    }

    .Titulo{
        display: flex;
        align-items: center;

        font: 700 35px Glegoo;
    }

    .LineTitulo{
        height: 45px;
        width: 8px;
        margin-right: 8px;
        border-radius: 33px;
        background: #085C85;
    }

    .FiltrosSimples{
        display: flex;
        flex-wrap: wrap;
        margin-top: 2em;

    }

    .InputFiltrar{
        display: flex;
    }

    .InputFiltrar input{
        height: 33px;
        border: 1px solid #17191A;
        width: 500px;
        /* max-width: 500px; */
        border-radius: 1vh;
        padding-left: 12px;
        box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);

        font: 400 14px Roboto;
        color: #17191A;

        transition-property: all;
        transition-duration: .5s;

        &:hover{
            box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.4);
        }
    }

    .Lupa{
        display: flex;
        justify-content: center;
        align-items: center;

        height: 33px;
        width: 33px;
        margin-left: -30px;
        border-radius: 5px;
        background: #17191A;

        img{
            height: 17px;
            width: 17px;
        }

    }


    .ButtonFiltro{
        margin-left: 3em;

        button{
            border: none;
            background: #17191A ;
            border-radius: 33px;
            color: #FFF;
            font: 300 15.5px Roboto;

            height: 33px;
            width: 180px;
            box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
            
            transition-property: all;
            transition-duration: .6s;

            &:hover{
                box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.4);
                background-color: #333333;
            }
        }

    }

    .ContainerFiltroAvancado{
        padding: 1em 3em;
    }

    .ContainerTable{
        margin-top: 1em;    
        padding: 1em;        

        width: 100%;
    }


    @media (max-width: 827px) {
        .FiltrosSimples{
            flex-direction: column;
        }

        .InputFiltrar input{
            width: 100%;
        }

        .ButtonFiltro{
            margin: 15px 0;
        }

        .ContainerTable{
            overflow: scroll;
        }
    }


    @media (max-width: 550px) {
        .ContainerDesc{
            padding: 2em 1em ;
        }

        .Titulo{
            font-size: 30px;
        }

        .ContainerFiltroAvancado{
            padding: 1em;
        }

    }

`

