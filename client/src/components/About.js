import React, { Component } from 'react';
import "../assets/css/about.css";
import How from "../components/How";
import VotePlan from "../components/VotePlan"

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            showButton: true
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        console.log("clicked")
        this.setState({
            showComponent: true,
            showButton: false
        });

    }

    render() {
        return (
            <div class="container">
                <div class="jumbotron">
                    <div>
                        {this.state.showComponent ?
                            <How /> : <VotePlan />
                        }
                        {this.state.showButton ?
                        <div style = {{textAlign: "center"}}>
                            <button class="btn btn-primary" onClick={this._onButtonClick}>Let's go</button> 
                        </div>      : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default About;