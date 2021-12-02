import styled from "styled-components";

const Container = styled.div `

padding: 1.5em;
height: auto;
min-height: 100vh;
    
display: flex;
flex-direction: column;
justify-content: center;

    .title1 {
        font: 400 26px Glegoo;
        text-align: center;
        width: 640px;

            span {
                color: #085C85;
                font-weight: 700;
            }

    }

.image1 img {
    width: 100%;
    max-width: 579px;
    
}

.track1 {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.butonsHome{
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: space-evenly;

    width: 500px;
    margin: 2.3em;

        button {
            border: none;
            border-radius: 33px;

            height: 45px;
            width: 185px;

            font: 400 15px Glegoo;
            font-size: 16px;
            color: #FFFFFF;
            background-color: #17191A;
            /* border: 3px solid #17191A; */
            box-shadow: 4px 4px 8px rgba(0, 0, 0, .40);


            transition-property: all;
            transition-duration: .45s;

                &:hover{
                    background-color: #353636;
                }
        }

}


    @media (max-width: 850px){
        .title1{
            font-size: 28px;
            width: 654px;
        }
    }

    @media (max-width: 700px){
        .title1{
            font-size: 25px;
            width: auto;
            text-align: center;
        }

        .butonsHome button{
            height: 40px;
            width: 130px;
        }

    }

    @media (max-width: 500px){

        padding: 1.2em;
        justify-content: start;

        .title1{
            font-size: 23px;
            text-align: left;
        }
        
        .butonsHome{
            width: 100%;

                button {
                    font-size: 14px;
                }

        }

    }

`
export {Container }