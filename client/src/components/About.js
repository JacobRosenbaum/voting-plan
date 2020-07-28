import React, { useState } from 'react';
import "../assets/css/about.css";
import How from "../components/How";
import VotePlan from "../components/VotePlan";
import Modal from 'react-modal';

function About () {

    var subtitle;
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

    const [modalIsOpen,setIsOpen] = useState(false);
    const [component, showComponent] = useState(false); 
    const [button, showButton] = useState(true); 
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showComponent: false,
    //         showButton: true,
    //         showModalYes: false,
    //         showModalNo: false,
    //         close: false
    //     };
    //     this._onButtonClickYes = this._onButtonClickYes.bind(this);
    //     this._onButtonClickNo = this._onButtonClickNo.bind(this);
    //     this.closeModal = this.closeModal.bind(this)

    // }
    function openModal() {
        setIsOpen(true);
      }
     
      function closeModal(){
        setIsOpen(false);
      }

      function startPlan(){
        showComponent(true); 
        showButton(false)
      }
     
    // _onButtonClickYes() {
    //     console.log("yes")
    //     this.setState({
    //         showButton: false,
    //         showModalYes: true
    //     });

    // }
    
    // _onButtonClickNo() {
    //     console.log("no")
    //     this.setState({
    //         showButton: false,
    //         showModalNo: true
    //     });

    // }

        return (
            <div class="container">
                <div class="jumbotron w3-animate-opacity">
                    <div>
                        {component ?
                            <How /> : <VotePlan />
                        }
                        {button ?
                            <div className="row">
                                <div className="col-sm-12" style = {{textAlign: "center"}}>
                                    <button id = "yes" class="btn btn-primary" onClick={startPlan}>yes</button>
                                
                                    <button id = "no" class="btn btn-primary" onClick={openModal}>no</button>
                                </div>
                                <Modal
                                    isOpen={modalIsOpen}
                                    // onAfterOpen={afterOpenModal}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <i id = "x" class="fa fa-times" onClick={closeModal}></i>
                                    {/* <div>No problem! </div> */}
                                    <div style ={{ marginBottom: "50px"}}>
                                    <h3>No problem!</h3>
                                     <div style ={{color: "white !important"}}><a style ={{color: "white !important", textDecoration: "underline !important"}} href = "https://turbovote.org/" target = "_blank">Click here</a> to register - then come on back to fill out your Voting Plan</div>
                                     </div>
                                </Modal>
                                
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        )
}
export default About;