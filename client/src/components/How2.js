import React, { useState } from 'react';
import "../assets/css/how.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';



function How() {

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          backgroundColor : '#004789', 
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
    const [finishButton, showFinishButton] = useState(false);
    const [startDatePerson, setStartDatePerson] = useState(new Date());
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function onFinishButton (){
        showFinishButton(true)
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
        showPersonElection5(false)
    }
    function onPersonEarly() {
        showPersonEarly(true);
        showMail(false);
        showPersonElection(false); 
        showPersonElection2(false); 
        showPersonElection3(false); 
        showPersonElection4(false); 
        showPersonElection5(false)
    }
    function onPersonEarly3() {
        showPersonEarly3(true)
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
    function onPersonElection2 () {
        showPersonElection2(true)
    }
    function onPersonElection3 () {
        showPersonElection3(true)
    }
    function onPersonElection4() {
        showPersonElection4(true)
    }
    function onPersonElection5() {
        showPersonElection5(true)
    }
    function handleDateChangePerson(date){
            setStartDatePerson(date); 
            showPersonEarly2(true)
    }
        return (
            <div>
                <div style={{ marginBottom: "30px" }}>
                    <form>
                        <h3>
                            how do you plan to cast you ballot?
                        </h3>
                        <div className="form-check">
                            <label style={{ textAlign: "left !important" }}>
                                <input
                                    type="radio"
                                    name="react-tips"
                                    value="mail"
                                    onClick={onMail}
                                    style={{ marginRight: "5px" }}
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
                                />
                                in person, on election day
                            </label>
                        </div>
                    </form>
                </div>
                <div>
                    {mail ?
                        <div style={{ marginBottom: "30px", borderTop: "#EF3D55 1px solid" }}>
                            <form>
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
                                            onClick={onFinishButton}
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
                                            onClick={onFinishButton}
                                        />
                                        before I go to sleep the night it arrives in the mail
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input
                                            type="radio"
                                            name="react-tips"
                                            value="mail"
                                            style={{ marginRight: "5px" }}
                                            onClick={onFinishButton}
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
                                            onClick={onFinishButton}
                                        />
                                    </label>
                                </div>
                            </form>
                            { finishButton ?
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <button
                                        class="btn btn-primary"
                                        onClick={openModal}
                                    >
                                        i'm finished
                                    </button>
                                </div> : null}
                        </div>
                        : null
                    }
                        <Modal
                            isOpen={modalIsOpen}
                            // onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <i id = "x" class="fa fa-times" onClick={closeModal}></i>
                            <div style ={{ marginBottom: "50px"}}>
                            <h3>No problem!</h3>
                            <div style ={{color: "white !important"}}><a style ={{color: "white !important", textDecoration: "underline !important"}} href = "https://turbovote.org/" target = "_blank">Click here</a> to register - then come on back to fill out your Voting Plan</div>
                            </div>
                        </Modal> 
                    {/* {this.state.showLastMailQuestion ?
                        <div style={{ borderTop: "#EF3D55 1px solid" }}>
                            <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                hey that was easy! who else should make a plan to vote right now?
                        </h3>
                            <form>
                                <ol>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                </ol>
                                <div style={{ textAlign: "center" }}>
                                    <button
                                        class="btn btn-primary"
                                        type="submit"
                                    >
                                        i'm finished
                                    </button>
                                </div>
                            </form>

                        </div> : null
                    } */}
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
                                        onClick={personEarly3}
                                        style={{ marginRight: "5px" }}
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
                                            onClick={personEarly4}
                                            style={{ marginRight: "5px" }}
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
                                    onKeyUp={onPersonEarly5}
                                />
                            </form>
                        </div> : null
                    }
                    {personEarly5 ?
                        <div style={{ borderTop: "#EF3D55 1px solid" }}>
                            <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                hey that was easy! who else should make a plan to vote right now?
                            </h3>
                            <form>
                                <ol>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                </ol>
                                <div style={{ textAlign: "center" }}>
                                    <button
                                        class="btn btn-primary"
                                        type="submit"
                                    >
                                        i'm finished
                                     </button>
                                </div>
                            </form>
                        </div> : null

                    }
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
                                        />
                                    </label>
                                </div>
                            </form>
                        </div> : null
                    }
                    {personElection4 ?
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
                                    onKeyUp={onPersonElection5}
                                />
                            </form>

                        </div> : null
                    }
                    {personElection5 ?
                        <div style={{ borderTop: "#EF3D55 1px solid" }}>
                            <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
                                hey that was easy! who else should make a plan to vote right now?
                            </h3>
                            <form>
                                <ol>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                    <li>
                                        <input
                                            type="input"
                                            style={{ width: "300px", border: "1px solid #004789" }}
                                            placeholder="email address"
                                        >
                                        </input>
                                    </li>
                                </ol>
                                <div style={{ textAlign: "center" }}>
                                    <button
                                        class="btn btn-primary"
                                        type="submit"
                                    >
                                        i'm finished
                                     </button>
                                </div>
                            </form>
                        </div> : null

                    }
                </div>
            </div>
        )
    }

export default How;