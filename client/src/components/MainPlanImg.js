import React, { useState, useRef } from 'react';
import "../assets/css/mainPlan.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import API from "../utils/API";
import Export from "./Export";
// import useWindowSize from 'react-use-window-size';
import Confetti from 'react-confetti';
import Link from 'react-router-dom/Link';
import castBallotImage from "../assets/images/castBallot.png";
import exclamation from "../assets/images/exclamation.png"

Modal.setAppElement(document.getElementById('root'));

function MainPlan() {


    var typingTimer;                //timer identifier
    var doneTypingInterval = 8000;  //time in ms (5 seconds)

    // const { width, height } = useWindowSize()

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
            zIndex: 32462983469238469238469238462398
        }
    };

    const [mail, showMail] = useState(false);
    const [personEarly, showPersonEarly] = useState(false);
    const [personEarly2, showPersonEarly2] = useState(false);
    const [personEarly3, showPersonEarly3] = useState(false);
    const [personEarly4, showPersonEarly4] = useState(false);
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
    const [ballotPlan, showBallotPlan] = useState(true);
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
    const [electionNextButton, showElectionNextButton] = useState(false);
    const [election2NextButton, showElection2NextButton] = useState(false);
    const [election3NextButton, showElection3NextButton] = useState(false);



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

        API.emailEarly({ nameEarly, emailEarly, castBallotHowEarly, whatDay, whatTime, getToPolls, bringWith }).catch(err => console.log(err));

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

        API.emailElection({ nameElection, emailElection, castBallotHowElection, whatTimeElection, getToPollsElection, bringWithElection, takeOffWork }).catch(err => console.log(err));

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
            {ballotPlan ?
            <div className = "jumbotronX" style={{ marginBottom: "30px" }}>
                
                    <h1 class = "question" >
                    
                    how do you plan to cast your ballot?
                        </h1>
                        {/* <img id = "castBallotImage" src = {castBallotImage} /> */}
                        <div style = {{textAlign: 'center', marginBottom: '30px'}}>
                       <a className = "clickHere" href = "https://www.headcount.org/state" target = "_blank"><b>
                           *not sure yet? don't worry! <span className = "underline">click here</span> for more info on the options in your state and/or reach out to us at letsdosomething2020@gmail.com with any questions at all, we're happy to help!
                           </b> </a>
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
                            in person, on election day (november 3rd!)
                            </button>
                    </div>
                
            </div> : null }
            <div>
                {mail ?
                    <div className = "jumbotronX" style = {{textAlign:'center'}}>
                                <h1 className = "question">
                             
                                when will you fill in and mail back your ballot?
                                {/* when will you fill in and mail back your ballot? */}
                                </h1>
                                <div className="form-check" style = {{marginTop: '30px'}}>
                               
                               <button
                                  
                                //    onClick={onFinishButtonMail}
                                   onClick={e => { setMailBallotWhen("the weekend after I receive my ballot");
                                   showFinishButtonMail(true) }}

                               >
                               the weekend after I receive my ballot
                               </button>
                       </div>
                            <div  className="form-check">
                               
                                    <button
                                      
                                    
                                        // onClick={onFinishButtonMail}
                                        onClick={e => { setMailBallotWhen("the minute it arrives in the mail (can’t wait!)");
                                        showFinishButtonMail(true) }}

                                    >
                                    the minute it arrives in the mail (can’t wait!)
                           </button>
                            </div>
                            <div className="form-check">
                                
                                    <button
                                      
                                        // onClick={onFinishButtonMail}
                                        onClick={e => { setMailBallotWhen("before I go to sleep the night it arrives in the mail");
                                        showFinishButtonMail(true) }}

                                    >
                                    before I go to sleep the night it arrives in the mail
                                    </button>
                            </div>
                       
                            <div className="form-check">
                                        <input id = "mailOther"
                                        type="input"
                                        // style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px" }}
                                        // onKeyUp=  {onFinishButtonMail}
                                        onKeyUp={e => { setMailBallotWhen(e.target.value); 
                                            console.log(e.target.value);
                                            showFinishButtonMail(true) }}
                                        placeholder="other (what's right for you?)"
                                    />
                               
                                </div>
                                <i style = {{textAlign:'center', marginTop: '30px'}} id = "arrowMail" onClick = {() => {
                                   showBallotPlan(true);
                                   showMail(false);
                                   showFinishButtonMail(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                               
                        {finishButtonMail ?
                            <div style={{ textAlign: "center", marginTop: "30px" }}>
                                <button class = "finishButton"
                                    
                                    onClick={openMailModal}
                                >
                                    i'm finished
                                    </button>
                            </div> : null}
                    </div>
                    : null
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
                                awesome! you're almost done!
                                <div style={{ marginTop: "3px" }}>
                                    we just need to your name and <br/>email address so we can send over your plan
                                </div>
                            </h4>
                            <form style={{ textAlign: 'center'}}>
                                  
                                        <input style = {{marginRight: '15px'}}
                                            type="input"
                                            // style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="name"
                                             onKeyUp={e => { setNameMail(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                   
                                   
                                        <input style = {{marginLeft: '15px'}}
                                            type="input"
                                            // style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                            // onKeyUp={onEmailFriends}
                                            onKeyUp={e => { setEmailMail(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                    <br/>
                                
                                <button className = "next" style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', paddingTop:'6px',paddingBottom:'6px', paddingLeft:'8px', paddingRight: '8px'}} 
                                onClick={()=>
                                    {showMailModal(false);
                                    showEmailFriends(true)
                                }}
                                
                                >
                                    next
                                </button>

                            </form>
                        </div> : null
                        } 
                        {emailFriends ?
                            <div >
                                <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                    hey that was easy! who else should make a plan to vote right now?
                                </h4>
                                <form >
                                    
                                        <li>
                                            <input
                                                type="input"
                                                style = {{marginRight: '15px'}}
                                                placeholder="name"
                                                onKeyUp={e => { setMailFriendName1(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                                onKeyUp={e => { setMailFriendEmail1(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                        </li>
                                        <li>
                                            <input
                                                type="input"
                                                style = {{marginRight: '15px'}}
                                                placeholder="name"
                                                onChange={e => { setMailFriendName2(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                            <input
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
                                                   
                                                    {handleMailSubmit()};
                                                
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
                    <div style = {{position: 'relative', bottom: '300px'}}>
                     <Confetti 
                        colors={["#004789", "#EF3D55"]}
                        numberOfPieces={1000}
                        recycle={false}
                        // initialVelocityX={{min:-200, max: 200}}
                        // initialVelocityY={{min:200, max: 200}}
                        // width={1800}
                        confettiSource=	{ {x: 450, y:-80}}
                        
                        />
                        </div>
                    <h1>
                        woohoo! you made a voting plan!
                    </h1>
                    <div>
                    <div style = {{border: '#EF3D55 2px solid',borderRadius:'20px', textAlign: 'center',marginBottom: "20px", marginTop: "20px", paddingLeft: '10px', paddingRight: '10px', width: '50%', height: '300px', marginLeft: '25%',color: '#004789'}}>
        <h3 style = {{ paddingTop: '20%'}}>
        i will cast my ballot by mail! <br/> and i will do it {mailBallotWhen.toLowerCase()}!
        </h3>
        </div>
                    </div>    

                    <h5>
                    what next? 2 things: <br/>
1) add your plan's details to your personal calendar 🗓 right now <br/>
2) spread the word 🗣!  take a screenshot of your plan and post it to your <br/> social platforms and/or share the voting plan site on <a className = "red" href="https://www.instagram.com/ldsomething/" target="_blank">facebook,</a> <a className = "red" href="https://www.facebook.com/LDSomething" target="_blank">twitter,</a> or <a className = "red" href="https://twitter.com/LDoSomething" target="_blank">linkedIn</a> <br/> so others know how awesome it is to #MakeAPlan
(we'll also email you a copy of your plan)
                    </h5>
               </div> : null

                }

                {personEarly ?
                    <div className = "jumbotronX" >
                        <h1 className="question">
                        
                      when will you vote?
                            </h1>
                            <div style = {{textAlign: 'center'}}>
                            <a className = "clickHere" href ="https://www.vote.org/early-voting-calendar/" target = '_blank'> 
                            picking a day helps make sure voting doesn't slip through the cracks <span className = "underline">click here</span>  to see when early voting opens in your state and pick a specific date between now and November 2nd
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
                                        ()=> {showEarlyNextButton(true)}
                                    }
                                    // onKeyUp=  {() => { clearTimeout(typingTimer);
                                    //     if (startDatePerson) {
                                    //         typingTimer = setTimeout(doneTypingWhatDay, doneTypingInterval);
                                    //             }
                                    //         }
                                    //     }
                                     onChange={e => { setStartDatePerson(e.target.value);
                                        
                                         setWhatDay(startDatePerson.toString());
                                     
                                         console.log(whatDay)
                                     }}
                                        

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
                       
                            when will you go to your polling place on {startDatePerson.toLowerCase()}?
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
                           
                               how will you get to the polls?
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
                      
                            can you bring anyone with you to vote?
                            </h1>
                            <div className = "bringWith red" style ={{textAlign: 'center'}}>
                               voting is more fun with a friend!
                                if you can bring someone, write their name here, 
                                 solo voting is A++ as well so no worries if not.
                                </div>

                        <form style={{ marginTop: "30px", marginBottom: '30px', textAlign: 'center' }}>
                            <input
                                type="input"
                                
                                onKeyUp={onFinishButtonEarly}
                                onChange={e => { 
                                    if (bringWith ==='no' || 'No' || 'NO'){
                                        setBringWith("nobody")
                                    }
                                    else (
                                    setBringWith(e.target.value)
                                    );   
                                     console.log(e.target.value) }}
                            />
                        </form>
                        <i id = "arrowPerson4" onClick = {() => {
                                   showPersonEarly3(true);
                                   showPersonEarly4(false)
                                }
                                }  className="fa fa-arrow-left back"></i>
                        {finishButtonEarly ?
                            <div style={{ textAlign: "center", marginTop: "30px" }}>
                                <button
                                    className="finishButton"
                                    onClick={openEarlyModal}
                                >
                                    i'm finished
                                    </button>
                            </div> : null}
                    </div> : null
                }
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
                            <h4 style={{ marginBottom: "30px" }}>
                                awesome! you're almost done!
                                <div style={{ marginTop: "3px" }}>
                                    we just need to your name and <br/>email address so we can send over your plan
                                </div>
                            </h4>
                            <form style={{ textAlign: 'center'}}>
                                  
                                        <input style = {{marginRight: '15px'}}
                                            type="input"
                                            // style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="name"
                                             onKeyUp={e => { setNameEarly(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                   
                                   
                                        <input style = {{marginLeft: '15px'}}
                                            type="input"
                                            // style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                            // onKeyUp={onEmailFriends}
                                            onKeyUp={e => { setEmailEarly(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                    <br/>
                                
                                <button className = "next" style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', paddingTop:'6px',paddingBottom:'6px', paddingLeft:'8px', paddingRight: '8px'}} 
                                onClick={()=>
                                    {showEarlyModal(false);
                                    showEmailEarlyFriends(true)
                                }}
                                
                                >
                                    next
                                </button>

                            </form>
                        </div> : null
                        } 
                        {emailEarlyFriends ?
                            <div >
                                <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                    hey that was easy! who else should make a plan to vote right now?
                                </h4>
                                <form >
                                    
                                        <li>
                                            <input
                                                type="input"
                                                style = {{marginRight: '15px'}}
                                                placeholder="name"
                                                onKeyUp={e => { setEarlyFriendName1(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                                onKeyUp={e => { setEarlyFriendEmail1(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                        </li>
                                        <li>
                                            <input
                                                type="input"
                                                style = {{marginRight: '15px'}}
                                                placeholder="name"
                                                onChange={e => { setEarlyFriendName2(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                                onChange={e => { setEarlyFriendEmail2(e.target.value); console.log(e.target.value) }}

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
                    <div style = {{position: 'relative', bottom: '300px'}}>
                     <Confetti 
                        colors={["#004789", "#EF3D55"]}
                        numberOfPieces={1000}
                        recycle={false}
                        // initialVelocityX={{min:-200, max: 200}}
                        // initialVelocityY={{min:200, max: 200}}
                        // width={1800}
                        confettiSource=	{ {x: 450, y:-80}}
                        
                        />
                        </div>
                    <h1>
                        woohoo! you made a voting plan!
                    </h1>
                 
                    <div style = {{border: '#EF3D55 2px solid',borderRadius:'20px', textAlign: 'center',marginBottom: "20px", marginTop: "20px", paddingLeft: '10px', paddingRight: '10px', width: '50%', height: '300px', marginLeft: '25%',color: '#004789'}}>
        <h3 style = {{ paddingTop: '10%'}}>
        i will cast my ballot in person, early! 
        <br/>
        identifier plan to vote on {whatDay.toLowerCase()}, {whatTime.toLowerCase()}!
        <br/>
        i will {getToPolls.toLowerCase()} to the polls and I will bring {bringWith.toLowerCase()} with me!
        </h3>
                    </div>    

                    <h5>
                    what next? 2 things: <br/>
1) add your plan's details to your personal calendar 🗓 right now <br/>
2) spread the word 🗣!  take a screenshot of your plan and post it to your <br/> social platforms and/or share the voting plan site on <a className = "red" href="https://www.instagram.com/ldsomething/" target="_blank">facebook,</a> <a className = "red" href="https://www.facebook.com/LDSomething" target="_blank">twitter,</a> or <a className = "red" href="https://twitter.com/LDoSomething" target="_blank">linkedIn</a> <br/> so others know how awesome it is to #MakeAPlan
(we'll also email you a copy of your plan)
                    </h5>
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
                        
                            when will you vote
                            </h1>
                            <div style = {{textAlign:'center'}}>
                            <a className = "clickHere" href = "https://ballotpedia.org/State_Poll_Opening_and_Closing_Times_(2020)" target = "_blank">
                                picking a time helps to make sure voting will happen. <span className = "underline">click here</span> to see when the polls <br/>are open in your state and pick a time that is likely to work for you right now!

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
                           
                               how will you get to the polls?
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
                       
                                
                                do you need to take off work or secure childcare?
                           
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
                   
                           can you bring anyone with you to vote?
                            </h3>
                            <div className = "bringWith red" style ={{textAlign: 'center'}}>
                               voting is more fun with a friend!
                                if you can bring someone, write their name here, 
                                 solo voting is A++ as well so no worries if not.
                                </div>
                        <form style={{ marginTop: "30px", marginBottom: '30px', textAlign: 'center' }}>
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
                        </form>
                        <i id = "arrowElection4" onClick = {() => {
                                   showPersonElection3(true);
                                   showPersonElection4(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                        {finishButtonElection ?
                            <div style={{ textAlign: "center", marginTop: "30px" }}>
                                <button
                                    class="finishButton"
                                    onClick={openElectionModal}
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
                        <h4 style={{ marginBottom: "30px" }}>
                            awesome! you're almost done!
                            <div style={{ marginTop: "3px" }}>
                                we just need to your name and <br/>email address so we can send over your plan
                            </div>
                        </h4>
                        <form style={{ textAlign: 'center'}}>
                              
                                    <input style = {{marginRight: '15px'}}
                                        type="input"
                                        // style={{ width: "300px", border: "1px solid #004789" }}
                                        placeholder="name"
                                         onKeyUp={e => { setNameElection(e.target.value); console.log(e.target.value) }}
                                    >
                                    </input>
                               
                               
                                    <input style = {{marginLeft: '15px'}}
                                        type="input"
                                        // style={{ width: "300px", border: "1px solid #004789" }}
                                        placeholder="email address"
                                        // onKeyUp={onEmailFriends}
                                        onKeyUp={e => { setEmailElection(e.target.value); console.log(e.target.value) }}
                                    >
                                    </input>
                                <br/>
                            
                            <button className = "next" style = {{marginTop:'30px', backgroundColor: '#EF3D55', color: 'white', paddingTop:'6px',paddingBottom:'6px', paddingLeft:'8px', paddingRight: '8px'}} 
                            onClick={()=>
                                {showElectionModal(false);
                                showEmailElectionFriends(true)
                            }}
                            
                            >
                                next
                            </button>

                        </form>
                    </div> : null
                    } 
                    {emailElectionFriends ?
                        <div >
                            <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                hey that was easy! who else should make a plan to vote right now?
                            </h4>
                            <form >
                                
                                    <li>
                                        <input
                                            type="input"
                                            style = {{marginRight: '15px'}}
                                            placeholder="name"
                                            onKeyUp={e => { setElectionFriendName1(e.target.value); console.log(e.target.value) }}

                                        >
                                        </input>
                                        <input
                                            type="input"
                                            style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                            onKeyUp={e => { setElectionFriendEmail1(e.target.value); console.log(e.target.value) }}

                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style = {{marginRight: '15px'}}
                                            placeholder="name"
                                            onChange={e => { setElectionFriendName2(e.target.value); console.log(e.target.value) }}

                                        >
                                        </input>
                                        <input
                                            type="input"
                                            style = {{marginLeft: '15px'}}                                                placeholder="email address"
                                            onChange={e => { setElectionFriendEmail2(e.target.value); console.log(e.target.value) }}

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
                <div style = {{position: 'relative', bottom: '300px'}}>
                 <Confetti 
                    colors={["#004789", "#EF3D55"]}
                    numberOfPieces={1000}
                    recycle={false}
                    // initialVelocityX={{min:-200, max: 200}}
                    // initialVelocityY={{min:200, max: 200}}
                    // width={1800}
                    confettiSource=	{ {x: 450, y:-80}}
                    
                    />
                    </div>
                <h1>
                    woohoo! you made a voting plan!
                </h1>
             
                <div style = {{border: '#EF3D55 2px solid',borderRadius:'20px', textAlign: 'center',marginBottom: "20px", marginTop: "20px", paddingLeft: '10px', paddingRight: '10px', width: '50%', height: '300px', marginLeft: '25%',color: '#004789'}}>
    <h3 style = {{ paddingTop: '7%'}}>
    i will cast my ballot in person, on election day on november 3rd! 
    <br/>
    i plan to vote {whatTimeElection.toLowerCase()}!
    <br/>
    {takeOffWork.toLowerCase()}!
    <br/>
    i will {getToPollsElection.toLowerCase()} to the polls and i will bring {bringWithElection.toLowerCase()} with me!
    </h3>
                </div>    

                <h5>
                what next? 2 things: <br/>
1) add your plan's details to your personal calendar 🗓 right now <br/>
2) spread the word 🗣!  take a screenshot of your plan and post it to your <br/> social platforms and/or share the voting plan site on <a className = "red" href="https://www.instagram.com/ldsomething/" target="_blank">facebook,</a> <a className = "red" href="https://www.facebook.com/LDSomething" target="_blank">twitter,</a> or <a className = "red" href="https://twitter.com/LDoSomething" target="_blank">linkedIn</a> <br/> so others know how awesome it is to #MakeAPlan
(we'll also email you a copy of your plan)
                </h5>
           </div> : null

            }
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