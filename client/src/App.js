import React, {useState} from "react";
import Main from "../src/pages/Main";
import "../src/assets/css/app.css";
import oneSticker from "../src/assets/images/oneSticker.png";
import twoStickers from "../src/assets/images/twoStickers.png";
import i from "../src/assets/images/exclamation.png";
import letsDoSomething from "../src/assets/images/letsDoSomething.png";
import Modal from 'react-modal';



function App() {

    const [ModalIsOpen, setModalIsOpen] = useState(false);

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
    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <div>
            <div class="animate__animated animate__fadeIn">
                <Main />
                {/* <img id = "oneSticker" src={oneSticker}/>
            <img id = "twoStickers" src={twoStickers}/> */}
            </div>
            <footer style={{ textAlign: 'center' }}>
                <div style={{ textAlign: 'center' }}
                onClick={openModal}
                id = "about"
            
                >
                About Us
                    </div>
                <Modal
                        isOpen={ModalIsOpen}
                        // onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <i id="x" class="fa fa-times" onClick={closeModal}></i>
                        <iframe src="https://player.vimeo.com/video/453484807" id = "iFrame"
                        width="640" height="360" frameborder="0" 
                        allow="autoplay; fullscreen" allowfullscreen></iframe>

                        
                    </Modal>
                <div className = "red end">
                {/* <span
  class="fb-share-button" 
  data-href="https://votingplan.org"
   data-layout="button" 
   data-size="large"
   > */}
   <a target="_blank"
    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvotingplan.org%2F&amp;src=sdkpreparse"
     class="fb-xfbml-parse-ignore" target = "_blank"><i style = {{marginRight: '20px'}} class="fa fa-facebook foot red"></i></a> 
           <a href="https://www.linkedin.com/sharing/share-offsite/?url=http://votingplan.org" target = "_blank"><i class="fa fa-linkedin foot red"></i></a>
     <a href="http://twitter.com/share?text=Check%20out%20this%20voting%20plan%20tool%20%23VotingPlan%20%23MakeAPlan%20%23letsDOsomething&url=https://votingplan.org" target = "_blank"><i style = {{marginLeft: '20px'}}class="fa fa-twitter foot red"></i></a>
                 
</div>
</footer>
</div>
    );
}

export default App;