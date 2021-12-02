import Styled from 'styled-components'

export const Container = Styled.div`

    width: 100%;
    height: 5em;
    padding: 0 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #17191A;
    color: #D2D2D2;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, .30 );

    .Box-SejaBemVindo{
        font: 300 20px Roboto;
        color: #FFF;

        span{
            font: 700 20px Glegoo;
        }

    }

    #Menu{
        visibility: collapse;
    }

    .Options{
        display: flex;

        div{
            font: 400 16px Glegoo;
            /* margin: 0 7px; */
            padding: 5px 12px;
            cursor: pointer;

            transition-property: all;
            transition-duration: .5s;

            &:hover{
                background: #333333;
            }
        }

        .OpstionSelct{
            font-weight: 700;
            color: #FFFFFF;
        }

    }

    .Box-Exit{
        width: 208px;
       
        display: flex;
        justify-content: flex-end;

        div{
            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;
            width: 40px;
            height: 40px;

            transition-property: all;
            transition-duration: .5s;

            &:hover{
                background: #333333;
            }
        }
    }

    @media (max-width: 1024px){
        
        .Box-Exit{
            width: auto;
        }

    }

    @media (max-width: 900px){
        
        .Box-SejaBemVindo{
            font-size: 18px ;

            span{
                font-size: 18px;
            }

        }

        .Options{

            div{
                font-size: 14px;
                margin: 0 2px;
            }
        }
    }
        @media (max-width: 770px){
        
            top: 0px;
            position: sticky;

            .Options,
            #Exit{
                display: none;
            }

            #Menu{
                visibility: visible;
                width: 20px;
                height: 20px;

            }

           

        }



        @media (max-width: 400px){
        
            padding: 0 1em;

            .Box-SejaBemVindo{
                font-size: 15px ;

                span{
                    font-size: 15px;
                }

            }

        }

`