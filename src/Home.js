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
                                <h4>Homepage for this AWESOME challenge!</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project2" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-2-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>2. Cute Cats</h1>
                                <h4>An endless fun of cat images from the cat API!</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Cats API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project3" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-3-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>3. Weather Time</h1>
                                <h4> Simple weather app to quickly allow a user to access weather in any zip code in the United States.</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, OpenWeather API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project4" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-4-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>4. Artist Finder</h1>
                                <h4>Simple app to help users find artists similar to the ones they are currently listening to.</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, TasteDive API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project5" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-5-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>5. Show Finder</h1>
                                <h4>Simple app to help users find shows similar to the ones they are currently watching.</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, TasteDive API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project6" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-6-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>6. Color Picker</h1>
                                <h4>Simple app to help users find the perfect color if they are having a hard time finding a color.</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project7" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-7-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>7. NBA Playoffs Schedule</h1>
                                <h4>Simple app to help users keep up to date with the 2018-2019 NBA Playoff season.</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, BallDontLie API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project8" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-8-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>8. Best Advice</h1>
                                <h4>Simple advice app to humor users with fun realistic/funny life advice.</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Advice Slip API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project9" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-9-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>9. Best Dad Jokes</h1>
                                <h4>Simple dad jokes app to help users smile by reading some awful dad jokes.</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Dad Jokes API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project10" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-10-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>10. Dogo World</h1>
                                <h4>Simple dog rating app that puts smiles on users by looking at cute dogos.</h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Dog API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project11" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-11-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>11. Guess My Gender</h1>
                                <h4>
                                Simple app that checks your probability of either being male or female.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Gender API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project12" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-12-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>12. Movie Finder</h1>
                                <h4>
                                Simple app to help users find movies similar to the ones they are currently watching.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, TasteDive API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project13" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-13-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>13. What's Trump Said About...</h1>
                                <h4>
                                Simple app to help users find what Trump has said about a specific topic/person.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Tronald API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project14" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-14-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>14. Cute Foxes...</h1>
                                <h4>
                                An endless fun of fox images from the fox API!
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Fox API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project15" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-15-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>15. Tic Tac Toe</h1>
                                <h4>
                                Simple app to help users practice their Tic Tac Toe skills.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project16" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-16-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>16. Bored No More!</h1>
                                <h4>
                                Simple app to help users find things to do if they're bored.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Bored API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project17" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-17-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>17. Food Recipes</h1>
                                <h4>
                                Simple food recipe app to help users find and attempt to make new foods.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Recipe Puppy API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project18" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-18-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>18. Best Jokes</h1>
                                <h4>
                                Simple jokes app to help users smile by reading some great programmer/funny jokes. 
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Jokes API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project19" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-19-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#fcbc05", padding: "2%" }}>19. Fake ID</h1>
                                <h4>
                                Simple fake id app that users can engage with.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, JSX, Axios, Jokes API, HTML, & CSS.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project20" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-20-of-30.surge.sh/">
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
                    <div className='middle1'>
                        <a href="http://app-21-of-30.surge.sh/">
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
                    <div className='middle1'>
                        <a href="http://app-22-of-30.surge.sh/">
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