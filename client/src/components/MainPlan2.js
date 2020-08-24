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
    var doneTypingInterval = 3500;  //time in ms (5 seconds)

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
            color: 'white',
            textAlign: 'center',
            border: '5px #EF3D55 solid',
            fontFamily: '"Gotham Medium", sans-serif',
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
    const [emailFriends, showEmailFriends] = useState(false)
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
    const [complete, showComplete] = useState(false)

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
   
    function handleDateChangePerson(date) {
        setStartDatePerson(date);
        showPersonEarly2(true);
        setWhatDay(startDatePerson.toString().slice(0, 15));
        showPersonEarly(false)

    }
    return (
        <div class='container' >
            {ballotPlan ?
            <div className = "jumbotronX" style={{ marginBottom: "30px" }}>
                <form>
                    <h3 style = {{fontFamily: '"Gotham", sans-serif', color: 'black'}}>
                    
                       HOW DO YOU PLAN TO CAST YOUR BALL<span><img id = "exclamation" src = {exclamation}/>T?</span>
                        </h3>
                        {/* <img id = "castBallotImage" src = {castBallotImage} /> */}
                       
                        <div style = {{fontFamily: '"Gotham", sans-serif', color: 'black', textAlign: 'center'}}>
                        *note sure yet? don't worry! <a id = "clickHere" href = "https://www.headcount.org/state">click here</a> for more info on the options in your state and/or reach out to us [link my email] with any questions at all, we're here to help!
                        </div>


                    <div className="form-check">
                        <label id = "mailInput"style={{ textAlign: "left !important",fontFamily: '"Gotham", sans-serif' }}>
                            <button className = "button shadowButton"
                                style={{ marginRight: "5px" }}
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
                            
                                BY MAIL!
                               
                            </button>
                            </label>
                    </div>
                    <div className="form-check">
                        <label id = "mailInput2">
                            <input
                                type="radio"
                                name="react-tips"
                                value="mail"
                                onClick={onPersonEarly}
                                style={{ marginRight: "5px" }}
                                onChange={e => {
                                    setCastBallotHowEarly("in person, early")
                                }

                                }
                            />
                            IN PERSON, EARLY
                            </label>
                    </div>
                    <div className="form-check">
                        <label id = "mailInput3">
                            <input
                                type="radio"
                                name="react-tips"
                                value="mail"
                                onClick={onPersonElection}
                                style={{ marginRight: "5px" }}
                                onChange={e => {
                                    setCastBallotHowElection("in person, on election day")
                                }
                                }
                            />
                            IN PERSON, ON ELECTION DAY
                            </label>
                    </div>
                </form>
            </div> : null }
            <div>
                {mail ?
                    <div >
                        <form id="whenWillYou">
                            <h3>
                             <i id = "arrowMail" onClick = {() => {
                                   showBallotPlan(true);
                                   showMail(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                                when will you fill in and mail back your ballot?
                                </h3>
                            <div style = {{marginTop: '30px'}} className="form-check">
                                <label style={{ textAlign: "left !important" }}>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        style={{ marginRight: "5px" }}
                                        onClick={onFinishButtonMail}
                                        onChange={e => { setMailBallotWhen("the minute it arrives in the mail (can’t wait!)") }}

                                    />
                                    the minute it arrives in the mail (can’t wait!)
                            </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        style={{ marginRight: "5px" }}
                                        onClick={onFinishButtonMail}
                                        onChange={e => { setMailBallotWhen("before I go to sleep the night it arrives in the mail") }}

                                    />
                                    before I go to sleep the night it arrives in the mail
                                    </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        style={{ marginRight: "5px" }}
                                        onChange={onFinishButtonMail}
                                        onClick={e => { setMailBallotWhen("the weekend after I receive my ballot") }}

                                    />
                                    the weekend after I receive my ballot
                                    </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        style={{ marginRight: "5px" }}
                                    />
                                    other (please specify)
                                        <input
                                        type="input"
                                        style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px" }}
                                        onKeyUp=  {onFinishButtonMail}
                                        onChange={e => { setMailBallotWhen(e.target.value); console.log(e.target.value) }}

                                    />
                                </label>
                            </div>
                        </form>
                        {finishButtonMail ?
                            <div style={{ textAlign: "center", marginTop: "10px" }}>
                                <button
                                    class="btn btn-primary"
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
                    <i id="close" class="fa fa-times" onClick={closeMailModal}></i>
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
                                            onChange={e => { setNameMail(e.target.value); console.log(e.target.value) }}
                                        >
                                        </input>
                                    </li>
                                    <li style={{ listStyleType: "none" }}>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                            onKeyUp={onEmailFriends}
                                            onChange={e => { setEmailMail(e.target.value); console.log(e.target.value) }}
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
                                <form  style={{ textAlign: "left" }}>
                                    <ol>
                                        <li>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789" }}
                                                placeholder="name"
                                                onChange={e => { setMailFriendName1(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789", marginLeft: "13px" }}
                                                placeholder="email address"
                                                onChange={e => { setMailFriendEmail1(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                        </li>
                                        <li>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789" }}
                                                placeholder="name"
                                                onChange={e => { setMailFriendName2(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                            <input
                                                type="input"
                                                style={{ width: "300px", border: "1px solid #004789", marginLeft: "13px" }}
                                                placeholder="email address"
                                                onChange={e => { setMailFriendEmail2(e.target.value); console.log(e.target.value) }}

                                            >
                                            </input>
                                        </li>
                                    </ol>
                                    <div style={{ textAlign: "center" }}>
                                        <button
                                            class="btn btn-primary mailButton"
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
                                                console.log('confetti'), 5000);
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
                        WOOHOO! YOU MADE A VOTING PLAN!
                       
                    </h1>
                    <h2>
                        CHECK YOUR EMAIL TO FIND IT
                    </h2>
               </div> : null

                }

                {personEarly ?
                    <div>
                        <h3 >
                        <i id = "arrowPerson1" onClick = {() => {
                                   showBallotPlan(true);
                                   showPersonEarly(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                            what day will you go to the polls?
                            </h3>
                        <div style = {{marginTop: "30px"}}>
                            <DatePicker
                                selected={startDatePerson}
                                onChange={handleDateChangePerson}
                            />
                        </div>
                    </div> : null
                }
                {personEarly2 ?
                    <div >
                        <h3 >
                        <i id = "arrowPerson2" onClick = {() => {
                                 showPersonEarly2(false)
                                   showPersonEarly(true)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                            what time will you go to the polls on {startDatePerson.toString().slice(0, 15)}?
                                </h3>
                        <div style = {{marginTop: "30px"}}className="form-check" >
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="mail"
                                    onClick={onPersonEarly3}
                                    style={{ marginRight: "5px" }}
                                    onChange={e => { setWhatTime("before work"); }}

                                />
                                before work
                            </label>
                        </div>
                        <div className="form-check" >
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="mail"
                                    onClick={onPersonEarly3}
                                    style={{ marginRight: "5px" }}
                                    onChange={e => { setWhatTime("during lunch"); }}

                                />
                                during lunch
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="mail"
                                    onClick={onPersonEarly3}
                                    style={{ marginRight: "5px" }}
                                    onChange={e => { setWhatTime("after work"); }}

                                />
                                after work
                            </label>
                        </div>
                        <div className="form-check">
                            <label>

                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="mail"
                                    style={{ marginRight: "5px" }}
                                />
                                other (please specify)
                                        <input
                                    type="input"
                                    style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px", marginBottom: "30px" }}
                                    onKeyUp=  {() => { clearTimeout(typingTimer);
                                        if (whatTime) {
                                            typingTimer = setTimeout(doneTypingWhatTime, doneTypingInterval);
                                                }
                                            }
                                        }
                                    onChange={e => { setWhatTime(e.target.value); }}

                                />
                            </label>
                        </div>

                    </div> : null
                }
                {personEarly3 ?
                    <div>
                        <form>
                            <h3>
                            <i id = "arrowPerson3" onClick = {() => {
                                 showPersonEarly3(false)
                                   showPersonEarly2(true)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                                how will you get to the polls?
                                </h3>
                                <div className = "row" style={{ marginTop: "30px"}}>
                            <div  className="form-check col-sm-6">
                                <label style={{ textAlign: "left !important" }}>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("walk"); }}
                                    />
                                    walk
                                    </label>
                            </div>
                            <div className="form-check col-sm-6">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("take a bus"); }}

                                    />
                                    bus
                                    </label>
                            </div>
                            </div>
                            <div className = 'row' lassName = "row" >
                            <div className="form-check col-sm-6">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("ride the subway"); }}
                                    />
                                    subway
                                    </label>
                            </div>
                            <div className="form-check col-sm-6">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("drive"); }}

                                    />
                                    drive
                                    </label>
                            </div>
                            </div>
                            <div className = 'row'>
                            <div className="form-check col-sm-6">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("bike"); }}
                                    />
                                    bike
                                    </label>
                            </div>
                            <div className="form-check col-sm-6">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("carpool"); }}

                                    />
                                    carpool
                            </label>
                            </div>
                            </div>
                            <div className = 'row'>
                            <div className="form-check col-lg-6">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonEarly4}
                                        onk
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("take a Lyft/Uber"); }}

                                    />
                                    Lyft/Uber
                            </label>
                            </div>
                            <div className="form-check col-lg-6">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        style={{ marginRight: "5px" }}
                                    />
                                    other (please specify)
                                        <input
                                        type="input"
                                        style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px", marginBottom: "30px" }}
                                        onKeyUp=  {() => { clearTimeout(typingTimer);
                                        if (getToPolls) {
                                            typingTimer = setTimeout(doneTypingGetToPolls, doneTypingInterval);
                                                }
                                            }
                                        }
                                        onChange={e => { setGetToPolls(e.target.value); }}

                                    />
                                </label>
                            </div>
                            </div>
                        </form>
                    </div> : null
                }
                {personEarly4 ?
                    <div >
                        <h3 >
                        <i id = "arrowPerson4" onClick = {() => {
                                   showPersonEarly3(true);
                                   showPersonEarly4(false)
                                }
                                }  className="fa fa-arrow-left back"></i>
                            who else can you bring with you to vote?
                            </h3>
                        <form style={{ marginTop: "30px" }}>
                            <input
                                type="input"
                                style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px" }}
                                onKeyUp={onFinishButtonEarly}
                                onChange={e => { setBringWith(e.target.value);    console.log(e.target.value) }}
                            />
                        </form>
                        {finishButtonEarly ?
                            <div style={{ textAlign: "center", marginTop: "10px" }}>
                                <button
                                    class="btn btn-primary"
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
                </Modal>
                {personElection ?
                    <div >
                        <h3>
                        <i id = "arrowElection" onClick = {() => {
                                   showBallotPlan(true);
                                   showPersonElection(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                            what time will you go to the polls on election day?
                            </h3>
                        <div className="form-check" style = {{marginTop : "30px"}}>
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="mail"
                                    onClick={onPersonElection2}
                                    style={{ marginRight: "5px" }}
                                    onChange={e => { setWhatTimeElection("before work"); }}
                                />
                                before work
                        </label>
                        </div>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="mail"
                                    onClick={onPersonElection2}
                                    style={{ marginRight: "5px" }}
                                    onChange={e => { setWhatTimeElection("during lunch"); }}
                                />
                                during lunch
                        </label>
                        </div>
                        <div className="form-check" >
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="mail"
                                    onClick={onPersonElection2}
                                    style={{ marginRight: "5px" }}
                                    onChange={e => { setWhatTimeElection("after work"); }}
                                />
                                after work
                        </label>
                        </div>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="mail"
                                    style={{ marginRight: "5px" }}
                                />
                                other (please specify)
                                    <input
                                    type="input"
                                    style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px", marginBottom: "30px" }}
                                    onKeyUp=  {() => { clearTimeout(typingTimer);
                                        if (whatTimeElection) {
                                            typingTimer = setTimeout(doneTypingWhatTimeElection, doneTypingInterval);
                                                }
                                            }
                                        }
                                    onChange={e => { setWhatTimeElection(e.target.value); console.log(e.target.value); }}
                                />
                            </label>
                        </div>
                    </div> : null
                }
                {personElection2 ?
                    <div >
                        <form>
                            <h3>
                            <i id = "arrowElection2" onClick = {() => {
                                   showPersonElection(true);
                                   showPersonElection2(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                                how will you get to the polls?
                                </h3>
                            <div className="form-check" style={{ marginTop: "30px" }}>
                                <label style={{ textAlign: "left !important" }}>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonElection3}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPollsElection("walk"); }}

                                    />
                                    walk
                                    </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonElection3}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPollsElection("take a bus"); }}

                                    />
                                    bus
                                     </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonElection3}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPollsElection("ride the subway"); }}

                                    />
                                    subway
                                    </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonElection3}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPollsElection("drive"); }}

                                    />
                                    drive
                                    </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonElection3}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPollsElection("bike"); }}

                                    />
                                    bike
                                    </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonElection3}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPollsElection("carpool"); }}

                                    />
                                    carpool
                                     </label>
                            </div>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonElection3}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPollsElection("take a Lyft/Uber"); }}

                                    />
                                    Lyft/Uber
                                    </label>
                            </div>
                            <div className="form-check">
                                <label>

                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        style={{ marginRight: "5px" }}
                                    />
                                    other (please specify)
                                        <input
                                        type="input"
                                        style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px", marginBottom: "30px" }}
                                        onKeyUp=  {() => { clearTimeout(typingTimer);
                                            if (getToPollsElection) {
                                                typingTimer = setTimeout(doneTypingGetToPollsElection, doneTypingInterval);
                                                    }
                                                }
                                            }
                                        onChange={e => { setGetToPollsElection(e.target.value); console.log(e.target.value); }}

                                    />
                                </label>
                            </div>
                        </form>
                    </div> : null
                }
                {personElection3 ?
                    <div>
                        <h3>
                        <i id = "arrowElection3" onClick = {() => {
                                   showPersonElection2(true);
                                   showPersonElection3(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                            do you need to take off work or secure childcare?
                            </h3>
                        <form  style={{ marginTop: "30px" }}>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonElection4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setTakeOffWork("no"); }}
                                    />
                                    no
                                    </label>
                            </div>
                            <div className="form-check">
                                <label>

                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        style={{ marginRight: "5px" }}
                                    />
                                    yes (please specify)
                                         <input
                                        type="input"
                                        style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px", marginBottom: "30px" }}
                                        onKeyUp={() => { clearTimeout(typingTimer);
                                            if (takeOffWork) {
                                                typingTimer = setTimeout(doneTypingTakeOffWork, doneTypingInterval);
                                                    }
                                                }
                                            }
                                        onChange={e => { setTakeOffWork(e.target.value); console.log(e.target.value) }}

                                    />
                                </label>
                            </div>
                        </form>
                    </div> : null
                }
                {personElection4 ?
                    <div>
                        <h3 >
                        <i id = "arrowElection4" onClick = {() => {
                                   showPersonElection3(true);
                                   showPersonElection4(false)
                                }
                                }  className="fa fa-arrow-left back"></i> 
                            who else can you bring with you to vote?
                            </h3>
                        <form style={{ marginTop: "30px" }}>
                            <input
                                type="input"
                                style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px" }}
                                onKeyUp={onFinishButtonElection}
                                onChange={e => { setBringWithElection(e.target.value); console.log(e.target.value) }}
                            />
                        </form>
                        {finishButtonElection ?
                            <div style={{ textAlign: "center", marginTop: "10px" }}>
                                <button
                                    class="btn btn-primary"
                                    onClick={openElectionModal}
                                >
                                    i'm finished
                                    </button>
                            </div> : null}
                    </div> : null
                }
                <Modal
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
                </Modal>

            </div>
        </div>
    )
}

export default MainPlan;