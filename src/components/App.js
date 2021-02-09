import React from 'react';
import {Route} from 'react-router-dom';
import Login from './Login/login';
import Administrator from './Administrator/administrator';
import Home from './Home/home';
import Profile from './Profile/profile';
import CollegeSearch from './CollegeSearch/collegesearch';
import HighSchools from './HighSchools/highschools';
import AppTracker from './AppTracker/apptracker';
import Footer from './footer';
import '../css/App.css';

function App() {

    return(
        <div className="App">
            <Route exact path='/' component={Login}/>
            <Route exact path='/administrator' component={Administrator}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/collegesearch' component={CollegeSearch}/>
            <Route exact path='/highschools' component={HighSchools}/>
            <Route exact path='/apptracker' component={AppTracker}/>
            <Footer/>
        </div>
    );
    
}

export default App;