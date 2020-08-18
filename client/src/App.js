import React from "react";
import Main from "../src/pages/Main";
import "../src/assets/css/app.css";
import oneSticker from "../src/assets/images/oneSticker.png";
import twoStickers from "../src/assets/images/twoStickers.png";
import i from "../src/assets/images/exclamation.png";
import letsDoSomething from "../src/assets/images/letsDoSomething.png"


function App() {
    return (
        <div>
            <div class="animate__animated animate__fadeIn">
                <Main />
                {/* <img id = "oneSticker" src={oneSticker}/>
            <img id = "twoStickers" src={twoStickers}/> */}
            </div>
            <footer style={{ textAlign: 'center' }}>
                <div>
                    Let's DO Something
                </div>
                <div>
                    <a href="https://www.instagram.com/ldsomething/" target="_blank"> <i class="fa fa-instagram foot"></i></a>
                    <a href="https://www.facebook.com/LDSomething" target="_blank"> <i class="fa fa-facebook foot"></i></a>
                    <a href="https://twitter.com/LDoSomething" target="_blank"> <i class="fa fa-twitter foot"></i></a>
                </div>
            </footer>
        </div>

    );
}

export default App;