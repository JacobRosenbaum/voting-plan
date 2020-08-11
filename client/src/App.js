import React from "react";
import Main from "../src/pages/Main"; 
import "../src/assets/css/app.css";
import oneSticker from "../src/assets/images/oneSticker.png";
import twoStickers from "../src/assets/images/twoStickers.png"; 


function App() {
    return (
        <div>
            <div class="animate__animated animate__fadeIn">
            <Main />
            {/* <img id = "oneSticker" src={oneSticker}/>
            <img id = "twoStickers" src={twoStickers}/> */}
            </div>
            <footer>
                Let's DO Something ©
            </footer>
        </div>
   
    );
  }
  
  export default App;