import React from 'react';
import "../assets/css/how.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import Modal from 'react-modal';



class How extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMail: false,
            showPersonEarly: false,
            showPersonElection: false,
            showPersonElectionQ2: false,
            showPersonElectionQ3: false,
            showPersonElectionQ4: false,
            showPersonElectionQ5: false,
            showDropdown: true,
            showLastMailQuestion: false,
            showPersonEarlyQ2: false,
            showPersonEarlyQ3: false,
            showPersonEarlyQ5: false,
            startDate: new Date(),
            startDate2: new Date(),
            showModal: false
        };

        
        this._onMailClick = this._onMailClick.bind(this);
        this._onPersonEarlyClick = this._onPersonEarlyClick.bind(this);
        this._onPersonEarlyQ2 = this._onPersonEarlyQ2.bind(this);
        this._onPersonEarlyQ3 = this._onPersonEarlyQ3.bind(this);
        this._onPersonEarlyQ4 = this._onPersonEarlyQ4.bind(this);
        this._onPersonEarlyQ5 = this._onPersonEarlyQ5.bind(this);
        this._onPersonElectionClick = this._onPersonElectionClick.bind(this);
        this._onPersonElectionQ2 = this._onPersonElectionQ2.bind(this);
        this._onPersonElectionQ3 = this._onPersonElectionQ3.bind(this);
        this._onPersonElectionQ4 = this._onPersonElectionQ4.bind(this);
        this._onPersonElectionQ4 = this._onPersonElectionQ5.bind(this);
        this._onLastMailQuestionClick = this._onLastMailQuestionClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }
    openModal() {
        this.setState({
            showModal: true
        })
    }
    closeModal() {
        this.setState({
            showModal: false
        })
    }

    _onPersonEarlyQ3() {
        this.setState({
            showPersonEarlyQ3: true
        });
    }

    _onPersonEarlyQ2() {
        this.setState({
            showPersonEarlyQ2: true
        });
    }

    _onPersonElectionQ2() {
        console.log("person election")
        this.setState({
            showPersonElectionQ2: true
        });
    }

    _onMailClick() {
        console.log("mail")
        this.setState({
            showMail: true,
            showPersonEarly: false,
            showPersonElection: false,
            showPersonElectionQ2: false,
            showPersonElectionQ3: false,
            showPersonElectionQ4: false,
            showPersonElectionQ5: false,
            showLastMailQuestion: false,
            showPersonEarlyQ2: false,
            showPersonEarlyQ3: false,
            showPersonEarlyQ4: false,
            showPersonEarlyQ5: false
        });
    }
    handleDateChange = date => {
        this.setState({
            startDate: date,
            showPersonEarlyQ2: true
        });
    };
    _onPersonEarlyClick() {
        console.log("person early")
        this.setState({
            showMail: false,
            showPersonEarly: true,
            showPersonElection: false,
            showLastMailQuestion: false,
            showPersonElection: false,
            showPersonElectionQ2: false,
            showPersonElectionQ3: false,
            showPersonElectionQ4: false,
            showPersonElectionQ5: false,
        });
    }
    _onPersonEarlyQ4() {
        this.setState({
            showPersonEarlyQ4: true
        });
    }
    _onPersonEarlyQ5() {
        this.setState({
            showPersonEarlyQ5: true
        });
    }
    _onPersonElectionClick() {
        console.log("person election")
        this.setState({
            showMail: false,
            showPersonEarly: false,
            showPersonElection: true,
            showLastMailQuestion: false,
            showLastMailQuestion: false,
            showPersonEarlyQ2: false,
            showPersonEarlyQ3: false,
            showPersonEarlyQ4: false,
            showPersonEarlyQ5: false

        });
    }
    _onPersonElectionQ2() {
        console.log("person election")
        this.setState({
            showPersonElectionQ2: true
        });
    }
    _onPersonElectionQ3() {
        console.log("person election")
        this.setState({
            showPersonElectionQ3: true
        });
    }
    _onPersonElectionQ4() {
        console.log("person election")
        this.setState({
            showPersonElectionQ4: true
        });
    }
    _onPersonElectionQ5() {
        console.log("person election")
        this.setState({
            showPersonElectionQ5: true
        });
    }
    _onLastMailQuestionClick() {
        console.log("last question")
        this.setState({
            showLastMailQuestion: true
        });
    }

    render() {
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
                                    onClick={this._onMailClick}
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
                                    onClick={this._onPersonEarlyClick}
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
                                    onClick={this._onPersonElectionClick}
                                    style={{ marginRight: "5px" }}
                                />
                                in person, on election day
                            </label>
                        </div>
                    </form>

                </div>
                <div>
                    {this.state.showMail ?
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
                                            onClick={this._onLastMailQuestionClick}
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
                                            onClick={this._onLastMailQuestionClick}
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
                                            onClick={this._onLastMailQuestionClick}
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
                                            onKeyUp={this._onLastMailQuestionClick}
                                        />
                                    </label>
                                </div>
                                
                            </form>
                            <div style={{ textAlign: "center", marginTop: "50px" }}>
                                    <button
                                        class="btn btn-primary"
                                        type="submit"
                                        onClick = {this.openModal}
                                    >
                                        i'm finished
                                    </button>
                                </div>
                            {this.state.showModal ? 
                                    <Modal
                                    isOpen={this.state.showModal}
                                    // onAfterOpen={afterOpenModal}
                                    // onRequestClose={closeModal}
                                    style= {{
                                       
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
                    }}
                                    
                                    // contentLabel="Example Modal"
                                >
                                    {/* <i id = "x" class="fa fa-times" onClick={this.closeModal}></i> */}
                                    <div style ={{ marginBottom: "50px"}}>
                                    <h3>No problem!</h3>
                                     <div style ={{color: "white !important"}}><a style ={{color: "white !important", textDecoration: "underline !important"}} href = "https://turbovote.org/" target = "_blank">Click here</a> to register - then come on back to fill out your Voting Plan</div>
                                     </div>
                                </Modal> : null
                    }
                        </div>
                        
                        : null
                    }
                    
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
                    {this.state.showPersonEarly ?

                        <div style={{ borderTop: "#EF3D55 1px solid" }}>

                            <h3 style={{ marginTop: "30px" }}>
                                what day will you go to the polls?
                         </h3>
                            <div style={{ marginBottom: "40px" }}>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleDateChange}
                                />
                            </div>
                        </div> : null
                    }
                    {this.state.showPersonEarlyQ2 ?
                        <div style={{ borderTop: "#EF3D55 1px solid" }}>

                            <h3 style={{ marginTop: "30px" }}>
                                what time will you go to the polls on {this.state.startDate.toString().slice(0, 15)}?
                                </h3>
                            <div className="form-check" >
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={this._onPersonEarlyQ3}
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
                                        onClick={this._onPersonEarlyQ3}
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
                                        onClick={this._onPersonEarlyQ3}
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
                                        onKeyUp={this._onPersonEarlyQ3}

                                    />
                                </label>
                            </div>

                        </div> : null
                    }
                    {this.state.showPersonEarlyQ3 ?
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
                                            onClick={this._onPersonEarlyQ4}
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
                                            onClick={this._onPersonEarlyQ4}
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
                                            onClick={this._onPersonEarlyQ4}
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
                                            onClick={this._onPersonEarlyQ4}
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
                                            onClick={this._onPersonEarlyQ4}
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
                                            onClick={this._onPersonEarlyQ4}
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
                                            onClick={this._onPersonEarlyQ4}
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
                                            onKeyUp={this._onPersonEarlyQ4}

                                        />
                                    </label>
                                </div>
                            </form>
                        </div> : null

                    }
                    {this.state.showPersonEarlyQ4 ?
                        <div style={{ borderTop: "#EF3D55 1px solid" }}>
                            <h3 style={{ marginTop: "30px" }}>
                                who else can you bring with you to vote?
                        </h3>
                            <form style={{ marginBottom: "30px" }}>
                                <input
                                    type="input"
                                    style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px" }}
                                    onKeyUp={this._onPersonEarlyQ5}

                                />
                            </form>

                        </div> : null
                    }
                    {this.state.showPersonEarlyQ5 ?
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
                    {this.state.showPersonElection ?
                        <div style={{ borderTop: "#EF3D55 1px solid" }}>

                            <h3 style={{ marginTop: "30px" }}>
                                what time will you go to the polls on election day? {this.state.startDate.toString().slice(0, 15)}?
                            </h3>
                            <div className="form-check">
                                <label>
                                    <input
                                        type="radio"
                                        name="react-tips"
                                        value="mail"
                                        onClick={this._onPersonElectionQ2}
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
                                        onClick={this._onPersonElectionQ2}
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
                                        onClick={this._onPersonElectionQ2}
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
                                        onKeyUp={this._onPersonElectionQ2}

                                    />
                                </label>
                            </div>

                        </div> : null
                    }
                    {this.state.showPersonElectionQ2 ?
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
                                            onClick={this._onPersonElectionQ3}
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
                                            onClick={this._onPersonElectionQ3}
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
                                            onClick={this._onPersonElectionQ3}
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
                                            onClick={this._onPersonElectionQ3}
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
                                            onClick={this._onPersonElectionQ3}
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
                                            onClick={this._onPersonElectionQ3}
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
                                            onClick={this._onPersonElectionQ3}
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
                                            onKeyUp={this._onPersonElectionQ3}

                                        />
                                    </label>
                                </div>
                            </form>
                        </div> : null

                    }
                    {this.state.showPersonElectionQ3 ?
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
                                            onClick={this._onPersonElectionQ4}
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
                                            onKeyUp={this._onPersonElectionQ4}

                                        />
                                    </label>
                                </div>
                            </form>

                        </div> : null
                    }
                    {this.state.showPersonElectionQ4 ?
                        <div style={{ borderTop: "#EF3D55 1px solid" }}>
                            <h3 style={{ marginTop: "30px" }}>
                                who else can you bring with you to vote?
                        </h3>
                            <form style={{ marginBottom: "30px" }}>
                                <input
                                    type="input"
                                    style={{ marginLeft: "7px", border: "1px solid #0000cd", width: "300px" }}
                                    onKeyUp={this._onPersonElectionQ5}

                                />
                            </form>

                        </div> : null
                    }
                    {this.state.showPersonElectionQ5 ?
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
}

export default How;