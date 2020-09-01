import React, { useState } from 'react';

import "../assets/css/about.css"
import "../assets/css/votePlan.css";
import Modal from 'react-modal';

import MainPlanImg from "./MainPlanImg";




function VotePlan() {
    const [voteModalIsOpen, setVoteIsOpen] = useState(false);
    const [maybeModalIsOpen, setMaybeIsOpen] = useState(false);
    const [button, showButton] = useState(true);
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
            borderRadius: '15px',
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
   <div className = "jumbotron">
            
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
    )
}
export default VotePlan;