import React, { useState } from 'react';
import "../assets/css/main.css";
import About from "../components/About";
import oneSticker from "../assets/images/oneSticker.png";
import twoStickers from "../assets/images/twoStickers.png"; 
import alternate from "../assets/images/alternate.png"
import VotePlan from '../components/VotePlan';
import VotePlan2 from '../components/VotePlan2';

function Main() {

    const [about, showAbout] = useState(true)

    return (
        <div>
            {/* {about ?
            <div style={{ textAlign: 'center' }}> 
                    <img id="alternate" onClick={() => {
                      showAbout(false)
                    }}
                        src={alternate}
                    />
                 </div> :
                <div>
            
            </div>
            } */}
                 <VotePlan2 />
            <img id="oneSticker" src={oneSticker} />
            <img id="twoStickers" src={twoStickers} /> 
        </div>
    )
}

export default Main;