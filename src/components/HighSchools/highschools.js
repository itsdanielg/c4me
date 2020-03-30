import React from 'react';
import Logo from '../logo';
import NavBar from '../navbar';
import './highschools.css';

function HighSchools() {

    return(
        <div className='highSchoolsPage' id='AppBody'>
            <div className='headerContainer'>
                <Logo/>
                <NavBar/>
            </div>
            <div className='pageHeading'>
                <h1>Search Similar High Schools</h1>
            </div>
            <div className='sectionContainer'>
                <div className='searchBar'>
                    <input type="text" name="highSchoolSearch" placeholder="Enter High School"/>
                    <button className='searchButton'>Search</button>
                </div>
            </div>
            <div className='sectionContainer'>
                <table className='highSchoolsTable'>
                    <tr>
                        <th>Current High School</th>
                        <th>Acceptance Rate</th>
                        <th>AVG SAT Score</th>
                        <th>AVG ACT Score</th>
                        <th>AVG GPA</th>
                    </tr>
                    <tr>
                        <td>Bronx High School of Science</td>
                        <td>57%</td>
                        <td>2010</td>
                        <td>21</td>
                        <td>3.8</td>
                    </tr>
                </table>
            </div>
            <div className='sectionContainer'>
                <table className='highSchoolsTable'>
                    <tr>
                        <th>High School Results</th>
                        <th>Acceptance Rate</th>
                        <th>AVG SAT Score</th>
                        <th>AVG ACT Score</th>
                        <th>AVG GPA</th>
                    </tr>
                    <tr>
                        <td>Brooklyn Technical High School</td>
                        <td>58%</td>
                        <td>1990</td>
                        <td>20</td>
                        <td>3.9</td>
                    </tr>
                    <tr>
                        <td>Francis Lewis High School</td>
                        <td>56%</td>
                        <td>1980</td>
                        <td>20</td>
                        <td>3.6</td>
                    </tr>
                    <tr>
                        <td>Lehman High School</td>
                        <td>49%</td>
                        <td>1800</td>
                        <td>19</td>
                        <td>3.5</td>
                    </tr>
                    <tr>
                        <td>Great Neck High School</td>
                        <td>50%</td>
                        <td>1780</td>
                        <td>16</td>
                        <td>2.7</td>
                    </tr>
                    <tr>
                        <td>Cardozo High School</td>
                        <td>60%</td>
                        <td>1670</td>
                        <td>15</td>
                        <td>2.5</td>
                    </tr>
                    <tr>
                        <td>Stuyvesant High School</td>
                        <td>49%</td>
                        <td>1570</td>
                        <td>17</td>
                        <td>3.8</td>
                    </tr>
                    <tr>
                        <td>Mineola High School</td>
                        <td>87%</td>
                        <td>1580</td>
                        <td>16</td>
                        <td>2.8</td>
                    </tr>
                    <tr>
                        <td>Townsend Harris High School</td>
                        <td>67%</td>
                        <td>1970</td>
                        <td>19</td>
                        <td>3.9</td>
                    </tr>
                    <tr>
                        <td>Hunter High School</td>
                        <td>78%</td>
                        <td>1950</td>
                        <td>15</td>
                        <td>3.4</td>
                    </tr>
                    <tr>
                        <td>Bard High School</td>
                        <td>79%</td>
                        <td>1980</td>
                        <td>17</td>
                        <td>3.5</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default HighSchools;