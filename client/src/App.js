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
            <footer >
                <b>Let's DO Something ©    <a> <i class="fa fa-instagram "></i></a>
                    <a > <i class="fa fa-facebook "></i></a>
                    <a ><i class="fa fa-twitter "></i></a>
                </b>
                {/* <img id = "lets" src = {letsDoSomething} /> */}


                {/* <img style ={{height: '19px', position: 'relative',right: '3px'}} src = {i} /> */}
            </footer>
        </div>

    );
}

export default App;