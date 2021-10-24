import styled from "styled-components";

const Container = styled.div `

h4 {
    font-size: 24px;
}

h6 {
    font-size: 22px;
    padding: 0em 10em 0em 10em;
    margin:0px;

}
.box-titles {
    margin:0px;
    background-color: #006494;
    padding: 1.9em;
    align-content: center;
    text-align: center;

}

.aprov {

    display:  flex;
    flex-direction:row;
    align-items: center;
    margin-left: 30em;
color: white;

            > div {
    border: solid #FBFF3D;
    border-radius: 100%;
    width: 11px;
    height: 10px;
    background-color: #FBFF3D;
    margin-right: 1em;

    }   
}
.image {
    margin-top: 1em;
    text-align: center;
}
`
export {Container}