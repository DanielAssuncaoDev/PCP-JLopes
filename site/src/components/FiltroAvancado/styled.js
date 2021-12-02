import Styled from 'styled-components'

export const ContainerFiltro = Styled.div`

    width: 100%;
    /* height: 230px; */
    display: flex;
    flex-wrap: wrap;
    padding: calc(2em - 20px) 2em 2em 2em;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);

    .ContainerInputs{
        width: 675px;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        div{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-top: 15px;
        
            label{
                font: 400 14px Glegoo;
            }

            input{
                height: 33px;
                width: 247px;
                padding-left: 10px;
                
                border: 1px solid #17191A;
                border-radius: 5px;
                box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
            
                transition-property: all;
                transition-duration: .5s;

                &:hover{
                    box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
                }
            }
        }

    }

    .ContainerButtons{  
        margin-left: 3em;
        display: flex;
        align-items: flex-end;

        button{
            border: none;
            background-color: #085C85;
            color: #FFF;
            font: 300 15.5px Roboto;
            border-radius: 33px;

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

    @media (max-width: 1063px){

        flex-direction: column;

        .ContainerButtons{
            margin: 0;
            margin-top: 2em;
        }

    }

    @media (max-width: 834px){
        .ContainerInputs{
            width: 100%;
        }
    }
    
    @media (max-width: 684px){

        padding: calc(2em - 20px) 1em 2em 1em;

        .ContainerInputs{

            div{
                width: 48%;

                label{
                    font-size: 13px;
                }

                input{
                    height: 28px;
                    width: 100%;
                }

            } 
                       
        }

        .ContainerButtons{

            button{
                heigth: 28px;
                width: 175px;
            }

        }

    }


`