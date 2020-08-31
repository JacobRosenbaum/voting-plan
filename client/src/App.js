import React from "react";
import Main from "../src/pages/Main";
import "../src/assets/css/app.css";
import oneSticker from "../src/assets/images/oneSticker.png";
import twoStickers from "../src/assets/images/twoStickers.png";
import i from "../src/assets/images/exclamation.png";
import letsDoSomething from "../src/assets/images/letsDoSomething.png"


function App() {
    return (
        <div>
            <div class="animate__animated animate__fadeIn">
                <Main />
                {/* <img id = "oneSticker" src={oneSticker}/>
            <img id = "twoStickers" src={twoStickers}/> */}
            </div>
            <footer style={{ textAlign: 'center' }}>
                <div style={{ textAlign: 'center' }}>Let's DO Something</div>
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