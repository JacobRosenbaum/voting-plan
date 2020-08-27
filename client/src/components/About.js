import React, { useState } from 'react';
import "../assets/css/about.css";
import MainPlan from "./MainPlan";
import VotePlan from "../components/VotePlan";
import Modal from 'react-modal';
import letsGoButton from "../assets/images/letsGoButton.png";
import alternate from "../assets/images/alternate.png";
import oneSticker from "../assets/images/oneSticker.png";
import twoStickers from "../assets/images/twoStickers.png"; 

function About() {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#004789',
            borderRadius: '15px',
            color: 'white',
            textAlign: 'center',
        }
    };

    const [voteModalIsOpen, setVoteIsOpen] = useState(false);
    const [maybeModalIsOpen, setMaybeIsOpen] = useState(false);
    const [component, showComponent] = useState(false);
    const [button, showButton] = useState(false);
    const [letsGo, showLetsGo] = useState(false);
    const [makePlanPicture, showMakePlanPicture] = useState(true);
    const [voteSticker, showVoteSticker] = useState(true);


    function openVoteModal() {
        setVoteIsOpen(true);
    }

    function closeVoteModal() {
        setVoteIsOpen(false);
    }
    function openMaybeModal() {
        setMaybeIsOpen(true);
    }

    function closeMaybeModal() {
        setMaybeIsOpen(false);
    }

    function startPlan() {
        showComponent(true);
        showButton(false)
    }

    return (
        <div>
        <div class="container" >
            <div class="jumbotron w3-animate-opacity">
                <div style = {{zIndex: 24}}>
                    {makePlanPicture ? <VotePlan /> : null

                    }
                    {/* {component ?
                        <MainPlan /> : null
                    } */}
                    {letsGo ? <img onClick={() => {
                        showLetsGo(false);
                        // showPreScreen(true);
                        showMakePlanPicture(false);
                        showButton(true)
                    }} id="letsGoButton" src={letsGoButton} /> : null
                    }
                </div>
            </div>
            
        </div>
        <div style = {{zIndex: 2}}>
        
        </div>
        </div>
    )
}
export default About;