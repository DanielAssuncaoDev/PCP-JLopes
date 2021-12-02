import styled from "styled-components";

const Container = styled.div `

    
.ButtonVoltar{

width: 100%;
padding: 0em;
margin-bottom: 1em;

div{
    height: 40px;
    width: 40px;
    background: #17191A;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);

    transition-property: all;
    transition-duration: .3s;

    &:hover{
        background: #393C3E;
        box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.3);

    }

    img{
        height: 26px;
    }

}

}

    .ContainerText{
        height: 60vh;
        padding: 1em 2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .BoxText{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Titulo{
        display: flex;
        align-items: center;
        margin-bottom: 1.5em;

        font: 700 3.2em Glegoo;
        color: #17191A;

        span{
            color: #085C85;
        }

    }

    .LineTitulo{
        height: 60px;
        width: 8px;
        margin-right: 15px;
        border-radius: 33px;
        background: #085C85;
    }

    .Text{
        width: 100%;
        max-width: 1000px;
        font-size: 1.4em;
        text-align: center;
    }

    .Logo{
        height: 40vh;
        background: #17191A;
        border-radius: 50px 50px 0px 0px;
        box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            height: 90%;
        }
    }

    @media (max-width: 800px){
        .Titulo{
            font-size: 2.9em;
        }
    }

    @media (max-width: 660px){
        .Titulo{
            font-size: 2.1em;
        }
        .LineTitulo{
            height: 40px;
        }

        .Text{
            font-size: 1.3em;
            text-align: left;
        }
    }

    @media (max-width: 500px){

        .ContainerText{
            padding: 1.5'em;
        }

        .Titulo{
            font-size: 1.9em;
            line-height: 42px;

        }

        .LineTitulo{
            height: 55px;
        }

        .Text{
            font-size: 1.1em;
        }
    }

    /* @media (max-width: 500px){
        .Titulo{
            font-size: 1.9em;
        }

        .Text{
            font-size: 1em;
        }
    } */

`
export {Container}