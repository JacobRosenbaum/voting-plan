import React, { useState, useRef } from 'react';
import "../assets/css/mainPlan.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import API from "../utils/API";

import InstagramEmbed from 'react-instagram-embed';


// import useWindowSize from 'react-use-window-size';
import Confetti from 'react-confetti';
import Link from 'react-router-dom/Link';
import castBallotImage from "../assets/images/castBallot.png";
import exclamation from "../assets/images/exclamation.png"
import VotePlan from './VotePlan2';
import Register from "./Register.js"


Modal.setAppElement(document.getElementById('root'));

function MainPlan() {


    var typingTimer;                //timer identifier
    var doneTypingInterval = 8000;  //time in ms (5 seconds)

    // const { width, height } = useWindowSize()

    const customStyles1 = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#004789',
            borderRadius: '18px',
            color: 'white',
            textAlign: 'center',
            border: '5px #EF3D55 solid',
            zIndex: 32462983469238469238469238462398
        }
    };

    const [mail, showMail] = useState(false);
    const [mail2, setMail2] = useState(false);
    const [mailModalTestRun, setMailModalTestRun] = useState(false);
    const [test, setTest] = useState(false);
    const [mailNextButton, showMailNextButton] = useState(false);
    const [personEarly, showPersonEarly] = useState(false);
    const [personEarly2, showPersonEarly2] = useState(false);
    const [personEarly3, showPersonEarly3] = useState(false);
    const [personEarly4, showPersonEarly4] = useState(false);
    const [personEarly5, showPersonEarly5] = useState(false);
    const [personElection, showPersonElection] = useState(false);
    const [personElection2, showPersonElection2] = useState(false);
    const [personElection3, showPersonElection3] = useState(false);
    const [personElection4, showPersonElection4] = useState(false);
    const [finishButtonMail, showFinishButtonMail] = useState(false);
    const [finishButtonEarly, showFinishButtonEarly] = useState(false);
    const [finishButtonElection, showFinishButtonElection] = useState(false);
    const [startDatePerson, setStartDatePerson] = useState(new Date());
    const [modalMailIsOpen, setMailIsOpen] = useState(false);
    const [modalEarlyIsOpen, setEarlyIsOpen] = useState(false);
    const [modalElectionIsOpen, setElectionIsOpen] = useState(false);
    const [emailFriends, showEmailFriends] = useState(false);
    const [emailEarlyFriends, showEmailEarlyFriends] = useState(false);
    const [emailElectionFriends, showEmailElectionFriends] = useState(false);
    const [nameMail, setNameMail] = useState();
    const [emailMail, setEmailMail] = useState();
    const [castBallotHowMail, setCastBallotHowMail] = useState();
    const [mailBallotWhen, setMailBallotWhen] = useState();
    const [mailFriendName1, setMailFriendName1] = useState();
    const [mailFriendName2, setMailFriendName2] = useState();
    const [mailFriendEmail1, setMailFriendEmail1] = useState();
    const [mailFriendEmail2, setMailFriendEmail2] = useState();
    const [earlyFriendName1, setEarlyFriendName1] = useState();
    const [earlyFriendName2, setEarlyFriendName2] = useState();
    const [earlyFriendEmail1, setEarlyFriendEmail1] = useState();
    const [earlyFriendEmail2, setEarlyFriendEmail2] = useState();
    const [nameEarly, setNameEarly] = useState();
    const [emailEarly, setEmailEarly] = useState();
    const [castBallotHowEarly, setCastBallotHowEarly] = useState();
    const [whatDay, setWhatDay] = useState();
    const [whatTime, setWhatTime] = useState();
    const [getToPolls, setGetToPolls] = useState();
    const [bringWith, setBringWith] = useState();
    const [bringWithFriendEarly, setBringWithFriendEarly] = useState();
    const [bringWithFriendElection, setBringWithFriendElection] = useState();
    const [nameElection, setNameElection] = useState();
    const [emailElection, setEmailElection] = useState();
    const [castBallotHowElection, setCastBallotHowElection] = useState();
    const [whatTimeElection, setWhatTimeElection] = useState();
    const [getToPollsElection, setGetToPollsElection] = useState();
    const [takeOffWork, setTakeOffWork] = useState();
    const [bringWithElection, setBringWithElection] = useState();
    const [electionFriendName1, setElectionFriendName1] = useState();
    const [electionFriendName2, setElectionFriendName2] = useState();
    const [electionFriendEmail1, setElectionFriendEmail1] = useState();
    const [electionFriendEmail2, setElectionFriendEmail2] = useState();
    const [ballotPlan, showBallotPlan] = useState(false);
    const [confetti, showConfetti] = useState(false);
    const [complete, showComplete] = useState(false);
    const [completeEarly, showCompleteEarly] = useState(false);
    const [completeElection, showCompleteElection] = useState(false);
    const [mailModal, showMailModal] = useState(true);
    const [earlyModal, showEarlyModal] = useState(true);
    const [electionModal, showElectionModal] = useState(true);
    const [earlyNextButton, showEarlyNextButton] = useState(false);
    const [early2NextButton, showEarly2NextButton] = useState(false);
    const [early3NextButton, showEarly3NextButton] = useState(false);
    const [early5NextButton, showEarly5NextButton] = useState(false);
    const [electionNextButton, showElectionNextButton] = useState(false);
    const [election2NextButton, showElection2NextButton] = useState(false);
    const [election3NextButton, showElection3NextButton] = useState(false);
    const [register, showRegister] = useState(true);
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
        showBallotPlan(true);
        showRegister(false);

    }



    function handleMailSubmit(event) {

        console.log(nameMail, emailMail, castBallotHowMail, mailBallotWhen);

        API.emailMail({ nameMail, emailMail, castBallotHowMail, mailBallotWhen }).catch(err => console.log(err));

        if (mailFriendEmail1) {

            API.mailFriend1({ mailFriendName1, mailFriendEmail1, nameMail })

        };
        if (mailFriendEmail2) {

            API.mailFriend2({ mailFriendName2, mailFriendEmail2, nameMail })

        };

        API.saveMailUser({
            nameMail: nameMail,
            emailMail: emailMail,
            castBallotHowMail: castBallotHowMail,
            mailBallotWhen: mailBallotWhen,
        }).catch(err => console.log(err));
        
    }

    function handleEarlySubmit() {
        console.log(nameEarly, emailEarly, castBallotHowEarly, whatDay, whatTime, getToPolls, bringWith)

        API.emailEarly({ nameEarly, emailEarly, castBallotHowEarly, whatDay, whatTime, getToPolls, bringWith, bringWithFriendEarly }).catch(err => console.log(err));

        if (earlyFriendEmail1) {

            API.earlyFriend1({ earlyFriendName1, earlyFriendEmail1,nameEarly  })

        };
        if (earlyFriendEmail2) {

            API.earlyFriend2({ earlyFriendName2, earlyFriendEmail2, nameEarly })

        };
    
        API.saveEarlyUser({
            nameEarly: nameEarly,
            emailEarly: emailEarly,
            castBallotHowEarly: castBallotHowEarly,
            whatDay: whatDay,
            whatTime: whatTime,
            getToPolls: getToPolls,
            bringWith: bringWith
        }).catch(err => console.log(err));;
    }

    function handleElectionSubmit() {
        console.log(nameElection, emailElection, castBallotHowElection, whatTimeElection, getToPollsElection, bringWithElection, takeOffWork)

        API.emailElection({ nameElection, emailElection, castBallotHowElection, whatTimeElection, getToPollsElection, bringWithElection, takeOffWork, bringWithFriendElection }).catch(err => console.log(err));

        if (electionFriendEmail1) {

            API.electionFriend1({ electionFriendName1, electionFriendEmail1, nameElection })

        };
        if (electionFriendEmail2) {

            API.electionFriend2({ electionFriendName2, electionFriendEmail2, nameElection })

        };

        API.saveElectionUser({
            nameElection: nameElection,
            emailElection: emailElection,
            castBallotHowElection: castBallotHowElection,
            whatTimeElection: whatTimeElection,
            getToPollsElection: getToPollsElection,
            bringWithElection: bringWithElection,
            takeOffWork: takeOffWork
        }).catch(err => console.log(err));;
    }

    function openMailModal() {
        setMailIsOpen(true);
    }
    function closeMailModal() {
        setMailIsOpen(false);
    }
    function closeMailModalTestRun() {
        setMailModalTestRun(false);
    }
    function openEarlyModal() {
        setEarlyIsOpen(true);
    }
    function closeEarlyModal() {
        setEarlyIsOpen(false);
    }
    function openElectionModal() {
        setElectionIsOpen(true);
    }
    function closeElectionModal() {
        setElectionIsOpen(false);
    }
    function onFinishButtonMail() {
        showFinishButtonMail(true);
        // showMail(false);
    }
    function onFinishButtonEarly() {
        showFinishButtonEarly(true)
    }
    function onFinishButtonElection() {
        showFinishButtonElection(true)
    }
    function onEmailFriends() {
        showEmailFriends(true)
    }
    function onMail() {
        showMail(true);
        showPersonEarly(false);
        showPersonEarly2(false);
        showPersonEarly3(false);
        showPersonEarly4(false);
        showPersonElection(false);
        showPersonElection2(false);
        showPersonElection3(false);
        showPersonElection4(false);

    }
    function onPersonEarly() {
        showPersonEarly(true);
        showMail(false);
        showPersonElection(false);
        showPersonElection2(false);
        showPersonElection3(false);
        showPersonElection4(false);
        showBallotPlan(false)

    }
    function onPersonEarly3() {
        showPersonEarly3(true);
        showPersonEarly2(false)

    }
    function onPersonEarly4() {
        showPersonEarly4(true);
        showPersonEarly3(false)
    }
   
    // function doneTypingMailBallotWhen(){
    //     showFinishButtonMail(true);

    // }
    function doneTypingWhatTime(){
        showPersonEarly3(true);
        showPersonEarly2(false)
    }
    function doneTypingWhatDay(){
        showPersonEarly2(true);
        showPersonEarly(false)
    }
    function doneTypingGetToPolls(){
        showPersonEarly4(true);
        showPersonEarly3(false)
    }
    function doneTypingWhatTimeElection(){
        showPersonElection2(true);
        showPersonElection(false);
    }
    function doneTypingGetToPollsElection(){
        showPersonElection3(true);
        showPersonElection2(false)
    }
    function doneTypingTakeOffWork(){
        showPersonElection4(true);
        showPersonElection3(false)
    }

    function onPersonElection() {
        showPersonElection(true);
        showMail(false);
        showPersonEarly(false);
        showPersonEarly2(false);
        showPersonEarly3(false);
        showPersonEarly4(false);
        showBallotPlan(false)
    }
    function onPersonElection2() {
        showPersonElection2(true);
        showPersonElection(false);

    }
    function onPersonElection3() {
        showPersonElection3(true);
        showPersonElection2(false)
    }
    function onPersonElection4() {
        showPersonElection4(true);
        showPersonElection3(false)
    }
   
    // function handleDateChangePerson() {
    //     setStartDatePerson();
    //     showPersonEarly2(true);
    //     setWhatDay(startDatePerson.toString());
    //     showPersonEarly(false)

    // }
    return (
        <div class='container' >
            <div className = "start">
            {register ?
            
         
            <div id="voteDiv">
                {/* <img style={{ marginBottom: '50px' }} src={voteRegister} id="voteRegister"
                /> */}
                <h1 style = {{marginBottom: '30px'}}>Are you registered to vote at your current address?</h1>
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
                 
            <Modal
                isOpen={voteModalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeVoteModal}
                style={customStyles1}
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
                style={customStyles1}
                contentLabel="Example Modal"
            >
                <i id="maybeButton" class="fa fa-times" onClick={closeMaybeModal}></i>
                {/* <div>No problem! </div> */}
                <div style={{ marginBottom: "30px", marginTop: '20px' }}>
                    <h3>No problem!</h3>
                    <div style={{ color: "white !important" }}><a class = "modalClick" style={{ color: "white !important", textDecoration: "underline !important" }} href="https://www.vote.org/am-i-registered-to-vote/" target="_blank">Click here</a> to find out - then come on back!</div>
                </div>
            </Modal>

        </div>
            : null

            }
            </div>
            {ballotPlan ?
            <div className = "jumbotronX" style={{ marginBottom: "30px" }}>
                {/* {register ?
                <VotePlan2 />

                } */}
                    <h1 class = "question" >
                    
                    How do you plan to cast your ballot?
                        </h1>
                        {/* <img id = "castBallotImage" src = {castBallotImage} /> */}
                        <div  style = {{textAlign: 'center', marginBottom: '30px'}}>
                       <a id='planCastText' className = "clickHere" href = "https://www.rockthevote.org/how-to-vote/" target = "_blank">
                       Not sure yet? Don’t worry! <span className = "underline">Click here</span> for more info on the options in your state.
                           </a>
                       </div>
                       
                  {/*       *note sure yet? don't worry! <a id = "clickHere" href = "https://www.headcount.org/state">click here</a> for more info on the options in your state and/or reach out to us [link my email] with any questions at all, we're here to help! */}
                    <div className="form-check">
                    <button
                                onClick={e => {
                                    setCastBallotHowMail(e.target.value);
                                    showMail(true);
                                    showPersonEarly(false);
                                    showPersonEarly2(false);
                                    showPersonEarly3(false);
                                    showPersonEarly4(false);
                                    showPersonElection(false);
                                    showPersonElection2(false);
                                    showPersonElection3(false);
                                    showPersonElection4(false);
                                    showBallotPlan(false)
                                    ;
                                }}
                            >
                        by mail
                            </button>
                    </div>
                    <div className="form-check">
                            <button
                                // onClick={onPersonEarly}
                                style={{ marginRight: "5px" }}
                                onClick={e => {
                                    setCastBallotHowEarly("in person, early");
                                    showPersonEarly(true);
                                    showMail(false);
                                    showPersonElection(false);
                                    showPersonElection2(false);
                                    showPersonElection3(false);
                                    showPersonElection4(false);
                                    showBallotPlan(false)
                                }
                                }
                            >
                            in person, early
                            </button>
                    </div>
                    <div className="form-check">
                            <button
                            
                                // onClick={onPersonElection}
                                style={{ marginRight: "5px" }}
                                onClick={e => {
                                    setCastBallotHowElection("in person, on election day");
                                    showPersonElection(true);
                                    showMail(false);
                                    showPersonEarly(false);
                                    showPersonEarly2(false);
                                    showPersonEarly3(false);
                                    showPersonEarly4(false);
                                    showBallotPlan(false)
                                }
                                }
                            >
                            in person, on election day (november 8th!)
                            </button>
                    </div>
                    <i id = "arrowPerson1" onClick = {() => {
                                  showRegister(true);
                                  showBallotPlan(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                
            </div> : null }
            
            <div>
                {mail ?
                    <div className = "jumbotronX" style = {{textAlign:'center'}}>
                                <h1 className = "question">
                             
                                When will you fill in and mail back your ballot?
                                {/* when will you fill in and mail back your ballot? */}
                                </h1>
                                <div className="form-check" style = {{marginTop: '30px'}}>
                                <button
                            
                            // onClick={onPersonElection}
                            style={{ marginRight: "5px" }}
                            onClick = {
                                ()=>{
                                    setMailBallotWhen("the minute it arrives");
                                    // showMail(false);
                                    // setMail2(true)
                                    showFinishButtonMail(true)

                                }
                            }
                        >
                          the minute it arrives
                        </button>
                       </div>
                            <div  className="form-check">
                            <button
                                      
                                      // onClick={onFinishButtonMail}
                                      onClick={e => { 
                                          setMailBallotWhen("the same day it arrives")
                                    //   showFinishButtonMail(true)
                                        // showMail(false)
                                        // setMail2(true)
                                        showFinishButtonMail(true)

                                     }}

                                  >
                                  the same day it arrives
                                  </button>
                            </div>
                            <div className="form-check">
                            <button
                                  
                                  //    onClick={onFinishButtonMail}
                                     onClick={e => { setMailBallotWhen("before I go to sleep the night it arrives")
                                    //  showFinishButtonMail(true)
                                    // showMail(false)
                                    // setMail2(true)
                                    showFinishButtonMail(true)
                                     }}
  
                                 >
                                 before I go to sleep the night it arrives
                                 </button>
                                   
                            </div>
                       
                            <div className="form-check">
                                        <input id = "mailOther"
                                        type="input"
                                        // style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px" }}
                                        // onKeyUp=  {onFinishButtonMail}
                                        onKeyUp={e => { setMailBallotWhen(e.target.value)
                                            console.log(e.target.value)
                                            showFinishButtonMail(true)
                                        //  showMailNextButton(true)
                                         
                                         }}
                                        placeholder="other (what's right for you?)"
                                    />
                               
                                </div>
                                <i style = {{textAlign:'center', marginTop: '30px'}} id = "arrowMail" onClick = {() => {
                                   showBallotPlan(true);
                                   showMail(false);
                                   showFinishButtonMail(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                               
                       </div> : null }
                       {mail2 ?
                    <div className = "jumbotronX" >
                        <h1 className = "question">
                      
                        What's your first name (so we can personalize your plan)?
                            </h1>
                     
                               
                        <form style={{ marginBottom: '30px', textAlign: 'center' }}>
                            
                            <input
                                type="input"
                                
                                onKeyDown ={onFinishButtonEarly}
                                placeholder = "optional"
                                onKeyUp={e => { 
                                    setNameMail(e.target.value);
                                     console.log(e.target.value) }}
                            />
                        </form>
                        <i id = "arrowPerson4" onClick = {() => {
                                   showMail(true);
                                //    setMail2(false);
                                   showFinishButtonMail(false)
                                }
                                }  className="fa fa-arrow-left back"></i>
                        
                    </div>
                    : null
                }
                {finishButtonMail ?
                            <div style={{ textAlign: "center", marginTop: "30px" }}>
                                <button class = "finishButton"
                                    
                                    //onClick={openMailModal}
                                    onClick = {
                                        ()=>{
                                            // showComplete(true)
                                            // showConfetti(true)
                                            // setMail2(false)
                                                showFinishButtonMail(false)
                                                showMailModal(true)
                                                setMailIsOpen(true)
                                                
                                        }
                                    }
                                 
                                >
                                    i'm finished
                                    </button>
                            </div>
                              : null}
                    {mailNextButton ? 
                        <button 
                        style = {{marginTop: '30px'}} className = "next"
                        onClick = {
                            ()=>{
                                showMailNextButton(false);
                                showMail(false);
                                // setMail2(true)
                            }
                        }
                        >
                       next
                        </button>: null

                    } 
                <Modal
                    isOpen={modalMailIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeMailModal}
                    style={customStyles}
                    contentLabel="Modal"
                >
                    {/* <i id="close" class="fa fa-times" onClick={closeMailModal}></i> */}
                    <div>
                        {mailModal ?
                        <div>
                            <h4 style={{ marginBottom: "30px" }}>
                            Awesome! You're Almost Done!
                                <div style={{ marginTop: "3px" }}>
                                Want a reminder to vote?<br></br> If so enter your email address below. Otherwise just click "i'm done" to see your plan!
                                    {/* We just need your name and <br/>email address so we can send over your plan */}
                                </div>
                            </h4>
                            <form style={{ textAlign: 'center'}}>
                                  
                                        <input style = {{marginRight: '15px'}}
                                            type="input"
                                            className = "input"
                                            // style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="first name"
                                             onKeyUp={e => { setNameMail(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                   
                                   
                                        <input style = {{marginLeft: '15px'}}
                                            type="input"
                                            className = "input"
                                            // style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                            // onKeyUp={onEmailFriends}
                                            onKeyUp={e => { setEmailMail(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                    <br/>
                                
                                <button className = "next" style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', paddingTop:'6px',paddingBottom:'6px', paddingLeft:'8px', paddingRight: '8px'}} 
                                onClick={(e)=>
                                    {showMailModal(false);
                                        e.preventDefault();
                                                   
                                        {handleMailSubmit()};
                                    
                                    setTimeout( 
                                    setMailIsOpen(false),
                                    showComplete(true),
                                    showConfetti(true),
                                    showMail(false),
                                    showFinishButtonMail(false),
                                    console.log('confetti'), 10);
                                    // showEmailFriends(true)
                                    // showEmailFriends(false)
                                    // setMailIsOpen(false)
                                    // showComplete(true)
                                    // showConfetti(true)
                                }}
                                
                                >
                                    i'm done!
                                </button>

                            </form>
                        </div> : null
                        } 
                        
                                    
                    
                        {emailFriends ?
                            <div >
                                <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                    Hey that was easy! Who else should make a plan to vote right now?
                                </h4>
                                <form >
                                    
                                        <li>
                                            <input
                                                type="input"
                                                className = "input"
                                                style = {{marginRight: '15px'}}
                                                placeholder="first name"
                                                onKeyUp={e => { setMailFriendName1(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                className = "input"
                                                style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                                onKeyUp={e => { setMailFriendEmail1(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                        </li>
                                        <li>
                                            <input
                                                type="input"
                                                 className = "input"
                                                style = {{marginRight: '15px'}}
                                                placeholder="first name"
                                                onChange={e => { setMailFriendName2(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                            <input
                                             className = "input"
                                                type="input"
                                                style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                                onChange={e => { setMailFriendEmail2(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                        </li>
                                    
                                    <div style={{ textAlign: "center" }}>
                                        <button class = "modalFinish"
                                            style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', padding:'8px'}} 
                                            type = 'submit'
                                            onClick={(e) => 
                                                { 
                                                    e.preventDefault();
                                                   
                                                    // {handleMailSubmit()};
                                                
                                                setTimeout( 
                                                setMailIsOpen(false),
                                                showComplete(true),
                                                showConfetti(true),
                                                showMail(false),
                                                showFinishButtonMail(false),
                                                console.log('confetti'), 10);
                                             }}
                                        >
                                            i'm finished
                                    </button>
                                    </div>
                                </form>
                            </div> : null
                        }

                    </div>
                </Modal>
                {complete ? 
                <div style = {{textAlign: 'center' }}>
                    <div className = "confetti" style = {{position: 'relative', bottom: '300px'}}>
                     <Confetti 
                        colors={["#004789", "#EF3D55"]}
                        numberOfPieces={1000}
                        recycle={false}
                        // initialVelocityX={{min:-200, max: 200}}
                        // initialVelocityY={{min:200, max: 200}}
                        // width={1800}
                        confettiSource=	{ {x: 550, y:-80}}
                        
                        />
                        </div>
                    <h1 className="woohoo">
                        Woohoo! You made a Voting Plan!
                    </h1>
                
                    <button className = "plan" style = {{border: '#EF3D55 2px solid',borderRadius:'20px', textAlign: 'center',marginBottom: "20px", marginTop: "20px", paddingLeft: '10px', paddingRight: '10px', width: '300px', height: '300px',color: '#004789'}}>
        
            {nameMail ?
            <h4 className="verbiage" style = {{ fontWeight:'bolder'}}>
                {nameMail.charAt(0).toUpperCase()}{nameMail.substring(1)}'s Voting Plan
{/* {nameMail}'s Voting Plan */}
</h4> : <h4 className="verbiage" style = {{ fontWeight:'bolder'}}>
My '22 Voting Plan
</h4> 
            }
            
            
            <br/>
           
            <div>
        I will cast my ballot by mail! <br/> <br/>And I will do it {mailBallotWhen}!
        </div>
        </button>
        <div className = "whatnext">
        What next?  
            <br/>Take a screenshot of your plan and text it to 3 friends!<br/>
             Then ask them to make a plan too :)
    
        {/* <button  className='shareButton' id='fbButton'>
            <a target="_blank"
        id='fbLink'
        // style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', padding:'8px'}} 
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvotingplan.org%2F&amp;src=sdkpreparse"
    >Share to Facebook!</a></button> 
     <button  class='shareButton' 
      id='twitterButton' >
    <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://votingplan.org"
    target = "_blank"
       id='twitterLink'>Share to Twitter!</a></button> */}
            </div>
           
           
                    {/* <div className = "whatnext">
                    What next? 2 things: <br/><br/>
1) Add your plan's details to your personal calendar 🗓 right now <br/><br/>
2) Spread the word 🗣!  Take a screenshot of your plan and post it to your <br/> social platforms and/or share a link to votingplan.org on 
   <a target="_blank"
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvotingplan.org%2F&amp;src=sdkpreparse"
     class="fb-xfbml-parse-ignore red"> Facebook</a>, 
     <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://votingplan.org" className = "red" target = "_blank"> Twitter</a>,
      <a className = "red" href="https://www.linkedin.com/sharing/share-offsite/?url=https://votingplan.org" target = "_blank"> LinkedIn,</a> or <a className = "red" href = "https://instagram.com" target = "_blank"> Instagram </a> <br/> so others know how awesome it is to #MakeAPlan
(we'll also email you a copy of your plan)
                    </div> */}
               </div> : null

                }
                
                    <Modal
                    isOpen={mailModalTestRun}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeMailModalTestRun}
                    style={customStyles}
                    contentLabel="Modal"
                >
                        <div>
                           
                                <h4 style={{ marginTop: "3px" }}>
                                    Email incoming!
                                </h4>
                                <div style={{ marginBottom: "30px" }}>
                                    Please type your email address below
                                    </div>
                         
                            <form style={{ textAlign: 'center'}}>
                                        <input 
                                            type="input"
                                            className = "input"
                                            // style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                            // onKeyUp={onEmailFriends}
                                            onKeyUp={e => { setEmailMail(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                    <br/>
                                
                                <button className = "next" style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', paddingTop:'6px',paddingBottom:'6px', paddingLeft:'8px', paddingRight: '8px'}} 
                                onClick={(e)=>
                                    {showMailModal(false);
                                        e.preventDefault();
                                                   
                                        {handleMailSubmit()};
                                    
                                    setMailModalTestRun(false)
                                    // showEmailFriends(true)
                                    // showEmailFriends(false)
                                    // setMailIsOpen(false)
                                    // showComplete(true)
                                    // showConfetti(true)
                                }}
                                
                                >
                                    i'm done!
                                </button>

                            </form>
                        </div></Modal>

                {personEarly ?
                    <div className = "jumbotronX" >
                        <h1 className="question">
                        
                      When will you vote?
                            </h1>
                            <div style = {{textAlign: 'center'}}>
                            <a className = "clickHere" href ="https://ballotpedia.org/State_Poll_Opening_and_Closing_Times_(2022)" target = '_blank'> 
                            Picking a day helps make sure voting doesn't slip through the cracks. <span className = "underline">Click here</span>  to see when early voting opens in your state and pick a specific date between now and November 7th
                                 that works for your calendar right now!
                           </a>
                        </div>
                        <div style = {{marginTop: "30px"}}>
                            {/* <DatePicker
                                selected={startDatePerson}
                                onChange={handleDateChangePerson}
                                style = {{color: 'black !important'}}
                            /> */}
                            <input
                                    type="input"
                                    style={{  width: "250px", marginBottom: "30px" }}
                                    placeholder="write a specific date"
                                    onKeyUp= {
                                        e=> {showEarlyNextButton(true);
                                            // setStartDatePerson(e.target.value);
                                            setWhatDay(e.target.value);
                                     
                                         console.log(whatDay)
                                        }
                                    }
                                    // onKeyUp=  {() => { clearTimeout(typingTimer);
                                    //     if (startDatePerson) {
                                    //         typingTimer = setTimeout(doneTypingWhatDay, doneTypingInterval);
                                    //             }
                                    //         }
                                    //     }
                                    //  onChange={e => { 
                                        
                                         
                                    //  }}
                                        

                                />
                        </div>
                        <i id = "arrowPerson1" onClick = {() => {
                                   showBallotPlan(true);
                                   showPersonEarly(false);
                                   showEarlyNextButton(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                    </div> : null
                
                }
                 {earlyNextButton ? 
                        <button 
                        style = {{marginTop: '30px'}} className = "next"
                        onClick = {
                            ()=>{
                                showEarlyNextButton(false);
                                showPersonEarly2(true);
                                showPersonEarly(false)
                            }
                        }
                        >
                       next
                        </button>: null

                    } 
                {personEarly2 ?
                    <div className = "jumbotronX" >
                        <h1 className = "question">
                       
                            When will you go to your polling place on {whatDay}?
                            {/* {startDatePerson.toString().slice(0, 15).toUpperCase()} */}
                                </h1>
                        <div style = {{marginTop: "30px"}}className="form-check" >
                           
                                <button
                                   
                                    // onClick={onPersonEarly3
                                    onClick={e => { setWhatTime("before work");
                                    showPersonEarly3(true);
                                    showPersonEarly2(false) }}
                                >
                                before work
                            </button>
                        </div>
                        <div className="form-check" >
                            
                                <button
                                   
                                    // onClick={onPersonEarly3}
                                    onClick={e => { setWhatTime("during lunch"); 
                                    showPersonEarly3(true);
                                    showPersonEarly2(false)}}

                                >
                                during lunch
                            </button>
                        </div>
                        <div className="form-check">
                           
                                <button
                                   
                                    // onClick={onPersonEarly3}
                                    onClick={e => { setWhatTime("after work"); 
                                    showPersonEarly3(true);
                                    showPersonEarly2(false)}}
                                    
                                    style = {{paddingLeft: '20px', paddingRight: '20px'}}
                                >
                                after work
                            </button>
                        </div>
                        <div className="form-check">
                        
                                        <input
                                    type="input"
                                    placeholder="other (what's right for you?)"
                                    style={{ width: "250px", marginBottom: "30px" }}
                                    onKeyUp=  {
                                        ()=>{
                                            showEarly2NextButton(true)
                                        }
                                    }
                                    // {() => { clearTimeout(typingTimer);
                                    //     if (whatTime) {
                                    //         typingTimer = setTimeout(doneTypingWhatTime, doneTypingInterval);
                                    //             }
                                    //         }
                                    //     }
                                    onChange={e => { setWhatTime(e.target.value); }}
                                  

                               />
                            
                        </div>
                        <i id = "arrowPerson2" onClick = {() => {
                                 showPersonEarly2(false)
                                   showPersonEarly(true);
                                   showEarly2NextButton(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 

                    </div> : null
                }
                  {early2NextButton ? 
                        <button 
                        style = {{marginTop: '30px'}} className = "next"
                        onClick = {
                            ()=>{
                                showEarly2NextButton(false);
                                showPersonEarly3(true);
                                showPersonEarly2(false)
                            }
                        }
                        >
                       next
                        </button>: null

                    } 
                {personEarly3 ?
                    <div className = "jumbotronX" >
                        <form>
                            <h1 className = "question">
                           
                               How will you get to the polls?
                                </h1>
                                <div className="form-check" style={{ marginTop: "30px"}}>
                               
                               <button
                                
                                //    onClick={onPersonEarly4}
                                   onClick={e => { setGetToPolls("take a bus");
                                   showPersonEarly4(true);
                                   showPersonEarly3(false) }}

                               >
                               bus
                               </button>
                       </div>
                            
                            <div className="form-check">
                               
                               <button
                                   
                                //    onClick={onPersonEarly4}
                                   onClick={e => { setGetToPolls("bike");
                                   showPersonEarly4(true);
                                   showPersonEarly3(false) }}
                               >
                               bike
                               </button>
                       </div>
                            <div  className="form-check">
                                
                                    <button
                                      
                                        // onClick={onPersonEarly4}
                                        
                                        onClick={e => { setGetToPolls("walk");
                                        showPersonEarly4(true);
                                        showPersonEarly3(false) }}
                                    >
                                    walk
                                    </button>
                            </div>
                
                           
                            <div className="form-check">
                               
                               <button
                                 
                                //    onClick={onPersonEarly4}
                                   onClick={e => { setGetToPolls("drive");
                                   showPersonEarly4(true);
                                   showPersonEarly3(false) }}

                               >
                               drive
                               </button>
                       </div>
                       <div className="form-check">
                               
                               <button
                                  
                                //    onClick={onPersonEarly4}
                                   onClick={e => { setGetToPolls("carpool");
                                 showPersonEarly4(true);
                                 showPersonEarly3(false) }}

                               >
                               carpool
                       </button>
                       </div>
                            <div className="form-check">
                                
                                    <button
                                        
                                        // onClick={onPersonEarly4}
                                        onClick={e => { setGetToPolls("ride the subway");
                                        showPersonEarly4(true);
                                        showPersonEarly3(false) }}
                                    >
                                    subway
                                    </button>
                            </div>
                        
                           
                            <div className="form-check">
                                    <button
                                     
                                        // onClick={onPersonEarly4}
                                      
                                        onClick={e => { setGetToPolls("take a Lyft/Uber");
                                        showPersonEarly4(true);
                                        showPersonEarly3(false) }}

                                    >
                                    Lyft/Uber
                            </button>
                           
                            <div className="form-check">
                               
                                 
                                        <input
                                        type="input"
                                        placeholder="other (what's right for you?)"
                                        style={{  width: "250px"}}
                                        onKeyUp=  {
                                            ()=>[
                                                showEarly3NextButton(true)
                                            ]
                                        }
                                        // {() => { clearTimeout(typingTimer);
                                        // if (getToPolls) {
                                        //     typingTimer = setTimeout(doneTypingGetToPolls, doneTypingInterval);
                                        //         }
                                        //     }
                                        // }
                                        onChange={e => { setGetToPolls(e.target.value); }}

                                    />
                               
                            </div>
                            <i id = "arrowPerson3" 
                            style = {{marginBottom: '15px'}}
                            onClick = {() => {
                                 showPersonEarly3(false);
                                 showEarly3NextButton(false);
                                   showPersonEarly2(true)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                            </div>
                            
                        </form>
                    </div> : null
                }
                {early3NextButton ? 
                        <button 

                         className = "next bottom"
                        onClick = {
                            ()=>{
                                showEarly3NextButton(false);
                                showPersonEarly4(true);
                                showPersonEarly3(false)
                            }
                        }
                        >
                       next
                        </button>: null

                    } 
                {personEarly4 ?
                    <div className = "jumbotronX" >
                        <h1 className = "question">
                      
                        Who will you bring with you to vote?
                            </h1>
                            <div className = "bringWith red" style ={{textAlign: 'center'}}>
                            Voting is more fun with a friend! If you can bring someone, write their name below. And no worries if not, voting solo is AMAZING too.
                                </div>
                                <button style={{ marginTop: "30px"}}
                                onClick = {
                                    ()=>{
                                            setBringWith("");
                                            // showPersonEarly5(true)
                                            // showPersonEarly4(false)
                                            showFinishButtonEarly(true)

                                    }
                                }
                                
                                >
                                voting solo this time!
                                </button>
                        <form style={{ marginBottom: '30px', textAlign: 'center' }}>
                            
                            <input
                                type="input"
                                
                                onKeyDown ={onFinishButtonEarly}
                                placeholder = "my friend's name(s)"
                                onKeyUp={e => { 
                                   
                                    setBringWith(e.target.value)
                                    showFinishButtonEarly(true)
                                    // showEarly5NextButton(true);
                                   
                                     console.log(e.target.value) }}
                            />
                        </form>
                        <i id = "arrowPerson4" onClick = {() => {
                                   showPersonEarly3(true);
                                   showPersonEarly4(false);
                                   showFinishButtonEarly(false)
                                }
                                }  className="fa fa-arrow-left back"></i>
                                </div> : null
}

                                        {early5NextButton ? 
                                            <button 
                                            style = {{marginTop: '30px'}} className = "next"
                                            onClick = {
                                                ()=>{
                                                    showEarly5NextButton(false);
                                                    showPersonEarly5(true);
                                                    showPersonEarly4(false)
                                                }
                                            }
                                            >
                                           next
                                            </button>: null
                    
                                        } 
                {personEarly5 ?
                    <div className = "jumbotronX" >
                        <h1 className = "question">
                      
                        What's your first name (so we can personalize your plan)?
                            </h1>
                     
                               
                        <form style={{ marginBottom: '30px', textAlign: 'center' }}>
                            
                            <input
                                type="input"
                                
                                onKeyDown ={onFinishButtonEarly}
                                placeholder = "my name"
                                onKeyUp={e => { 
                                    setNameEarly(e.target.value);
                                     console.log(e.target.value) }}
                            />
                        </form>
                        <i id = "arrowPerson4" onClick = {() => {
                                   showPersonEarly4(true);
                                   showPersonEarly5(false);
                                   showFinishButtonEarly(false)
                                }
                                }  className="fa fa-arrow-left back"></i>
                        
                    </div> : null
                }
                {finishButtonEarly ?
                            <div style={{ textAlign: "center", marginTop: "30px" }}>
                                <button
                                    className="finishButton"
                                    onClick= { ()=> {if (bringWith){
                                        
                                        setBringWithFriendEarly(`I will bring ${bringWith} with me!`)
                                        // setBringWithFriendEarly({bringWith})
                                        }
                                        else {
                                            setBringWithFriendEarly("")
                                        }
                                    
                                        // showCompleteEarly(true)
                                        // showConfetti(true)
                                        showPersonEarly4(false);
                                        showEarlyModal(true);
                                        setEarlyIsOpen(true)
                                        showFinishButtonEarly(false)
                                    }
                                }
                                >
                                i'm finished
                                </button>
                        </div> : null}
                
            
                <Modal
                    isOpen={modalEarlyIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeEarlyModal}
                    style={customStyles}
                    contentLabel="Modal"
                >
                    {/* <i id="close" class="fa fa-times" onClick={closeMailModal}></i> */}
                    <div>
                        {earlyModal ?
                        <div>
                            {/* <h4 style={{ marginBottom: "30px" }}>
                                Awesome! You're almost done!
                                <div style={{ marginTop: "3px" }}>
                                    We just need your name and <br/>email address so we can send over your plan
                                </div>
                            </h4> */}
                            <h4 style={{ marginBottom: "30px" }}>
                            Awesome! You're Almost Done!
                                <div style={{ marginTop: "3px" }}>
                                Want a reminder to vote?<br></br> If so enter your email address below. Otherwise just click "i'm done" to see your plan!
                                    {/* We just need your name and <br/>email address so we can send over your plan */}
                                </div>
                            </h4>
                            <form style={{ textAlign: 'center'}}>
                                  
                                        <input style = {{marginRight: '15px'}}
                                            type="input"
                                            className = "input"
                                            // style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="first name"
                                             onKeyUp={e => { setNameEarly(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                   
                                   
                                        <input style = {{marginLeft: '15px'}}
                                            type="input"
                                            className = "input"
                                            // style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                            // onKeyUp={onEmailFriends}
                                            onKeyUp={e => { setEmailEarly(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                    <br/>
                                
                                <button className = "next" style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', paddingTop:'6px',paddingBottom:'6px', paddingLeft:'8px', paddingRight: '8px'}} 
                                onClick={(e)=>
                                    {showEarlyModal(false)
                                        e.preventDefault();
                                                   
                                        {handleEarlySubmit()};
                                    
                                    setTimeout( 
                                    setEarlyIsOpen(false),
                                    showCompleteEarly(true),
                                    showConfetti(true),
                                    showPersonEarly4(false),
                                    showFinishButtonEarly(false),
                                    console.log('confetti'), 10);
                                    // showEmailEarlyFriends(true)
                                }}
                                
                                >
                                    i'm done!
                                </button>

                            </form>
                        </div> : null
                        } 
                        {emailEarlyFriends ?
                            <div >
                                <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                    Hey that was easy! Who else should make a plan to vote right now?
                                </h4>
                                <form >
                                    
                                        <li>
                                            <input
                                                type="input"
                                                style = {{marginRight: '15px'}}
                                                placeholder="first name"
                                                onKeyUp={e => { setEarlyFriendName1(e.target.value); console.log(e.target.value) }}
                                                className = "input"
                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                                onKeyUp={e => { setEarlyFriendEmail1(e.target.value); console.log(e.target.value) }}
                                                className = "input"
                                            >
                                            </input>
                                        </li>
                                        <li>
                                            <input
                                                type="input"
                                                style = {{marginRight: '15px'}}
                                                placeholder="first name"
                                                onChange={e => { setEarlyFriendName2(e.target.value); console.log(e.target.value) }}
                                                className = "input"
                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                                onChange={e => { setEarlyFriendEmail2(e.target.value); console.log(e.target.value) }}
                                                className = "input"
                                            >
                                            </input>
                                        </li>
                                    
                                    <div style={{ textAlign: "center" }}>
                                        <button class = "modalFinish"
                                            style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', padding:'8px'}} 
                                            type = 'submit'
                                            onClick={(e) => 
                                                { 
                                                    e.preventDefault();
                                                   
                                                    {handleEarlySubmit()};
                                                
                                                setTimeout( 
                                                setEarlyIsOpen(false),
                                                showCompleteEarly(true),
                                                showConfetti(true),
                                                showPersonEarly4(false),
                                                showFinishButtonEarly(false),
                                                console.log('confetti'), 10);
                                             }}
                                        >
                                            i'm finished
                                    </button>
                                    </div>
                                </form>
                            </div> : null
                        }

                    </div>
                </Modal>
                {completeEarly ? 
                <div style = {{textAlign: 'center' }}>
                    <div className = "confetti" style = {{position: 'relative', bottom: '300px'}}>
                     <Confetti 
                        colors={["#004789", "#EF3D55"]}
                        numberOfPieces={1000}
                        recycle={false}
                        // initialVelocityX={{min:-200, max: 200}}
                        // initialVelocityY={{min:200, max: 200}}
                        // width={1800}
                        confettiSource=	{ {x: 550, y:-80}}
                        
                        />
                        </div>
                    {/* <h1 className="woohoo">
                        woohoo! you made a voting plan!
                    </h1>
                 
                    <div className = "planEarly" style = {{border: '#EF3D55 2px solid',borderRadius:'20px', textAlign: 'center',marginBottom: "20px", marginTop: "20px", paddingLeft: '10px', paddingRight: '10px', width: '50%', height: '300px', marginLeft: '25%',color: '#004789'}}>
        <h1 className="verbiage" style = {{ paddingTop: '10%'}}>
            {nameEarly}'s voting plan
            </h1>
            <br/>
            <br/>
            <h3>
        
        I will cast my ballot in person, early! 
        <br/>
        <br/>
        I plan to vote on {whatDay}, {whatTime.toLowerCase()}!
        <br/>
        <br/>
        I will {getToPolls.toLowerCase()} to the polls and I will bring {bringWith.toLowerCase()} with me!
        </h3> */}
                    {/* </div>     */}

                    {/* <div className = "whatnext">
                    what next? 2 things: <br/>
1) add your plan's details to your personal calendar 🗓 right now <br/>
2) spread the word 🗣!  take a screenshot of your plan and post it to your <br/> social platforms and/or share the voting plan site on <a className = "red" href="https://www.instagram.com/ldsomething/" target="_blank">facebook,</a> <a className = "red" href="https://www.facebook.com/LDSomething" target="_blank">twitter,</a> or <a className = "red" href="https://twitter.com/LDoSomething" target="_blank">linkedIn</a> <br/> so others know how awesome it is to #MakeAPlan
(we'll also email you a copy of your plan)
                    </div> */}
                    <h1 className="woohoo">
                        Woohoo! You made a Voting Plan!
                    </h1>
                
                    <button className = "planEarly" style = {{border: '#EF3D55 2px solid',borderRadius:'20px', textAlign: 'center',marginBottom: "20px", marginTop: "20px", paddingLeft: '10px', paddingRight: '10px', width: '300px', height: '300px',color: '#004789'}}>
        {/* <h4 className="verbiage" style = {{ fontWeight:'bolder'}}>
            {nameEarly}'s Voting Plan
            </h4> */}
            {nameEarly ?
            <h4 className="verbiage" style = {{ fontWeight:'bolder'}}>
                {nameEarly.charAt(0).toUpperCase()}{nameEarly.substring(1)}'s Voting Plan
{/* {nameEarly}'s Voting Plan */}
</h4> : <h4 className="verbiage" style = {{ fontWeight:'bolder'}}>
My '22 Voting Plan
</h4> 
            }
            <br/>
           
            <div>
            {/* <h1 className="verbiage" style = {{ paddingTop: '10%'}}>
            {nameEarly}'s voting plan
            </h1> */}
            
           
            {/* <div className = "inPersonEarly"> */}
        
        I will cast my ballot in person, early! 
        <br/>
        <br/>
        I plan to vote on {whatDay}, {whatTime.toLowerCase()}!
        <br/>
        <br/>
        I will {getToPolls.toLowerCase()} to the polls! 
        <br />
        <br />
       {bringWithFriendEarly}
        </div>
        {/* </div> */}
        </button>
        <div className = "whatnext">
        {/* <button  className='shareButton' id='fbButton'>
            <a target="_blank"
        id='fbLink'
        // style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', padding:'8px'}} 
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvotingplan.org%2F&amp;src=sdkpreparse"
    >Share to Facebook!</a></button> 
     <button  class='shareButton' 
      id='twitterButton' >
    <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://votingplan.org"
    target = "_blank"
       id='twitterLink'>Share to Twitter!</a></button> */}
               What next? Take a screenshot of your plan and text it to 3 friends! Then ask them to make a plan too :)

       </div>
                  
        {/* <div className = "whatnext">
                    What next? 2 things: <br/><br/>
1) Add your plan's details to your personal calendar 🗓 right now <br/><br/>
2) Spread the word 🗣!  Take a screenshot of your plan and post it to your <br/> social platforms and/or share a link to votingplan.org on 
   <a target="_blank"
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvotingplan.org%2F&amp;src=sdkpreparse"
     class="fb-xfbml-parse-ignore red"> Facebook</a>, 
     <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://votingplan.org" className = "red" target = "_blank"> Twitter</a>,
      <a className = "red" href="https://www.linkedin.com/sharing/share-offsite/?url=https://votingplan.org" target = "_blank"> LinkedIn,</a> or <a className = "red" href = "https://instagram.com" target = "_blank"> Instagram </a> <br/> so others know how awesome it is to #MakeAPlan
(we'll also email you a copy of your plan)
                    </div> */}
               </div> : null

                }
                {/* <Modal
                    isOpen={modalEarlyIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeEarlyModal}
                    style={customStyles}
                    contentLabel="Modal"
                >
                    <i id="closeEarly" class="fa fa-times" onClick={closeEarlyModal}></i>
                    <div>
                        <div>
                            <h4 style={{ marginBottom: "30px" }}>
                                awesome! you're almost done
                                <div style={{ marginTop: "3px" }}>
                                    we just need to your name and email address so we can send over your plan
                                </div>
                            </h4>
                            <form style={{ textAlign: "left" }}>
                                <ul>
                                    <li style={{ listStyleType: "none" }}>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="name"
                                            onChange={e => { setNameEarly(e.target.value); }}

                                        >
                                        </input>
                                    </li>
                                    <li style={{ listStyleType: "none" }}>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                            onKeyUp={onEmailFriends}
                                            onChange={e => { setEmailEarly(e.target.value); }}

                                        >
                                        </input>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        {emailFriends ?
                            <div>
                                <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                    hey that was easy! who else should make a plan to vote right now?
                                </h4>
                                <form onSubmit={handleEarlySubmit} style={{ textAlign: "left" }}>
                                    <ol>
                                        <li>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789" }}
                                                placeholder="name"
                                                onChange={e => { setEarlyFriendName1(e.target.value); }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789", marginLeft: "13px" }}
                                                placeholder="email address"
                                                onChange={e => { setEarlyFriendEmail1(e.target.value); }}

                                            >
                                            </input>
                                        </li>
                                        <li>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789" }}
                                                placeholder="name"
                                                onChange={e => { setEarlyFriendName2(e.target.value); }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789", marginLeft: "13px" }}
                                                placeholder="email address"
                                                onChange={e => { setEarlyFriendEmail2(e.target.value); }}

                                            >
                                            </input>
                                        </li>
                                    </ol>
                                    <div style={{ textAlign: "center" }}>
                                        <button
                                            class="btn btn-primary mailButton"
                                            type="submit"
                                        >
                                            i'm finished
                                    </button>
                                    </div>
                                </form>
                            </div> : null
                        }

                    </div>
                </Modal> */}
                {personElection ?
                    <div className = "jumbotronX" >
                        <h1 className = "question">
                        
                            When will you vote?
                            </h1>
                            <div style = {{textAlign:'center'}}>
                            <a className = "clickHere" href = "https://ballotpedia.org/State_Poll_Opening_and_Closing_Times_(2020)" target = "_blank">
                                Picking a time helps to make sure voting will happen. <span className = "underline">Click here</span> to see when the polls <br/>are open in your state and pick a time that is likely to work for you right now!

                                </a>
                                </div>
                                
                        <div className="form-check" style = {{marginTop : "30px"}}>
                          
                                <button
                                  
                                    // onClick={onPersonElection2}
                                 
                                    onClick={e => { setWhatTimeElection("before work");
                                    showPersonElection2(true);
                                    showPersonElection(false); }}
                                >
                                before work
                        </button>
                        </div>
                        <div className="form-check">
                            
                                <button
                                   
                                    // onClick={onPersonElection2}
                                
                                    onClick={e => { setWhatTimeElection("during lunch");
                                    showPersonElection2(true);
                                    showPersonElection(false); }}
                                >
                                during lunch
                        </button>
                        </div>
                        <div className="form-check" >
                            
                                <button
                                   
                                    // onClick={onPersonElection2}
                                
                                    onClick={e => { setWhatTimeElection("after work");
                                    showPersonElection2(true);
                                    showPersonElection(false); }}
                                >
                                after work
                        </button>
                        </div>
                        <div className="form-check">
                            
                                    <input
                                    type="input"
                                    placeholder= "other (what's right for you?)"
                                    style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px", marginBottom: "30px" }}
                                    onKeyUp=  {
                                        ()=>{
                                                showElectionNextButton(true)
                                        }
                                    }
                                    // {() => { clearTimeout(typingTimer);
                                    //     if (whatTimeElection) {
                                    //         typingTimer = setTimeout(doneTypingWhatTimeElection, doneTypingInterval);
                                    //             }
                                    //         }
                                    //     }
                                    onChange={e => { setWhatTimeElection(e.target.value); console.log(e.target.value); }}
                                />
                           
                        </div>
                        <i id = "arrowElection" onClick = {() => {
                                   showBallotPlan(true);
                                   showPersonElection(false);
                                   showElectionNextButton(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                    </div> : null
                }
                  {electionNextButton ? 
                        <button 

                         className = "next"
                        onClick = {
                            ()=>{
                                showElectionNextButton(false);
                                showPersonElection2(true);
                                showPersonElection(false)
                            }
                        }
                        >
                       next
                        </button>: null

                    } 
                {personElection2 ?
                    <div className = "jumbotronX" >
                        <form>
                            <h1 className = "question">
                           
                               How will you get to the polls?
                                </h1>
                                <div className="form-check" style={{ marginTop: "30px"}}>
                               
                               <button
                                
                                //    onClick={onPersonEarly4}
                                   onClick={e => { setGetToPollsElection("take a bus");
                                   showPersonElection3(true);
                                   showPersonElection2(false) }}

                               >
                               bus
                               </button>
                       </div>
                            
                            <div className="form-check">
                               
                               <button
                                   
                                //    onClick={onPersonEarly4}
                                   onClick={e => { setGetToPollsElection("bike");
                                   showPersonElection3(true);
                                   showPersonElection2(false) }}
                               >
                               bike
                               </button>
                       </div>
                            <div  className="form-check">
                                
                                    <button
                                      
                                        // onClick={onPersonEarly4}
                                        
                                        onClick={e => { setGetToPollsElection("walk");
                                        showPersonElection3(true);
                                        showPersonElection2(false) }}
                                    >
                                    walk
                                    </button>
                            </div>
                
                           
                            <div className="form-check">
                               
                               <button
                                 
                                //    onClick={onPersonEarly4}
                                   onClick={e => { setGetToPollsElection("drive");
                                   showPersonElection3(true);
                                   showPersonElection2(false)}}

                               >
                               drive
                               </button>
                       </div>
                       <div className="form-check">
                               
                               <button
                                  
                                //    onClick={onPersonEarly4}
                                   onClick={e => { setGetToPollsElection("carpool");
                                   showPersonElection3(true);
                                   showPersonElection2(false) }}

                               >
                               carpool
                       </button>
                       </div>
                            <div className="form-check">
                                
                                    <button
                                        
                                        // onClick={onPersonEarly4}
                                        onClick={e => { setGetToPollsElection("ride the subway");
                                        showPersonElection3(true);
                                        showPersonElection2(false) }}
                                    >
                                    subway
                                    </button>
                            </div>
                        
                           
                            <div className="form-check">
                                    <button
                                     
                                        // onClick={onPersonEarly4}
                                      
                                        onClick={e => { setGetToPollsElection("take a Lyft/Uber");
                                        showPersonElection3(true);
                                   showPersonElection2(false) }}

                                    >
                                    Lyft/Uber
                            </button>
                           
                            <div className="form-check">
                               
                                 
                                        <input
                                        type="input"
                                        placeholder="other (what's right for you?)"
                                        style={{  width: "250px"}}
                                        onKeyUp=  {
                                            ()=>[
                                                showElection2NextButton(true)
                                            ]
                                        }
                                        // {() => { clearTimeout(typingTimer);
                                        // if (getToPolls) {
                                        //     typingTimer = setTimeout(doneTypingGetToPolls, doneTypingInterval);
                                        //         }
                                        //     }
                                        // }
                                        onChange={e => { setGetToPollsElection(e.target.value); }}

                                    />
                               
                            </div>
                            <i id = "arrowPerson3" 
                            style = {{marginBottom: '15px'}}
                            onClick = {() => {
                                 showPersonElection2(false);
                                 showElection2NextButton(false);
                                   showPersonElection(true)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                            </div>
                            
                        </form>
                    </div> : null
                }
                {election2NextButton ? 
                        <button 

                         className = "next bottom"
                        onClick = {
                            ()=>{
                                showElection2NextButton(false);
                                showPersonElection3(true);
                                showPersonElection2(false)
                            }
                        }
                        >
                       next
                        </button>: null

                    } 
                {personElection3 ?
                    <div className = "jumbotronX" >
                        <h1 className = "question">
                       
                                
                                Do you need to take off work or secure childcare?
                           
                            </h1>
                        <form  style={{ marginTop: "30px" }}>
                            <div className="form-check">
                             
                                    <button
                                     
                                     
                                        // onClick={onPersonElection4}
                                      
                                        onClick={e => { setTakeOffWork("I don't need to take off work or secure childcare");
                                        showPersonElection4(true);
                                        showPersonElection3(false) }}
                                    >
                                    no
                                    </button>
                            </div>
                            <div className="form-check">
                             
                                         <input
                                        type="input"
                                        placeholder="yes (what's right for you?)"
                                        onKeyUp={
                                            ()=>{
                                                showElection3NextButton(true)
                                            }
                                        }
                                        // {() => { clearTimeout(typingTimer);
                                        //     if (takeOffWork) {
                                        //         typingTimer = setTimeout(doneTypingTakeOffWork, doneTypingInterval);
                                        //             }
                                        //         }
                                        //     }
                                        onChange={e => { setTakeOffWork(e.target.value); console.log(e.target.value) }}

                                    />
                               
                            </div>
                        </form>
                        <i id = "arrowElection3" 
                        style = {{marginTop:'30px'}}
                        onClick = {() => {
                                   showPersonElection2(true);
                                   showPersonElection3(false);
                                   showElection3NextButton(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                    </div> : null
                }
                 {election3NextButton ? 
                        <button 

                         className = "next"
                        onClick = {
                            ()=>{
                                showElection3NextButton(false);
                                showPersonElection4(true);
                                showPersonElection3(false)
                            }
                        }
                        >
                       next
                        </button>: null

                    } 
                {personElection4 ?
                    <div className = "jumbotronX" >
                        <h3 className = "question">
                   
                        Who will you bring with you to vote?
                            </h3>
                            <div className = "bringWith red" style ={{textAlign: 'center'}}>
                            Voting is more fun with a friend! If you can bring someone, write their name below. And no worries if not, voting solo is AMAZING too.
                                </div><button style={{ marginTop: "30px"}}
                                onClick = {
                                    ()=>{
                                            setBringWithElection("");
                                            showFinishButtonElection(true)
                                    }
                                }
                                
                                >
                                voting solo this time!
                                </button>
                        <form style={{ marginBottom: '30px', textAlign: 'center' }}>
                            
                            <input
                                type="input"
                                
                                onKeyDown ={onFinishButtonElection}
                                placeholder = "my friend's name(s)"
                                onKeyUp={e => { 
                                   
                                    setBringWithElection(e.target.value);
                                   
                                       
                                     console.log(e.target.value) }}
                            />
                        </form>
                        {/* <form style={{ marginTop: "30px", marginBottom: '30px', textAlign: 'center' }}>
                            <input
                                type="input"
                                style={{ marginLeft: "7px", border: "1px solid black", width: "300px" }}
                                onKeyUp={onFinishButtonElection}
                                onChange={e => { if (bringWithElection ==='no' || 'No' || 'NO'){
                                    setBringWithElection("nobody")
                                }
                                else (
                                setBringWithElection(e.target.value)
                                );   
                                 console.log(e.target.value) }}
                                 
                            />
                        </form> */}
                        <i id = "arrowElection4" onClick = {() => {
                                   showPersonElection3(true);
                                   showPersonElection4(false);
                                   showFinishButtonElection(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                        {finishButtonElection ?
                            <div style={{ textAlign: "center", marginTop: "30px" }}>
                                    <button
                                    className="finishButton"
                                    onClick= { ()=> {if (bringWithElection){
                                        
                                        setBringWithFriendElection(`I will bring ${bringWithElection} with me!`)
                                        // setBringWithFriendElection(JSON.stringify(bringWithElection))

                                        }
                                        else {
                                            setBringWithFriendElection("")
                                        }
                                    
                                        setElectionIsOpen(true);
                                        
                                    }
                                }
                                >
                                    i'm finished
                                    </button>
                            </div> : null}
                    </div> : null
                }<Modal
                isOpen={modalElectionIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeElectionModal}
                style={customStyles}
                contentLabel="Modal"
            >
                {/* <i id="close" class="fa fa-times" onClick={closeMailModal}></i> */}
                <div>
                    {electionModal ?
                    <div>
                        {/* <h4 style={{ marginBottom: "30px" }}>
                            Awesome! You're almost done!
                            <div style={{ marginTop: "3px" }}>
                                We just need your name and <br/>email address so we can send over your plan
                            </div>
                        </h4> */}
                        <h4 style={{ marginBottom: "30px" }}>
                            Awesome! You're Almost Done!
                                <div style={{ marginTop: "3px" }}>
                                Want a reminder to vote?<br></br> If so enter your email address below. Otherwise just click "i'm done" to see your plan!
                                    {/* We just need your name and <br/>email address so we can send over your plan */}
                                </div>
                            </h4>
                        <form style={{ textAlign: 'center'}}>
                              
                                    <input style = {{marginRight: '15px'}}
                                        type="input"
                                        // style={{ width: "300px", border: "1px solid #004789" }}
                                        placeholder="first name"
                                        className = "input"
                                         onKeyUp={e => { setNameElection(e.target.value); console.log(e.target.value) }}
                                    >
                                    </input>
                               
                               
                                    <input style = {{marginLeft: '15px'}}
                                        type="input"
                                         className = "input"
                                        // style={{ width: "300px", border: "1px solid #004789" }}
                                        placeholder="email address"
                                        // onKeyUp={onEmailFriends}
                                        onKeyUp={e => { setEmailElection(e.target.value); console.log(e.target.value) }}
                                    >
                                    </input>
                                <br/>
                            
                            <button className = "next" style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', paddingTop:'6px',paddingBottom:'6px', paddingLeft:'8px', paddingRight: '8px'}} 
                            onClick={(e)=>
                                {showElectionModal(false);
                                    e.preventDefault();
                                               
                                    {handleElectionSubmit()};
                                
                                setTimeout( 
                                setElectionIsOpen(false),
                                showCompleteElection(true),
                                showConfetti(true),
                                showPersonElection4(false),
                                showFinishButtonElection(false),
                                console.log('confetti'), 10);
                                // showEmailElectionFriends(true)
                            }}
                            
                            >
                                i'm done
                            </button>

                        </form>
                    </div> : null
                    } 
                    {emailElectionFriends ?
                        <div >
                            <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                Hey that was easy! Who else should make a plan to vote right now?
                            </h4>
                            <form >
                                
                                    <li>
                                        <input
                                            type="input"
                                            className = "input"
                                            style = {{marginRight: '15px'}}
                                            placeholder="first name"
                                            onKeyUp={e => { setElectionFriendName1(e.target.value); console.log(e.target.value) }}

                                        >
                                        </input>
                                        <input
                                            type="input"
                                             className = "input"
                                            style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                            onKeyUp={e => { setElectionFriendEmail1(e.target.value); console.log(e.target.value) }}

                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style = {{marginRight: '15px'}}
                                            placeholder="first name"
                                            onChange={e => { setElectionFriendName2(e.target.value); console.log(e.target.value) }}
                                            className = "input"
                                        >
                                        </input>
                                        <input
                                            type="input"
                                            style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                            onChange={e => { setElectionFriendEmail2(e.target.value); console.log(e.target.value) }}
                                            className = "input"
                                        >
                                        </input>
                                    </li>
                                
                                <div style={{ textAlign: "center" }}>
                                    <button class = "modalFinish"
                                        style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', padding:'8px'}} 
                                        type = 'submit'
                                        onClick={(e) => 
                                            { 
                                                e.preventDefault();
                                               
                                                {handleElectionSubmit()};
                                            
                                            setTimeout( 
                                            setElectionIsOpen(false),
                                            showCompleteElection(true),
                                            showConfetti(true),
                                            showPersonElection4(false),
                                            showFinishButtonElection(false),
                                            console.log('confetti'), 10);
                                         }}
                                    >
                                        i'm finished
                                </button>
                                </div>
                            </form>
                        </div> : null
                    }

                </div>
            </Modal>
            {completeElection ? 
            <div style = {{textAlign: 'center' }}>
                <div className = "confetti" style = {{position: 'relative', bottom: '300px'}}>
                 <Confetti 
                    colors={["#004789", "#EF3D55"]}
                    numberOfPieces={1000}
                    recycle={false}
                    // initialVelocityX={{min:-200, max: 200}}
                    // initialVelocityY={{min:200, max: 200}}
                    // width={1800}
                    confettiSource=	{ {x: 550, y:-80}}
                    
                    />
                    </div>
                <h1 className="woohoo">
                    Woohoo! You made a voting plan!
                </h1>
             
                <button className = "planElection" style = {{border: '#EF3D55 2px solid',borderRadius:'20px', textAlign: 'center',marginBottom: "20px", marginTop: "20px", paddingLeft: '10px', paddingRight: '10px', width: '300px', height: '300px', color: '#004789'}}>
                {/* <h4 className="phoneElection" style = {{ fontWeight:'bolder'}}>
            {nameElection}'s Voting Plan
            </h4> */}
            {nameElection ?
            <h4 className="phoneElection" 
            // className="verbiage"
             style = {{ fontWeight:'bolder'}}>
{nameElection.charAt(0).toUpperCase()}{nameElection.substring(1)}'s Voting Plan
</h4> : <h4 className="phoneElection" 
// className="verbiage"
 style = {{ fontWeight:'bolder'}}>
My '22 Voting Plan
</h4> 
            }
            <div className = 'verbiageElection'>
    I will cast my ballot in person, on election day on November 8th! 
    <br/>
    <br/>
    I plan to vote {whatTimeElection}!
    <br/>
    <br/>
    {takeOffWork}!
    <br/>
    <br/>
    I will {getToPollsElection} to the polls! 
    <br/>
    <br/> 
   {bringWithFriendElection}
    </div>
                </button>    
                <div className = "whatnext">
    
        {/* <button  className='shareButton' id='fbButton'>
            <a target="_blank"
        id='fbLink'
        // style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', padding:'8px'}} 
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvotingplan.org%2F&amp;src=sdkpreparse"
    >Share to Facebook!</a></button> 
     <button  class='shareButton' 
      id='twitterButton' >
    <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://votingplan.org"
    target = "_blank"
       id='twitterLink'>Share to Twitter!</a></button> */}
               What next? Take a screenshot of your plan and text it to 3 friends! Then ask them to make a plan too :)



            </div>
                {/* <div className = "whatnext">
                    What next? 2 things: <br/><br/>
1) Add your plan's details to your personal calendar 🗓 right now <br/><br/>
2) Spread the word 🗣!  Take a screenshot of your plan and post it to your <br/> social platforms and/or share a link to votingplan.org on 
   <a target="_blank"
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvotingplan.org%2F&amp;src=sdkpreparse"
     class="fb-xfbml-parse-ignore red"> Facebook</a>, 
     <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://votingplan.org" className = "red" target = "_blank"> Twitter</a>,
      <a className = "red" href="https://www.linkedin.com/sharing/share-offsite/?url=https://votingplan.org" target = "_blank"> LinkedIn,</a> or <a className = "red" href = "https://instagram.com" target = "_blank"> Instagram </a> <br/> so others know how awesome it is to #MakeAPlan
(we'll also email you a copy of your plan)
                    </div> */}
           </div> : null

            }


<InstagramEmbed
  url='https://instagram.com'
  clientAccessToken='457880942873076 | 3b1cf9340228cf04d077c6b5bd77394e'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
                {/* <Modal
                    isOpen={modalElectionIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeEarlyModal}
                    style={customStyles}
                    contentLabel="Modal"
                >
                    <i id="closeElection" class="fa fa-times" onClick={closeElectionModal}></i>
                    <div>
                        <div>
                            <h4 style={{ marginBottom: "30px" }}>
                                awesome! you're almost done
                                <div style={{ marginTop: "3px" }}>
                                    we just need to your name and email address so we can send over your plan
                                </div>
                            </h4>
                            <form style={{ textAlign: "left" }}>
                                <ul>
                                    <li style={{ listStyleType: "none" }}>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="name"
                                            onChange={e => { setNameElection(e.target.value); console.log(e.target.value); }}

                                        >
                                        </input>
                                    </li>
                                    <li style={{ listStyleType: "none" }}>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                            onKeyUp={onEmailFriends}
                                            onChange={e => { setEmailElection(e.target.value); console.log(e.target.value); }}

                                        >
                                        </input>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        {emailFriends ?
                            <div>
                                <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                    hey that was easy! who else should make a plan to vote right now?
                                </h4>
                                <form onSubmit={handleElectionSubmit} style={{ textAlign: "left" }}>
                                    <ol>
                                        <li>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789" }}
                                                placeholder="name"
                                                onChange={e => { setElectionFriendName1(e.target.value); console.log(e.target.value); }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789", marginLeft: "13px" }}
                                                placeholder="email address"
                                                onChange={e => { setElectionFriendEmail1(e.target.value); console.log(e.target.value); }}

                                            >
                                            </input>
                                        </li>
                                        <li>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789" }}
                                                placeholder="name"
                                                onChange={e => { setElectionFriendName2(e.target.value); console.log(e.target.value); }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789", marginLeft: "13px" }}
                                                placeholder="email address"
                                                onChange={e => { setElectionFriendEmail2(e.target.value); console.log(e.target.value); }}

                                            >
                                            </input>
                                        </li>
                                    </ol>
                                    <div style={{ textAlign: "center" }}>
                                        <button
                                            class="btn btn-primary mailButton"
                                            type="submit"
                                        >
                                            i'm finished
                                    </button>
                                    </div>
                                </form>
                            </div> : null
                        }

                    </div>
                </Modal> */}

            </div>
        </div>
    )
}

export default MainPlan;