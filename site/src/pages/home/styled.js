import styled from "styled-components";

const Container = styled.div `


.image1 img {
    background-attachment: fixed;
}

.track1 {
    text-align: center;
}

span {
    color: #00C89B;
}

.title1 {
    font-size: 34px;
    margin-top: 1em;
    margin-bottom: 1em;

    padding: 0em 8em 0em 8em
    }

.track2 {
    background-color: #FAFEFF;
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
     display: flex;
flex-direction: row;   
}


.box-captions {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2em;
    margin-right: 20em;
}

.bord {
    border: solid #A9FFE0;
    background-color: #A9FFE0;
    width: 1em;
    height: 1em;
    margin-right: 1em;
}

.caption {
    font-size: 14px;
    text-align: justify;
    padding-right: 0em;
}
.images-box {
     margin-top: -7em;
}
`
export {Container }