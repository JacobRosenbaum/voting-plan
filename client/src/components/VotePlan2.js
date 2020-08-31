import React, { useState } from 'react';
import VotePicture from "../assets/images/votePlanText.png";
import letsGoButton from "../assets/images/letsGoButton.png";
import "../assets/css/about.css"
import "../assets/css/votePlan.css";
import Modal from 'react-modal';
 import How2 from "./How2";
import MainPlan from "./MainPlan.js";
import MainPlan2 from "./MainPlan2.js";
import MainPlanImg from "./MainPlanImg";
import voteRegister from "../assets/images/voteRegister.png";
import yes from "../assets/images/yes.png";
import iDontKnow from "../assets/images/iDontKnow.png";
import notYet from "../assets/images/notYet.png";
import alternate from "../assets/images/alternate.png";
import exclamation from "../assets/images/exclamation.png"



function VotePlan() {
    const [voteModalIsOpen, setVoteIsOpen] = useState(false);
    const [maybeModalIsOpen, setMaybeIsOpen] = useState(false);
    const [button, showButton] = useState(false);
    const [component, showComponent] = useState(false);
    const [vote, showVote] = useState(true)


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#004789',
            borderRadius: '20px',
            color: 'white',
            textAlign: 'center',
            border: '5px #EF3D55 solid',
            zIndex: 205
        }
    };

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
        showButton(false);

    }
    return (
        <div class = "container">
        <div className=" jumbotron w3-animate-opacity" id="begin"  >
            {vote ?
                <div id = "opening" style={{ textAlign: 'center' }}>
                    <h3 id='funVote' style = {{marginTop: '70px'}} >
                       
Welcome to votingplan.org!
<br/>
<br/>
This super simple tool will help you make a plan to vote <br/>in this year’s <b>*very*</b> important election.
<br/>
<br/>
Click below to get started!
                

                </h3>
                    {/* <img id="votePicture" src={VotePicture} /> */}
                    {/* <h1 id = "makePlan">make a voting plan</h1> */}
                    <button id = "opener" onClick={() => {
                        showVote(false)
                        showButton(true)
                    }} >
                        Make my voting plan
                        </button>
                </div> : null}
            {button ?
                <div id="simple" style={{ textAlign: 'center' }}>
                    <div id="voteDiv">
                        {/* <img style={{ marginBottom: '50px' }} src={voteRegister} id="voteRegister"
                        /> */}
                        <h1 style = {{marginBottom: '30px'}}>Are you registered to vote?</h1>
                        <div style = {{textAlign: "left"}}>
                               <div>
                                    <div className="form-check">
                                        <button
                                        onClick={startPlan}
                                        >
                                            yes
                                        </button>
                                    </div>
                                    <div className="form-check">
                                        <button 
                                        onClick={openMaybeModal}
                                        >
                                            maybe
                                        </button>
                                    </div>
                                    <div className="form-check">
                                        <button
                                        onClick={openVoteModal}
                                        >
                                        not yet
                                        </button>   
                                    </div>
                                  
                                </div>
                                {/* <div className="form-check">
                                <label >
                                    <input
                                    type="radio"
                                    name="react-tips"
                                    onClick={openMaybeModal}
                                    style={{ marginRight: "5px" }} />
                                i don't know
                                    </label>
                                </div> */}
                                
                            </div>
                            </div>
                         
                    <Modal
                        isOpen={voteModalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeVoteModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <i id="x" class="fa fa-times" onClick={closeVoteModal}></i>
                        {/* <div>No problem! </div> */}
                        <div style={{ marginBottom: "30px", marginTop: '20px' }}>
                            <h3>No problem!</h3>
                            <div style={{ color: "white !important" }}><a class = "modalClick" style={{ color: "white !important", textDecoration: "underline !important" }} href="https://www.vote.org/register-to-vote/" target="_blank">Click here</a> to get registered - then come on back!</div>
                        </div>
                    </Modal>
                    <Modal
                        isOpen={maybeModalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeMaybeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <i id="maybeButton" class="fa fa-times" onClick={closeMaybeModal}></i>
                        {/* <div>No problem! </div> */}
                        <div style={{ marginBottom: "30px", marginTop: '20px' }}>
                            <h3>No problem!</h3>
                            <div style={{ color: "white !important" }}><a class = "modalClick" style={{ color: "white !important", textDecoration: "underline !important" }} href="https://www.vote.org/am-i-registered-to-vote/" target="_blank">Click here</a> to find out - then come on back!</div>
                        </div>
                    </Modal>

                </div> : null
            }
            {component ?
                <MainPlanImg /> : null
            }

        </div>
        </div>
    )
}
export default VotePlan;