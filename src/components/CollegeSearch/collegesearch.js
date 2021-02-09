import React, {useEffect, useState} from 'react';
import Logo from '../logo';
import NavBar from '../navbar';
import CollegeModal from './collegemodal';
import '../../css/collegesearch.css';

function CollegeSearch() {

    const [isOpen, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }

    const sortMessage = (message) => {
        console.log(`Sorting by ${message}... (No Actual POST Request)`);
    }

    const searchMessage = (message) => {
        console.log(`Searching by ${message}... (No Actual POST Request)`);
    }

    const setLeftValue = (inputLeft, inputRight, sliderRange, thumbLeft, input, inputCheck) => {
        let value = inputLeft.value;
        let min = inputLeft.min;
        let max = inputLeft.max;
        if (inputCheck) value = input;
        let maxValue = Math.min(parseInt(value), parseInt(inputRight.value));
        inputLeft.value = maxValue;
        let percent = ((inputLeft.value - min) / (max - min) * 100);
        thumbLeft.style.left = `${percent}%`;
        sliderRange.style.left = `${percent}%`;
    }

    const setRightValue = (inputLeft, inputRight, sliderRange, thumbRight, input, inputCheck) => {
        let value = inputRight.value;
        let min = inputRight.min;
        let max = inputRight.max;
        if (inputCheck) value = input;
        let minValue = Math.max(parseInt(value), parseInt(inputLeft.value));
        inputRight.value = minValue;
        let percent = ((inputRight.value - min) / (max - min) * 100);
        thumbRight.style.right = `${100 - percent}%`;
        sliderRange.style.right = `${100 - percent}%`;
    }
    
    useEffect(() => {
        var rangeFieldContainers = document.getElementsByClassName("rangeFieldContainer");
        for (var i = 0; i < rangeFieldContainers.length; i++) {
            let currentContainer = rangeFieldContainers[i];
            if (currentContainer.id === "locationContainer" || currentContainer.id === "majorContainer") {
                continue;
            }
            let sliders = currentContainer.getElementsByClassName("rangeSliders")[0];
            let inputLeft = sliders.getElementsByClassName("leftSlider")[0];
            let inputRight = sliders.getElementsByClassName("rightSlider")[0];
            let actualSliders = sliders.getElementsByClassName("actualSlider")[0];
            let sliderRange = actualSliders.getElementsByClassName("sliderRange")[0];
            let thumbLeft = actualSliders.getElementsByClassName("sliderLeftThumb")[0];
            let thumbRight = actualSliders.getElementsByClassName("sliderRightThumb")[0];
            let input = 0;
            let inputCheck = false;
            let rangeLabels = currentContainer.getElementsByClassName("rangeLabels")[0];
            let fieldMinInput = rangeLabels.getElementsByClassName("sliderInput")[0];
            let fieldMaxInput = rangeLabels.getElementsByClassName("sliderInput")[1];
            setLeftValue(inputLeft, inputRight, sliderRange, thumbLeft, input, inputCheck);
            setRightValue(inputLeft, inputRight, sliderRange, thumbRight, input, inputCheck);
            inputLeft.addEventListener("input", () => {
                inputCheck = false;
                setLeftValue(inputLeft, inputRight, sliderRange, thumbLeft, input, inputCheck);
                fieldMinInput.value = inputLeft.value;
            })
            inputRight.addEventListener("input", () => {
                inputCheck = false;
                setRightValue(inputLeft, inputRight, sliderRange, thumbRight, input, inputCheck);
                fieldMaxInput.value = inputRight.value;
            })
            fieldMinInput.addEventListener("input", () => {
                inputCheck = true;
                let newInput = fieldMinInput.value;
                setLeftValue(inputLeft, inputRight, sliderRange, thumbLeft, newInput, inputCheck);
            })
            fieldMaxInput.addEventListener("input", () => {
                inputCheck = true;
                let newInput = fieldMaxInput.value;
                setRightValue(inputLeft, inputRight, sliderRange, thumbRight, newInput, inputCheck);
            })
        }
        return () => {
            for (var i = 0; i < rangeFieldContainers.length; i++) {
                let currentContainer = rangeFieldContainers[i];
                if (currentContainer.id === "locationContainer" || currentContainer.id === "majorContainer") {
                    continue;
                }
                let sliders = currentContainer.getElementsByClassName("rangeSliders")[0];
                let inputLeft = sliders.getElementsByClassName("leftSlider")[0];
                let inputRight = sliders.getElementsByClassName("rightSlider")[0];
                let actualSliders = sliders.getElementsByClassName("actualSlider")[0];
                let sliderRange = actualSliders.getElementsByClassName("sliderRange")[0];
                let thumbLeft = actualSliders.getElementsByClassName("sliderLeftThumb")[0];
                let thumbRight = actualSliders.getElementsByClassName("sliderRightThumb")[0];
                let input = 0;
                let inputCheck = false;
                let rangeLabels = currentContainer.getElementsByClassName("rangeLabels")[0];
                let fieldMinInput = rangeLabels.getElementsByClassName("sliderInput")[0];
                let fieldMaxInput = rangeLabels.getElementsByClassName("sliderInput")[1];
                setLeftValue(inputLeft, inputRight, sliderRange, thumbLeft, input, inputCheck);
                setRightValue(inputLeft, inputRight, sliderRange, thumbRight, input, inputCheck);
                inputLeft.removeEventListener("input", () => {
                    inputCheck = false;
                    setLeftValue(inputLeft, inputRight, sliderRange, thumbLeft, input, inputCheck);
                    fieldMinInput.value = inputLeft.value;
                })
                inputRight.removeEventListener("input", () => {
                    inputCheck = false;
                    setRightValue(inputLeft, inputRight, sliderRange, thumbRight, input, inputCheck);
                    fieldMaxInput.value = inputRight.value;
                })
                fieldMinInput.removeEventListener("input", () => {
                    inputCheck = true;
                    let newInput = fieldMinInput.value;
                    setLeftValue(inputLeft, inputRight, sliderRange, thumbLeft, newInput, inputCheck);
                })
                fieldMaxInput.removeEventListener("input", () => {
                    inputCheck = true;
                    let newInput = fieldMaxInput.value;
                    setRightValue(inputLeft, inputRight, sliderRange, thumbRight, newInput, inputCheck);
                })
            }
        }
    }, []);

    return(
        <div className='collegeSearchPage' id='AppBody'>
            <div className='headerContainer'>
                <Logo/>
                <NavBar/>
            </div>
            <div className='pageHeading'>
                <h1>Search for Colleges / College Recommender</h1>
            </div>
            <div className='sectionContainer' id='sortContainer'>
                <button className='sortButton' id="sortByNames" onClick={() => sortMessage("Names")}>Sort by Name</button>
                <button className='sortButton' id="sortAdmission" onClick={() => sortMessage("Admission")}>Sort by Admission Rate</button>
                <button className='sortButton' id="sortByCOA" onClick={() => sortMessage("Cost")}>Sort by Cost of Attendance</button>
                <button className='sortButton' id="sortByRank" onClick={() => sortMessage("Rank")}>Sort by Ranking</button>
                <input type="checkbox" id="computeReccomendationScores"/>
                    <label htmlFor="recScore" className="reccom">Compute Reccomendation Scores</label>
                    <br/>
            </div>
            <div className='sectionContainer' id='searchContainer'>
                <button className='searchButton' id="searchCriteria" onClick={() => searchMessage("Criteria")}>Search Criteria (unsorted)</button>
                <button className='searchButton' id="searchAllColleges" onClick={() => searchMessage("All")}>Show All Colleges</button>
            </div>
            <div className='sectionContainer' id='collegeResultContainer'>
                <div className='rangeContainer'>
                    {/* Admission Rate */}
                    <div className="rangeFieldContainer" id="admissionRateContainer">
                        <div className="rangeLabels">
                            <p>Admission Rate</p>
                            <input className="sliderInput" id="admissionRateMinInput" type="text" defaultValue="1"/>
                            <input className="sliderInput" id="admissionRateMaxInput" type="text" defaultValue="100"/>
                        </div>
                        <div className="rangeSliders">
                            <input className="leftSlider" type="range" step="1" min="1"
                                max="100" defaultValue="1"/> <input className="rightSlider"
                                type="range" step="1" min="1" max="100" defaultValue="100"/>
                            <div className="actualSlider">
                                <div className="sliderTrack"></div>
                                <div className="sliderRange"></div>
                                <div className="sliderLeftThumb"></div>
                                <div className="sliderRightThumb"></div>
                            </div>
                        </div>
                    </div>
                    {/* Cost of Attendance */}
                    <div className="rangeFieldContainer" id="costOfAttendanceContainer">
                        <div className="rangeLabels">
                            <p>Cost of Attendance</p>
                            <input className="sliderInput" id="costOfAttendanceMinInput"
                                type="text" data-index="0" defaultValue="10000" /> <input
                                className="sliderInput" id="costOfAttendanceMaxInput" type="text"
                                data-index="1" defaultValue="80000" />
                        </div>
                        <div className="rangeSliders">
                            <input className="leftSlider" type="range" step="1" min="10000"
                                max="80000" defaultValue="10000"/> <input className="rightSlider"
                                type="range" step="1" min="10000" max="80000" defaultValue="80000"/>
                            <div className="actualSlider">
                                <div className="sliderTrack"></div>
                                <div className="sliderRange"></div>
                                <div className="sliderLeftThumb"></div>
                                <div className="sliderRightThumb"></div>
                            </div>
                        </div>
                    </div>
                    {/* Location */}
                    <div className="rangeFieldContainer" id="locationContainer">
                        <div className="rangeLabels">
                            <p>Location</p>
                            <div className="dropDownContainer">
                                <select id="locationUSA">
                                    <option value="USA">NATIONWIDE</option>
                                    <option value="NORTHEAST">NORTHEAST</option>
                                    <option value="MIDWEST">MIDWEST</option>
                                    <option value="SOUTH">SOUTH</option>
                                    <option value="WEST">WEST</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    {/* Majors */}
                    <div className="rangeFieldContainer" id="majorContainer">
                        <div className="rangeLabels">
                            <p>Majors</p>
                            <div className="dropDownContainer">
                                <select id="majors">
                                    <option value="none">NONE</option>
                                    <option value="CSE">COMPUTER SCIENCE</option>
                                    <option value="MAT">MATHEMATICS</option>
                                </select> 
                            </div>
                        </div>
                    </div>
                    {/* Ranking */}
                    <div className="rangeFieldContainer" id="rankingContainer">
                        <div className="rangeLabels">
                            <p>Ranking</p>
                            <input className="sliderInput" id="rankingMinInput" type="text"
                                data-index="0" defaultValue="1" /> <input className="sliderInput"
                                id="rankingMaxInput" type="text" data-index="1" defaultValue="500" />
                        </div>
                        <div className="rangeSliders">
                            <input className="leftSlider" type="range" step="1" min="1"
                                max="500" defaultValue="1"/> <input className="rightSlider"
                                type="range" step="1" min="1" max="500" defaultValue="500"/>
                            <div className="actualSlider">
                                <div className="sliderTrack"></div>
                                <div className="sliderRange"></div>
                                <div className="sliderLeftThumb"></div>
                                <div className="sliderRightThumb"></div>
                            </div>
                        </div>
                    </div>
                    {/* Size */}
                    <div className="rangeFieldContainer" id="sizeContainer">
                        <div className="rangeLabels">
                            <p>Size</p>
                            <input className="sliderInput" id="sizeMinInput" type="text"
                                data-index="0" defaultValue="5000" /> <input className="sliderInput"
                                id="sizeMaxInput" type="text" data-index="1" defaultValue="50000" />
                        </div>
                        <div className="rangeSliders">
                            <input className="leftSlider" type="range" step="100" min="1000"
                                max="50000" defaultValue="1000"/> <input className="rightSlider"
                                type="range" step="100" min="1000" max="50000" defaultValue="50000"/>
                            <div className="actualSlider">
                                <div className="sliderTrack"></div>
                                <div className="sliderRange"></div>
                                <div className="sliderLeftThumb"></div>
                                <div className="sliderRightThumb"></div>
                            </div>
                        </div>
                    </div>
                    {/* AVG SAT Math */}
                    <div className="rangeFieldContainer" id="avgSATMathContainer">
                        <div className="rangeLabels">
                            <p>AVG SAT Math</p>
                            <input className="sliderInput" id="avgSATMathMinInput" type="text"
                                data-index="0" defaultValue="200" /> <input className="sliderInput"
                                id="avgSATMathMaxInput" type="text" data-index="1" defaultValue="800" />
                        </div>
                        <div className="rangeSliders">
                            <input className="leftSlider" type="range" step="10" min="200"
                                max="800" defaultValue="200"/> <input className="rightSlider"
                                type="range" step="10" min="200" max="800" defaultValue="800"/>
                            <div className="actualSlider">
                                <div className="sliderTrack"></div>
                                <div className="sliderRange"></div>
                                <div className="sliderLeftThumb"></div>
                                <div className="sliderRightThumb"></div>
                            </div>
                        </div>
                    </div>
                    {/* AVG SAT EBRW */}
                    <div className="rangeFieldContainer" id="avgSATEBRWContainer">
                        <div className="rangeLabels">
                            <p>AVG SAT EBRW</p>
                            <input className="sliderInput" id="avgSATEBRWMinInput" type="text"
                                data-index="0" defaultValue="200" /> <input className="sliderInput"
                                id="avgSATEBRWMaxInput" type="text" data-index="1" defaultValue="800" />
                        </div>
                        <div className="rangeSliders">
                            <input className="leftSlider" type="range" step="10" min="200"
                                max="800" defaultValue="200"/> <input className="rightSlider"
                                type="range" step="10" min="200" max="800" defaultValue="800"/>
                            <div className="actualSlider">
                                <div className="sliderTrack"></div>
                                <div className="sliderRange"></div>
                                <div className="sliderLeftThumb"></div>
                                <div className="sliderRightThumb"></div>
                            </div>
                        </div>
                    </div>
                    {/* AVG ACT */}
                    <div className="rangeFieldContainer" id="avgACTContainer">
                        <div className="rangeLabels">
                            <p>AVG ACT</p>
                            <input className="sliderInput" id="avgACTMinInput" type="text"
                                data-index="0" defaultValue="1" /> <input className="sliderInput"
                                id="avgACTMaxInput" type="text" data-index="1" defaultValue="36" />
                        </div>
                        <div className="rangeSliders">
                            <input className="leftSlider" type="range" step="1" min="1" max="36"
                                defaultValue="1"/> <input className="rightSlider" type="range"
                                step="1" min="1" max="36" defaultValue="36"/>
                            <div className="actualSlider">
                                <div className="sliderTrack"></div>
                                <div className="sliderRange"></div>
                                <div className="sliderLeftThumb"></div>
                                <div className="sliderRightThumb"></div>
                            </div>
                        </div>
                    </div>
                    {/* Filter Type */}
                    <div className="rangeFieldContainer" id="majorContainer">
                        <div className="rangeLabels">
                            <p>Filter Type</p>
                            <div className="dropDownContainer">
                                <div className="filterRB">
                                    <input id="filterStatus" type="radio" className="filterRBA"
                                        name="updateFilter" defaultValue="STRICT"/>
                                    <label>Strict</label>
                                </div>
                                <div className="filterRB">
                                    <input id="filterStatus" type="radio" className="filterRBA"
                                        name="updateFilter" defaultValue="LAX"/>
                                    <label>Lax</label>
                                </div>
                            </div>
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