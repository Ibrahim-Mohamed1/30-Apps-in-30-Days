import React from 'react';
import logo from "./logo.png"
import { Link } from "react-router-dom"

const Home = () => {
    const styles = {
        parent: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            color: "white",
            padding: "1%"
        },
        logo: {
            width: 50,
            height: 50,
            marginRight: "auto"
        },
        navMargin: {
            marginLeft: "5%",
            textDecoration: "none"
        },
    }
    return (
        <>
            <div style={styles.parent}>
                <a style={{ marginRight: "auto" }} href="/"><img className="nav" style={styles.logo} src={logo} alt="" /></a>
                <h3 className='nav' style={{ ...styles.navMargin, color: "#fbbc06" }}><Link className="link" style={{ textDecoration: "none", color: "#ff9450" }} to="/">Home</Link></h3>
                <h3 style={styles.navMargin}><a className="link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} href="http://ibrahim-mohamed-dev.surge.sh">Portfolio</a></h3>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06" }}><Link className="link" style={{ textDecoration: "none" }} to="/resume">Resume</Link></h3>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06", marginRight: "3%" }}><Link className="link" style={{ textDecoration: "none" }} to="/contact">Contact</Link></h3>
            </div>
            <br />
            <h2 style={{ color: 'white', textAlign:"center" }}>30 apps in 30 days</h2>
            <div className="projects">
                <div className="project1" style={{ cursor:"pointer", backgroundSize: "cover", backgroundRepeat:"no-repeat", height: "vh"}}>
                    <div className='middle'>
                        <a href="http://cuisine-hunter.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{marginTop:"-1em"}}>
                                <h1 className="nav" style={{color:"#ff9450", padding:"2%"}}>Cuisine Hunter</h1>
                                <h4>An app created with React.js to help users find restuarants in Utah serving desired cuisines.
                                </h4>
                                <p style={{color:"lime", padding:"5%", margin: 0}}>JavaScript, React, Axios, HTML, CSS, & JSX</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project1" style={{ cursor:"pointer", backgroundSize: "cover", backgroundRepeat:"no-repeat", height: "vh"}}>
                    <div className='middle'>
                        <a href="http://crypto-dash.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{marginTop:"-1.5em"}}>
                                <h1 className="nav" style={{color:"#ff9450", padding:"2%"}}>Crypto Dash</h1>
                                <h4>
                                    An app created with React.js to help users quickly track cryptocurrency stocks live whilst keeping up to date with the latest crypto news.
                                </h4>
                                <p style={{color:"lime", padding:"5%", margin: 0}}>React, JavaScript, MongoDB, Mongoose, Axios, Node.js, JSX, HTML, & CSS</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project1" style={{ cursor:"pointer", backgroundSize: "cover", backgroundRepeat:"no-repeat", height: "vh"}}>
                    <div className='middle'>
                        <a href="http://crypto-dash.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{marginTop:"-1.5em"}}>
                                <h1 className="nav" style={{color:"#ff9450", padding:"2%"}}>Crypto Dash</h1>
                                <h4>
                                    An app created with React.js to help users quickly track cryptocurrency stocks live whilst keeping up to date with the latest crypto news.
                                </h4>
                                <p style={{color:"lime", padding:"5%", margin: 0}}>React, JavaScript, MongoDB, Mongoose, Axios, Node.js, JSX, HTML, & CSS</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project1" style={{ cursor:"pointer", backgroundSize: "cover", backgroundRepeat:"no-repeat", height: "vh"}}>
                    <div className='middle'>
                        <a href="http://crypto-dash.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{marginTop:"-1.5em"}}>
                                <h1 className="nav" style={{color:"#ff9450", padding:"2%"}}>Crypto Dash</h1>
                                <h4>
                                    An app created with React.js to help users quickly track cryptocurrency stocks live whilst keeping up to date with the latest crypto news.
                                </h4>
                                <p style={{color:"lime", padding:"5%", margin: 0}}>React, JavaScript, MongoDB, Mongoose, Axios, Node.js, JSX, HTML, & CSS</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;