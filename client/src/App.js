import React, { Fragment } from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alerts from './components/layout/Alerts';
import Workouts from './components/pages/Workouts';
import Programs from './components/pages/Programs';
import Forum from './components/pages/Forum';
import TimerItem from './components/items/TimerItem'
import Plan from './components/pages/Plan';
import NewProgram from './components/pages/NewProgram';
import MessageCoach from './components/pages/MessageCoach';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/routing/PrivateRoute';
import WorkoutState from './context/workout/WorkoutState';
import AdminUser from './components/admin/AdminUser';
import AdminCoach from './components/admin/AdminCoach';
import ForumState from './context/forum/ForumState';
import ProgramState from './context/program/ProgramState';
import CreateProgramState from './context/createProgram/CreateProgramState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import AdminState from './context/admin/AdminState';
import MessageCoachState from './context/messageCoach/MessageCoachState';
import setAuthToken from './utils/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  
  

  return (
    <AuthState>
    <WorkoutState>
    <ForumState>
    <ProgramState>
    <CreateProgramState>
    <AdminState >
    <MessageCoachState>
      <AlertState>
       
      <Router>
      <Fragment>
        <Navbar />
        <div className="mainsection">
          <Alerts />
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/workouts' component={Workouts} />
            <PrivateRoute exact path='/programs' component={Programs} />
            <PrivateRoute exact path='/forum' component={Forum} />
            <PrivateRoute exact path='/timer' component={TimerItem} />
            <PrivateRoute exact path='/plan' component={Plan} />
            <PrivateRoute exact path='/newProgram' component={NewProgram} />
            <PrivateRoute exact path='/adminUser' component={AdminUser} />
            <PrivateRoute exact path='/messageCoach' component={MessageCoach} />
            <PrivateRoute exact path='/adminCoach' component={AdminCoach} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
        <div className="mainfooter">

        </div>
      </Fragment>
      </Router>
      
      </AlertState>
      </MessageCoachState>
      </AdminState>
      </CreateProgramState>
      </ProgramState>
      </ForumState>
    </WorkoutState>
    </AuthState>
  );
}

export default App;
