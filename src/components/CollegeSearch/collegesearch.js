import React, {useState} from 'react';
import Logo from '../logo';
import NavBar from '../navbar';
import CollegeModal from './collegemodal';
import './collegesearch.css';

function CollegeSearch() {

    const [isOpen, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }

    return(
        <div className='collegeSearchPage' id='AppBody'>
            <div className='headerContainer'>
                <Logo/>
                <NavBar/>
            </div>
            <div className='pageHeading'>
                <h1>Search for Colleges / College Recommender</h1>
            </div>
            <div className='sectionContainer'>
                <div className='searchBar'>
                    <input type="text" name="collegeSearch" placeholder="Enter College"/>
                    <button className='searchButton'>Search</button>
                </div>
            </div>
            <div className='sectionContainer' id='sortContainer'>
                <button className='sortButton'>Sort by Name</button>
                <button className='sortButton'>Sort by Admission Rate</button>
                <button className='sortButton'>Sort by Cost of Attendance</button>
                <button className='sortButton'>Sort by Ranking</button>
                <button className='sortButton'>Sort by Recommendation</button>
            </div>
            <div className='sectionContainer' id='collegeResultContainer'>
                <div className='rangeContainer'>
                    <div className='labelContainer'>
                        <p>Admission Rate</p>
                        <p>Cost of Attendance</p>
                        <p>Location</p>
                        <p>Majors</p>
                        <br></br>
                        <p>Admission Rate</p>
                        <p>Ranking</p>
                        <p>Size</p>
                        <p>AVG SAT Math</p>
                        <p>AVG SAT EBRW</p>
                        <p>AVG ACT Composite</p>
                    </div>
                    <div className='sliderContainer'>
                        <div class="rangeInput">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                        </div>
                        <div class="rangeInput">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                        </div>
                        <div className='rangeInput'>
                            <select id="location">
                                <option value="">New York</option>
                                <option value="">Massachusetts</option>
                                <option value="">New Jersey</option>
                                <option value="">California</option>
                            </select>
                        </div>
                        <div className='rangeInput'>
                            <select id="majors">
                                <option value="">Computer Science</option>
                            </select>
                        </div>
                        <div className='rangeInput'>
                            <select id="majors">
                                <option value="">N/A</option>
                            </select>
                        </div>
                        <div class="rangeInput">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                        </div>
                        <div class="rangeInput">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                        </div>
                        <div class="rangeInput">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                        </div>
                        <div class="rangeInput">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                        </div>
                        <div class="rangeInput">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                        </div>
                        <div class="rangeInput">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
                        </div>
                    </div>
                </div>
                <div className='resultsContainer'>
                    <div className='resultBox' onClick={openModal}>
                        <div className='resultName'>
                            <h2>Stony Brook University</h2>
                        </div>
                        <div className='resultInfo'>
                            <p>Admission Rate: <strong>42.2%</strong></p>
                            <p>Cost of Attendance: <strong>$10,175</strong></p>
                            <p>Ranking: <strong>#91</strong></p>
                        </div>
                        <div className='recommendationScore'>
                            <h3>96</h3>
                        </div>
                    </div>
                    <div className='resultBox' onClick={openModal}>
                        <div className='resultName'>
                            <h2>University at Buffalo</h2>
                        </div>
                        <div className='resultInfo'>
                            <p>Admission Rate: <strong>42.2%</strong></p>
                            <p>Cost of Attendance: <strong>$10,175</strong></p>
                            <p>Ranking: <strong>#91</strong></p>
                        </div>
                        <div className='recommendationScore'>
                            <h3>92</h3>
                        </div>
                    </div>
                    <div className='resultBox' onClick={openModal}>
                        <div className='resultName'>
                            <h2>Columbia University</h2>
                        </div>
                        <div className='resultInfo'>
                            <p>Admission Rate: <strong>42.2%</strong></p>
                            <p>Cost of Attendance: <strong>$10,175</strong></p>
                            <p>Ranking: <strong>#91</strong></p>
                        </div>
                        <div className='recommendationScore'>
                            <h3>87</h3>
                        </div>
                    </div>
                    <div className='resultBox' onClick={openModal}>
                        <div className='resultName'>
                            <h2>Binghamton University</h2>
                        </div>
                        <div className='resultInfo'>
                            <p>Admission Rate: <strong>42.2%</strong></p>
                            <p>Cost of Attendance: <strong>$10,175</strong></p>
                            <p>Ranking: <strong>#91</strong></p>
                        </div>
                        <div className='recommendationScore'>
                            <h3>85</h3>
                        </div>
                    </div>
                    <div className='resultBox' onClick={openModal}>
                        <div className='resultName'>
                            <h2>New York University</h2>
                        </div>
                        <div className='resultInfo'>
                            <p>Admission Rate: <strong>42.2%</strong></p>
                            <p>Cost of Attendance: <strong>$10,175</strong></p>
                            <p>Ranking: <strong>#91</strong></p>
                        </div>
                        <div className='recommendationScore'>
                            <h3>81</h3>
                        </div>
                    </div>
                    <div className='resultBox' onClick={openModal}>
                        <div className='resultName'>
                            <h2>Massachusetts Institute of Technology</h2>
                        </div>
                        <div className='resultInfo'>
                            <p>Admission Rate: <strong>42.2%</strong></p>
                            <p>Cost of Attendance: <strong>$10,175</strong></p>
                            <p>Ranking: <strong>#91</strong></p>
                        </div>
                        <div className='recommendationScore'>
                            <h3>72</h3>
                        </div>
                    </div>
                </div>
            </div>
            <CollegeModal isOpen={isOpen} openCollege={() => setOpen(!isOpen)}/>
        </div>
    );
}

export default CollegeSearch;