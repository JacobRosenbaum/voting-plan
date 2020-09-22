import React, { useState, useRef } from 'react';
// import "../assets/css/how.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import API from "../utils/API";


Modal.setAppElement(document.getElementById('root'));

function How2() {


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

    const [mail, showMail] = useState(false);
    const [personEarly, showPersonEarly] = useState(false);
    const [personEarly2, showPersonEarly2] = useState(false);
    const [personEarly3, showPersonEarly3] = useState(false);
    const [personEarly4, showPersonEarly4] = useState(false);
    const [personEarly5, showPersonEarly5] = useState(false);
    const [personElection, showPersonElection] = useState(false);
    const [personElection2, showPersonElection2] = useState(false);
    const [personElection3, showPersonElection3] = useState(false);
    const [personElection4, showPersonElection4] = useState(false);
    const [personElection5, showPersonElection5] = useState(false);
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


    function handleMailSubmit() {
        console.log(nameMail, emailMail, castBallotHowMail, mailBallotWhen);

        API.emailMail({ nameMail, emailMail, castBallotHowMail, mailBallotWhen }).catch(err => console.log(err));

        if (mailFriendEmail1) {

            API.mailFriend1({ mailFriendName1, mailFriendEmail1 })

        };
        if (mailFriendEmail2) {

            API.mailFriend2({ mailFriendName2, mailFriendEmail2 })

        };

        API.saveMailUser({
            nameMail: nameMail,
            emailMail: emailMail,
            castBallotHowMail: castBallotHowMail,
            mailBallotWhen: mailBallotWhen,
        }).catch(err => console.log(err));;
    }

    function handleEarlySubmit() {
        console.log(nameEarly, emailEarly, castBallotHowEarly, whatDay, whatTime, getToPolls, bringWith)

        API.emailEarly({ nameEarly, emailEarly, castBallotHowEarly, whatDay, whatTime, getToPolls, bringWith }).catch(err => console.log(err));

        if (earlyFriendEmail1) {

            API.earlyFriend1({ earlyFriendName1, earlyFriendEmail1 })

        };
        if (earlyFriendEmail2) {

            API.earlyFriend2({ earlyFriendName2, earlyFriendEmail2 })

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

            API.electionFriend1({ electionFriendName1, electionFriendEmail1 })

        };
        if (electionFriendEmail2) {

            API.electionFriend2({ electionFriendName2, electionFriendEmail2 })

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
        showFinishButtonMail(true)
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
        showPersonEarly5(false);
        showPersonElection(false);
        showPersonElection2(false);
        showPersonElection3(false);
        showPersonElection4(false);
        showPersonElection5(false);

    }
    function onPersonEarly() {
        showPersonEarly(true);
        showMail(false);
        showPersonElection(false);
        showPersonElection2(false);
        showPersonElection3(false);
        showPersonElection4(false);
        showPersonElection5(false);

    }
    function onPersonEarly3() {
        showPersonEarly3(true);
    }
    function onPersonEarly4() {
        showPersonEarly4(true)
    }
    function onPersonEarly5() {
        showPersonEarly5(true)
    }
    function onPersonElection() {
        showPersonElection(true);
        showMail(false);
        showPersonEarly(false);
        showPersonEarly2(false);
        showPersonEarly3(false);
        showPersonEarly4(false);
        showPersonEarly5(false)
    }
    function onPersonElection2() {
        showPersonElection2(true)
    }
    function onPersonElection3() {
        showPersonElection3(true)
    }
    function onPersonElection4() {
        showPersonElection4(true)
    }
    function onPersonElection5() {
        showPersonElection5(true)
    }
    function handleDateChangePerson(date) {
        setStartDatePerson(date);
        showPersonEarly2(true);
        setWhatDay(startDatePerson.toString().slice(0, 15));

    }
    return (
        <div class='container'>
            <div style={{ marginBottom: "30px" }}>
                <form>
                    <h3>
                    {/* <i class="fa fa-arrow-left"></i> */}
                        how do you plan to cast your ballot? how2
                        </h3>

                    <div className="form-check">
                        <label style={{ textAlign: "left !important" }}>
                            <input
                                type="radio"
                                name="react-tips"
                                value="by mail"
                                // onChange={onMail}
                                style={{ marginRight: "5px" }}
                                onClick={e => {
                                    setCastBallotHowMail(e.target.value);
                                    showMail(true);
                                    showPersonEarly(false);
                                    showPersonEarly2(false);
                                    showPersonEarly3(false);
                                    showPersonEarly4(false);
                                    showPersonEarly5(false);
                                    showPersonElection(false);
                                    showPersonElection2(false);
                                    showPersonElection3(false);
                                    showPersonElection4(false);
                                    showPersonElection5(false);
                                    ;
                                }}
                            />
                            by mail
                            </label>
                    </div>
                    <div className="form-check">
                        <label>
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
                            in person, early
                            </label>
                    </div>
                    <div className="form-check">
                        <label>
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
                            in person, on election day
                            </label>
                    </div>
                </form>
            </div>
            <div>
                {mail ?
                    <div style={{ marginBottom: "30px", borderTop: "#EF3D55 1px solid" }}>
                        <form id="whenWillYou">
                            <h3 style={{ marginTop: "30px" }}>
                                when will you fill in and mail back your ballot?
                                </h3>
                            <div className="form-check">
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
                                        onClick={onFinishButtonMail}
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
                                <form onSubmit={handleMailSubmit} style={{ textAlign: "left" }}>
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
                                            type="submit"

                                        >
                                            i'm finished
                                    </button>
                                    </div>
                                </form>
                            </div> : <div> </div>
                        }

                    </div>
                </Modal>

                {personEarly ?
                    <div style={{ borderTop: "#EF3D55 1px solid" }}>
                        <h3 style={{ marginTop: "30px" }}>
                            what day will you go to the polls?
                            </h3>
                        <div style={{ marginBottom: "40px" }}>
                            <DatePicker
                                selected={startDatePerson}
                                onChange={handleDateChangePerson}
                            />
                        </div>
                    </div> : null
                }
                {personEarly2 ?
                    <div style={{ borderTop: "#EF3D55 1px solid" }}>
                        <h3 style={{ marginTop: "30px" }}>
                            what time will you go to the polls on {startDatePerson.toString().slice(0, 15)}?
                                </h3>
                        <div className="form-check" >
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
                                    onClick={onPersonEarly3}
                                    onChange={e => { setWhatTime(e.target.value); }}

                                />
                            </label>
                        </div>

                    </div> : null
                }
                {personEarly3 ?
                    <div style={{ borderTop: "#EF3D55 1px solid" }}>
                        <form>
                            <h3 style={{ marginTop: "30px" }}>
                                how will you get to the polls?
                                </h3>
                            <div className="form-check">
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
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("bus"); }}

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
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("subway"); }}
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
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("drive"); }}

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
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("bike"); }}
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
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("carpool"); }}

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
                                        onClick={onPersonEarly4}
                                        style={{ marginRight: "5px" }}
                                        onChange={e => { setGetToPolls("Lyft/Uber"); }}

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
                                        onKeyUp={onPersonEarly4}
                                        onChange={e => { setGetToPolls(e.target.value); }}

                                    />
                                </label>
                            </div>
                        </form>
                    </div> : null
                }
                {personEarly4 ?
                    <div style={{ borderTop: "#EF3D55 1px solid" }}>
                        <h3 style={{ marginTop: "30px" }}>
                            who else can you bring with you to vote?
                            </h3>
                        <form style={{ marginBottom: "30px" }}>
                            <input
                                type="input"
                                style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px" }}
                                onKeyUp={onFinishButtonEarly}
                                onChange={e => { setBringWith(e.target.value); console.log(e.target.value) }}
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
                    <div style={{ borderTop: "#EF3D55 1px solid" }}>

                        <h3 style={{ marginTop: "30px" }}>
                            what time will you go to the polls on election day?
                            </h3>
                        <div className="form-check">
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
                                    onKeyUp={onPersonElection2}
                                    onChange={e => { setWhatTimeElection(e.target.value); console.log(e.target.value); }}
                                />
                            </label>
                        </div>
                    </div> : null
                }
                {personElection2 ?
                    <div style={{ borderTop: "#EF3D55 1px solid" }}>

                        <form>
                            <h3 style={{ marginTop: "30px" }}>
                                how will you get to the polls?
                                </h3>
                            <div className="form-check">
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
                                        onChange={e => { setGetToPollsElection("bus"); }}

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
                                        onChange={e => { setGetToPollsElection("subway"); }}

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
                                        onChange={e => { setGetToPollsElection("Lyft/Uber"); }}

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
                                        onKeyUp={onPersonElection3}
                                        onChange={e => { setGetToPollsElection(e.target.value); console.log(e.target.value); }}

                                    />
                                </label>
                            </div>
                        </form>
                    </div> : null
                }
                {personElection3 ?
                    <div style={{ borderTop: "#EF3D55 1px solid" }}>
                        <h3 style={{ marginTop: "30px" }}>
                            do you need to take off work or secure childcare?
                            </h3>
                        <form style={{ marginBottom: "30px" }}>
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
                                        onKeyUp={onPersonElection4}
                                        onChange={e => { setGetToPollsElection(e.target.value); console.log(e.target.value) }}

                                    />
                                </label>
                            </div>
                        </form>
                    </div> : null
                }
                {personElection4 ?
                    <div style={{ borderTop: "#EF3D55 1px solid" }}>
                        <h3 style={{ marginTop: "30px" }}>
                            who else can you bring with you to vote?
                            </h3>
                        <form style={{ marginBottom: "30px" }}>
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

export default How2;