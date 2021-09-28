import React, { useContext, useEffect } from 'react';
import pressUpImage from '../../images/pressupimage.jpg';
import abexercise from '../../images/abexercise.jpeg';
import runningimage from '../../images/runningimage.jpeg';
import parkexercising from '../../images/parkexercising.jpeg';
import coachimage from '../../images/coachPage.jpeg';
import historyimage from '../../images/history.jpeg'
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    // loads user on mount
    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="homesectioncontainer">
            <div className="homesection1">
                <div className="homesectionboxes">
                    <h2>Get into Fitness</h2>
                    <p>There are a number of reasons why you should get into 
                        exercising today. Exercising has been proven to reduce 
                        the risk of getting a number of major illnesses. It can 
                        also improve sleep quality, boost energy and make you 
                        feel good about yourself. This app contains a number of 
                        differents types of training sessions and programs which 
                        can all be carried out with no equipment so why not give 
                        it a go today.   
                    </p>
                
                </div>
                <div className="homesectionboxes"><img src={pressUpImage} alt={"pressUpImage"} className="homeimg"></img></div>
                
            </div>
            <div className="homesection2">
                <div className="homesectionboxes">
                    <h2>Workouts</h2>
                    <p>There are a number of different types of workouts 
                        available so you will be to find the workouts that 
                        suit you. The workouts are taylored to your 
                        fitness level and can be performed anywhere with no 
                        equipment. The workouts are made up high intensity 
                        intervals and are guaranteed to work you from head 
                        to toe.
                    </p>
                </div>
                <div className="homesectionboxes" ><img src={abexercise} alt={"abExercise"} className="homeimg"></img></div>
        
            </div>
            <div className="homesection1">
                <div className="homesectionboxes">
                    <h2>Programs</h2>
                    <p>If you are looking to structure your weeks training there 
                        are different programs available to you. The programs 
                        plan out what days to train and what training sessions 
                        you should do on those days. You can choose to carry out 
                        the couch to 5K which is
                        a running plan which will have you running 5K in no time. 
                        The are also High Intensity Interval training programs. 
                        These programs contain workouts that are designed to work the 
                        whole body and get the heart racing. 
                        You can also choose to make your own plan and structure your 
                        own training. 
                    </p>
                
                </div>
                <div className="homesectionboxes"><img src={runningimage} alt={"runningImage"} className="homeimg"></img></div>
                
            </div>
            <div className="homesection2">
                <div className="homesectionboxes">
                    <h2>Forum</h2>
                    <p>
                        Keep in contact and get advice from other like minded 
                        people in the fitness community. The forum gives you an 
                        opportunity to post in messages and ask other members 
                        any questions you may have. 
                    </p>
                </div>
                <div className="homesectionboxes"><img src={parkexercising} alt={"parkExercising"} className="homeimg"></img></div>
        
            </div>

            <div className="homesection1">
                <div className="homesectionboxes">
                    <h2>Msg Coach</h2>
                    <p>
                        You can contact a coach by messaging directly on the Msg Coach 
                        page. You can mesage a coach if you have any training problems 
                        or ask a coach for training advice. 
    
                    </p>
                
                </div>
                <div className="homesectionboxes"><img src={coachimage} alt={"coachImage"} className="homeimg"></img></div>
                
            </div>

            <div className="homesection2">
                <div className="homesectionboxes">
                    <h2>History</h2>
                    <p>
                        You can find and view all the workouts that you have completed on 
                        the history page. You can see the name and description of the workouts 
                        that you have completed, as well as the date you completed them. 
                    </p>
                </div>
                <div className="homesectionboxes"><img src={historyimage} alt={"historyimage"} className="homeimg"></img></div>
        
            </div>
        </div>
        
    )
}

export default Home
