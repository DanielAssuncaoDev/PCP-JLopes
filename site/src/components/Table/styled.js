import Styled from 'styled-components'

export const ContainerTable = Styled.table`

    width: 100%;
    min-width: 736px;
    box-shadow: 0px 0px 10px 2px rgba( 0, 0, 0, .25);

    border-collapse: collapse;

    thead {
        background: #085C85;
        font: 500 16px Roboto;
        color: #FFF;

        th{
            padding: 10px;
            height: 50px;
        }
    }

    #Option{
        background: #17191A;
    }

    tr{
        height: 45px;
    }

    td{
        text-align: center;
        padding: 10px;
    }

    #ValueOption{
        display: flex;
        justify-content: center;

            div{
                height: 35px;
                width: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                margin: 5px;
                transition-property: all;
                transition-duration: .4s;

                img{
                    height: 28px;
                    width: 28px;
                }

                &:hover{
                    background: #33333325;
                }
            }
    }

    tbody tr:nth-child(odd){
        background: #F2F2F2;
    }

    tbody tr{
    
        transition-property: all;
        transition-duration: .4s;

        &:hover{
            box-shadow: 0px 0px 10px 2px rgba( 0, 0, 0, .25);
        }
    }

`