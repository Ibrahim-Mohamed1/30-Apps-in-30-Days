import React from 'react';
import logo from "./logo.png"
import { Link } from "react-router-dom"

const Home = () => {
    const styles = {
        parent:{
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-between",
            padding: 10
        },
        logo:{
            width: 40,
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
                <h3 className='nav' style={{ ...styles.navMargin, color: "#fbbc06" }}><Link className="link" style={{ textDecoration: "none", color: "#fcbc05" }} to="/">Home</Link></h3>
                <h3 style={styles.navMargin}><a className="link" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }} href="http://ibrahim-mohamed-dev.surge.sh">Portfolio</a></h3>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06" }}><Link className="link" style={{ textDecoration: "none" }} to="/skills">Skills</Link></h3>
                <h3 style={{ ...styles.navMargin, color: "#fbbc06", marginRight: "3%" }}><Link className="link" style={{ textDecoration: "none" }} to="/contact">Contact</Link></h3>
            </div>
            <br />
            <h1 style={{ textAlign: "center", color:"#fcbc05" }}>30 apps in 30 days</h1>
            <div className="projects">
                <div className="project1" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>1. Homepage</h1>
                                <h4>
                                    Homepage for this AWESOME challenge!
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project2" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>2. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project3" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>3. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project4" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>4. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project5" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>5. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project6" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>6. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project7" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>7. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project8" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>8. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project9" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>9. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project10" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>10. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project11" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>11. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project12" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>12. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project13" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>13. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project14" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>14. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project15" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>15. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project16" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>16. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project17" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>17. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project18" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>18. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project19" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>19. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project20" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>20. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project21" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>21. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project22" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>22. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project23" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>23. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project24" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>24. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project25" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>25. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project26" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>26. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project27" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>27. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project28" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>28. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project29" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>29. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project30" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>30. Coming Soon...</h1>
                                <h4>
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;