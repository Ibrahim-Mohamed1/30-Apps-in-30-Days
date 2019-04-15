import React, { Component } from 'react';
import { withData } from './DataProvider';


class RockPaperScissors extends Component {
    constructor() {
        super();
        this.state={
            cat: ""
        }
    }

    componentDidMount() {
        
    }
    
    render() {
        console.log(this.props)
        return (
            <div style={{backgroundImage: "url(http://www.windows7desktopwallpapers.com/wallpapers/1680x1050/prussian-white-smoke.jpg)", height:"100vh"}}>
                <h1 style={{color: "white", fontSize:"4em", fontFamily:"cursive", margin: 0 }}>EMMA is bae af ;P</h1>
            </div>
        );
    }
}

export default withData(RockPaperScissors);