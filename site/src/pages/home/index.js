import { Container } from "./styled";
import CabeCalho from "../../components/cabecalhoInicio/styled";



export default function Home() {
    return (
        <Container>
            <CabeCalho />
            <div className="track1">
                <div className="title1"> <span>Automatize</span> Operações e garanta <span>Produtividade</span> na gestão de armazenamento</div>
                <div className="image1"> <img src="./assets/images/ground.png" alt="" width="700" /> </div>
            </div>
            <div className="track2">
                <div className="cards"> 
                    <div className="card1"> 
                        <div className="log"> </div>
                        <div className="title"> </div>
                        <div className="description"> </div>
                    </div>
                    <div className="card2"> 
                        <div className="log"> </div>
                        <div className="title"> </div>
                        <div className="description"> </div>
                    </div>
                    <div className="card3"> 
                        <div className="log"> </div>
                        <div className="title"> </div>
                        <div className="description"> </div>
                    </div>
                </div>
            </div>
            <div className="track3">
                <div className="title3"> </div>
                <div className="box-track"> 
                    <div className="box-titles"> 
                        <div className="box-captions">
                            <div className="bord"> </div>
                            <div className="caption"> </div>
                        </div>
                        <div className="box-captions">
                            <div className="bord"> </div>
                            <div className="caption"> </div>
                        </div>
                        <div className="box-captions">
                            <div className="bord"> </div>
                            <div className="caption"> </div>
                        </div>
                        <div className="box-captions">
                            <div className="bord"> </div>
                            <div className="caption"> </div>
                        </div>
                    </div>
                    <div className="images-box"> </div>
                </div>
            </div>
        </Container>
    )

}