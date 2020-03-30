import React from 'react';
// import NavBar from './navbar';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Profile from './components/Profile/profile';
import CollegeSearch from './components/CollegeSearch/collegesearch';
import HighSchools from './components/HighSchools/highschools';
import AppTracker from './components/AppTracker/apptracker';
import Footer from './components/footer';
import {Route} from 'react-router-dom';
import './App.css';

function App() {

    return(
        <div className="App">
            <Route exact path='/' component={Login}/>
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