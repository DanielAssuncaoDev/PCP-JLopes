import styled from "styled-components";

const Container = styled.div `


.track1 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

span {
    color: #00C89B;
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

            height: 3.2em;
            width: 9.7em;

            font-size: 15px;
            color: #00C89B;
            background-color: #1E1D1D;

            transition-property: all;
            transition-duration: .45s;

                &:hover{
                    box-shadow: 2px 5px 8px rgba(0, 0, 0, .75);
                }
        }

}

.title1 {
    font-size: 34px;
    margin-top: 1em;
    /* margin-bottom: 1em; */

    padding: 0em 8em 0em 8em
    }

.track2 {
    background-color: rgb(252, 252, 252);
    height: 34em;
}

.title2 {
font-size: 25px;
text-align: center;
padding: 2em 15.2em 2em 15.8em

}

.cards {
display: flex;
justify-content: space-between;

padding: 0em 4em 0em 4em;
margin-bottom: 3em;
}


.card1 {
    display: flex;
    flex-direction: column;
    width: 25em;
    padding: 2em 0em 2em 0em;
    margin-left: 1em;

    background-color: white;
    border-radius: 20px;

    align-items: center;
    text-align: center;

    font-size: 14px;

    box-shadow: 0 0 6px .3px rgba(0, 0, 0, .25)
}

.title {
    font-size: 16px;

    color: #6E6E6E;

    margin: 1em 0em;
}

.description {
    padding: 0em 5em 0em 5em;
    font-size: 12px;
}

.title3 {
    color: #1539B9;
    font-size: 24px;

    padding: 2em 28em 2em 0em;
    margin-left: 3em;
}

.box-track {
    margin-left: 4em;

}


.box-captions {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2em;
    margin-right: 20em;
}

.bord {
    /* border: solid #A9FFE0; */
    background-color: #000;
    width: 12px;
    height: 12px;
    margin-right: 1em;
    animation-name: topic;
    animation-iteration-count: infinite;
    animation-duration: 4s;
    /* transform: rotate(90); */


        @keyframes topic {
            0% {
                transform: rotate(0deg);
                /* background-color: #A9FFE0; */
            }
            100% {
                transform: rotate(360deg);
                /* background-color: #000; */

            }
        }

}

.caption {
    font-size: 14px;
}
`
export {Container }