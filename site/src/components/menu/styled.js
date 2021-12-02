import Styled from 'styled-components'

export const Container = Styled.div`

    position: fixed;
    top: 5em;
    right: 0px;
    height: calc( 100vh - 5em );
    width: 220px;
    background: #26292B;


    .BoxLogo {

        display: flex;
        justify-content: center;
        
        img{
            height: 180px;
        }
    }

  

    .Space{
        background: #085C85;
        height: 3em;
    }

    .OptionsMenu{

        div{
            height: 3em;
            padding-left: 1em;
            display: flex;
            align-items: center;
            cursor: pointer;

            font: 400 16px Glegoo;
            color: #D2D2D2;

            &:hover{
                background: #333333;
            }

        }

        .OpstionSelct{
            font-weight: 700;
            color: #FFFFFF;
        }

    }

    .BoxExit{
        position: absolute;
        bottom: 1em;
        right: 2em;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    
    }


`