import React, { Fragment } from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Workouts from './components/pages/Workouts';
import Programs from './components/pages/Programs';
import Forum from './components/pages/Forum';
import TimerItem from './components/items/TimerItem'
import Plan from './components/pages/Plan';
import WorkoutState from './context/workout/WorkoutState';
import ForumState from './context/forum/ForumState';
import ProgramState from './context/program/ProgramState';
import CreateProgramState from './context/createProgram/CreateProgramState';

const App = () => {
  return (
    <WorkoutState>
    <ForumState>
    <ProgramState>
    <CreateProgramState>
      <Router>
      <Fragment>
        <Navbar />
        <div className="mainsection">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/workouts' component={Workouts} />
            <Route exact path='/programs' component={Programs} />
            <Route exact path='/forum' component={Forum} />
            <Route exact path='/timer' component={TimerItem} />
            <Route exact path='/plan' component={Plan} />
          </Switch>
        </div>
        <div className="mainfooter">

        </div>
      </Fragment>
      </Router>
      </CreateProgramState>
      </ProgramState>
      </ForumState>
    </WorkoutState>
  );
}

export default App;
