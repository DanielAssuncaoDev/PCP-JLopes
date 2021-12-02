import styled from "styled-components";

const Container = styled.div `

    display: flex;

    .BoxLeft{
        width: 50%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        position: sticky;
        top: 0px;

        background: #17191A;
        box-shadow: 17px 0px 25px rgba(0, 0, 0, 0.35);
        border-radius: 0px 5vh 5vh 0px;


        img{
            max-width: 475px;
            width: 55%;
        }

    }
    

    .BoxRight{
        width: 50%;
        min-height: 100vh;
        padding: 3em 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .ButtonVoltar{

        width: 100%;
        padding: 0 5em;
        margin-bottom: 2em;
        
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

    .BoxLogin{
        width: 425px;
        height: 520px;

        padding: 1em 2em;

        border: 3px solid #17191A;
        box-shadow: 6px 5px 10px rgba(0, 0, 0, 0.3);
        border-radius: 15px;

        transition-property: all;
        transition-duration: .5s;
          
        &:hover{
            box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);

        }

    }

    .TitleBox{
        font: 400 45px Glegoo;
    }

    .FormLogin{
        height: calc( 100% - 80px);
        display: flex;
        flex-direction: column;
        justify-content: center;

        input{
            height: 40px;
            width: 100%;
            padding-left: 1em;
            margin-top: 10px;

            font: 700 15px Glegoo;
            color: #17191A;
            border: 1.5px solid #17191A;
            border-radius: 10px;

            transition-property: all;
            transition-duration: .3s;

            &:hover{
                box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);

            }

        }

    }
    
    .LabelCadastrarse{
        text-align: right;
        display: flex;
        flex-direction: column;

        margin: 1em 0;
        font: 700 15px Glegoo;

        span:nth-child(2){
            color: #085C85;
        }

    }

    .ButtonLogin{

        button{
            height: 40px;
            width: 100%;

            border: none;
            border-radius: 10px;

            font: 700 16px Glegoo;
            color: #FFFFFF;
            background: #085C85;

            transition-property: all;
            transition-duration: .3s;

            &:hover{
                box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.4);
                background: #2C6683;
            }

        }
    }

    @media (max-width: 900px){

        .BoxLeft{
            display: none;
        }

        .BoxRight{
            width: 100%;
        }

    }
    @media (max-width: 470px){

        .BoxRight{
            padding: 1.5em;
        }

        .BoxLogin{
            width: 100%;
        }

        .ButtonVoltar{
            padding: 0;
        }
    }
    @media (max-width: 400px){

        .TitleBox{
            font-size: 35px;
        }

        .BoxLogin{
            height: 415px;
            padding: 1em;
        }

        .LabelCadastrarse{
            font-size: 13px;
        }


    }
`

export {Container}