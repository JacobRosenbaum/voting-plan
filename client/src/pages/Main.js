import React, { useState } from 'react';
import "../assets/css/main.css";
import About from "../components/About";
import oneSticker from "../assets/images/oneSticker.png";
import twoStickers from "../assets/images/twoStickers.png"; 
import alternate from "../assets/images/alternate.png"

function Main() {

    const [about, showAbout] = useState(true)

    return (
        <div>
            {about ?
            <div style={{ textAlign: 'center' }}> 
                    <img id="alternate" onClick={() => {
                      showAbout(false)
                    }}
                        src={alternate}
                    />

                   

                }  </div> :
                <div>
            <About />
            <img id="oneSticker" src={oneSticker} />
            <img id="twoStickers" src={twoStickers} />
            </div>
            }
        </div>
    )
}

export default Main;