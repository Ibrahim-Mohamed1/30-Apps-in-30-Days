import React from 'react';
import logo from "./logo.png"
import { Link } from "react-router-dom"

const Home = () => {
    const styles = {
        parent: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
        },
        logo: {
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
            <h1 style={{ textAlign: "center", color: "#fcbc05" }}>30 apps in 30 days</h1>
            <div className="projects">
                <div className="project1" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>1. Homepage</h2>
                                <h4 style={{padding: 5}}>Homepage for this AWESOME challenge!</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/14/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project2" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-2-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>2. Cute Cats</h2>
                                <h4 style={{padding: 5}}>An endless fun of cat images from the cat API!</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Cats API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/15/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project3" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-3-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>3. Weather Time</h2>
                                <h4 style={{padding: 5}}> Simple weather app to quickly allow a user to access weather in any zip code in the United States.</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, OpenWeather API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/16/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project4" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-4-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>4. Artist Finder</h2>
                                <h4 style={{padding: 5}}>Simple app to help users find artists similar to the ones they are currently listening to.</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, TasteDive API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/17/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project5" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-5-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>5. Show Finder</h2>
                                <h4 style={{padding: 5}}>Simple app to help users find shows similar to the ones they are currently watching.</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, TasteDive API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/18/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project6" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-6-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>6. Color Picker</h2>
                                <h4 style={{padding: 5}}>Simple app to help users find the perfect color if they are having a hard time finding a color.</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/19/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project7" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-7-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>7. NBA Playoffs Schedule</h2>
                                <h4 style={{padding: 5}}>Simple app to help users keep up to date with the 2018-2019 NBA Playoff season.</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, BallDontLie API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/20/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project8" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-8-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>8. Best Advice</h2>
                                <h4 style={{padding: 5}}>Simple advice app to humor users with fun realistic/funny life advice.</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Advice Slip API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/21/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project9" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-9-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>9. Best Dad Jokes</h2>
                                <h4 style={{padding: 5}}>Simple dad jokes app to help users smile by reading some awful dad jokes.</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Dad Jokes API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/22/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project10" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-10-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>10. Dogo World</h2>
                                <h4 style={{padding: 5}}>Simple dog rating app that puts smiles on users by looking at cute dogos.</h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Dog API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/23/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project11" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-11-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>11. Guess My Gender</h2>
                                <h4 style={{padding: 5}}>
                                    Simple app that checks your probability of either being male or female.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Gender API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/24/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project12" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-12-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>12. Movie Finder</h2>
                                <h4 style={{padding: 5}}>
                                    Simple app to help users find movies similar to the ones they are currently watching.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, TasteDive API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/25/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project13" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-13-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>13. What's Trump Said...</h2>
                                <h4 style={{padding: 5}}>
                                    Simple app to help users find what Trump has said about a specific topic/person.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Tronald API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/26/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project14" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-14-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>14. Cute Foxes</h2>
                                <h4 style={{padding: 5}}>
                                    An endless fun of fox images from the fox API!
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Fox API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/27/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project15" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-15-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>15. Tic Tac Toe</h2>
                                <h4 style={{padding: 5}}>
                                    Simple app to help users practice their Tic Tac Toe skills.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/28/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project16" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-16-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>16. Bored No More!</h2>
                                <h4 style={{padding: 5}}>
                                    Simple app to help users find things to do if they're bored.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Bored API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/29/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project17" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-17-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>17. Food Recipes</h2>
                                <h4 style={{padding: 5}}>
                                    Simple food recipe app to help users find and attempt to make new foods.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Recipe Puppy API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 04/30/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project18" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-18-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>18. Best Jokes</h2>
                                <h4 style={{padding: 5}}>
                                    Simple jokes app to help users smile by reading some great programmer/funny jokes.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Jokes API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/1/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project19" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-19-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>19. Fake ID</h2>
                                <h4 style={{padding: 5}}>
                                    Simple fake id app that users can engage with.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, UI Names API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/2/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project20" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-20-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>20. Find My IP Address</h2>
                                <h4 style={{padding: 5}}>
                                    Simple app to help users quickly figure out their ip address.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Ipify API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/3/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project21" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-21-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>21. Logo Finder</h2>
                                <h4 style={{padding: 5}}>
                                    Simple app that helps users find company logos to implement into their projects
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Clearbit Logo API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/4/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project22" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-22-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>22. Practice Jeopardy</h2>
                                <h4 style={{padding: 5}}>
                                    Simple app that helps users practice previous jeopardy questions to become the next Jeopardy winner.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, JService API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/5/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project23" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-23-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>23. Kanye Quotes</h2>
                                <h4 style={{padding: 5}}>
                                Simple app to amuse users with quotes by Kanye West.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Kanye API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/6/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project24" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-24-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>24. Lyric Finder!</h2>
                                <h4 style={{padding: 5}}>
                                Simple lyric app to help users practice singing along to their favorite songs.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Lyric API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/7/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project25" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-25-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>25. Domain Finder</h2>
                                <h4 style={{padding: 5}}>
                                Simple app that checks the availability of a users desired domain.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Domain API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/8/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project26" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-26-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>26. Slang & Hang</h2>
                                <h4 style={{padding: 5}}>
                                Simple app to help users understand the slang of todays teens.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Urban Dictionary API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/9/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project27" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-27-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>27. Love Calculator</h2>
                                <h4 style={{padding: 5}}>
                                Simple app that checks the probability of a user and their crushes compatibility.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, Love Calculator API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/10/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project28" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-28-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>28. Zoozle</h2>
                                <h4 style={{padding: 5}}>
                                Simple app to help users find search and find desired content on a replica of Google.
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, FAROO Web Search API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/11/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project29" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle1'>
                        <a href="http://app-29-of-30.surge.sh/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>29. Headlines</h2>
                                <h4 style={{padding: 5}}>
                                Simple app to help users keep up to date with latest news headlines. 
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}>JavaScript, React, JSX, Axios, news.org API, HTML, & CSS.</p>
                                <p style={{ margin: 0, marginRight: 5 }}>Made: 05/12/2019</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project30" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="/">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h2 className="nav" style={{marginTop: 0, color: "#fcbc05", padding: "2%" }}>30. Coming Soon...</h2>
                                <h4 style={{padding: 5}}>
                                </h4>
                                <p style={{ color: "lime", padding: 5 }}></p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;