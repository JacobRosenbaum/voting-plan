import React, { useState } from 'react';
import VotePicture from "../assets/images/votePlanText.png";
import letsGoButton from "../assets/images/letsGoButton.png";
import "../assets/css/votePlan.css";
import Modal from 'react-modal';
 import How2 from "../components/How2";
import MainPlan from "../components/MainPlan.js";
import MainPlan2 from "../components/MainPlan2.js"
import voteRegister from "../assets/images/voteRegister.png";
import yes from "../assets/images/yes.png";
import iDontKnow from "../assets/images/iDontKnow.png";
import notYet from "../assets/images/notYet.png"


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
            color: 'white',
            textAlign: 'center',
            border: '5px #EF3D55 solid',
            fontFamily: '"Gotham Light", sans-serif'
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
        <div className="w3-animate-opacity" id="begin"  >
            {vote ?
                <div style={{ textAlign: 'center' }}>
                    <h5 id='funVote' style={{ marginBottom: '30px', color: "black ! important" }}>
                        VOTING IS FUN. VOTING IS COOL. EVERYONE IS DOING IT. MAKE SURE YOU DO IT, TOO! <br />A GREAT WAY TO MAKE IT HAPPEN IS BY <b> MAKING A VOTING PLAN. </b> <br />  THIS SUPER SIMPLE TOOL WILL HELP YOU MAKE YOUR VOTING PLAN IN LESS THAN 3 MINUTES. IN?
                </h5>
                    <img id="votePicture" src={VotePicture} />
                    {/* <a style = {{color: 'black !important', fontSize: "20px", width: "100px", zIndex: '392939039'}}class="twitter-share-button"
  href="https://twitter.com/intent/tweet"
  data-size="large"
  data-text="custom share text"
  data-url="https://dev.twitter.com/web/tweet-button"
  data-hashtags="example,demo"
  data-via="twitterdev"
  data-related="twitterapi,twitter">
Tweet
</a> */}
                    <img onClick={() => {
                        showVote(false)
                        showButton(true)
                    }} id="letsGoButton" src={letsGoButton} />
                </div> : null}
            {button ?
                <div id="simple" style={{ textAlign: 'center' }}>
                    <div id="voteDiv">
                        <img style={{ marginBottom: '50px' }} src={voteRegister} id="voteRegister"
                        />
                        <div className="row">
                            <div className="col-sm-6" >
                                <img id="yes" src={yes} onClick={startPlan} />

                            </div>
                            <div className="col-sm-6" >
                                <img id="no" src={notYet} onClick={openVoteModal} />
                            </div>
                            </div>
                        <div className="row">
                            <div className="col-sm-12" >
                                <img id="maybe" src={iDontKnow} onClick={openMaybeModal} />
                            </div>
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
                        <div style={{ marginBottom: "50px" }}>
                            <h3>NO PROBLEM!</h3>
                            <div style={{ color: "white !important" }}><a class = "clickHere" style={{ color: "white !important", textDecoration: "underline !important" }} href="https://www.vote.org/register-to-vote/" target="_blank">CLICK HERE</a> TO GET REGISTERED - THEN COME ON BACK!</div>
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
                        <div style={{ marginBottom: "50px" }}>
                            <h3>NO PROBLEM!</h3>
                            <div style={{ color: "white !important" }}><a class = "clickHere" style={{ color: "white !important", textDecoration: "underline !important" }} href="https://www.vote.org/am-i-registered-to-vote/" target="_blank">CLICK HERE</a> TO FIND OUT - THEN COME ON BACK!</div>
                        </div>
                    </Modal>

                </div> : null
            }
            {component ?
                <MainPlan2 /> : null
            }

        </div>
    )
}
export default VotePlan;