import React from 'react';
import logo from "./logo.png"
import { Link } from "react-router-dom"
import resume from "./resume.png"
import pdf from "./resume.pdf"

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
        title: {
            color: "white",

        },
        resume:{
            display:"block",
            margin:"auto",
            width:"55%",
            marginBottom: "6em",
            boxShadow:"-5px 5px 5px grey",
            border:"solid #fcbc05",
            marginTop: "3em",
            padding:".5%"
        },
        button:{
            zoom: 2,
            display:"block",
            margin:"auto", 
            cursor:"pointer",
            outline:"none",
            borderRadius: 5,
            fontSize:".80em",
        }
    }
    return (
        <>
            <div style={styles.parent}>
                <a style={{ marginRight: "auto" }} href="/"><img className="nav" style={styles.logo} src={logo} alt="" /></a>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06" }}><Link className="link" style={{ textDecoration: "none" }} to="/">Home</Link></h3>
                <h3 style={styles.navMargin}><a className="link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} href="http://ibrahim-mohamed-dev.surge.sh">Portfolio</a></h3>
                <h3 className='nav' style={{ ...styles.navMargin, color: "#fbbc06" }}><Link className="link" style={{ textDecoration: "none", color: "#fcbc05" }} to="/resume">Resume</Link></h3>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06", marginRight: "3%" }}><Link className="link" style={{ textDecoration: "none" }} to="/contact">Contact</Link></h3>
            </div>
            <a href={pdf} download="Ibrahim Mohamed's Resume" style={{textDecoration:"none"}}><button className="button nav" style={{...styles.button}}>Download</button></a>
            <a href={pdf}><img style={styles.resume} src={resume} alt=""/></a>

        </>
    );
};

export default Home;