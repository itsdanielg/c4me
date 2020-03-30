import React from 'react';
import Modal from 'react-modal';
import './collegesearch.css';

Modal.setAppElement('#root');

function CollegeModal(props) {

    return(
        <div className='modalContainer'>
            <Modal 
                isOpen={props.isOpen}
                onRequestClose={props.openCollege}
                style={
                    { 
                        overlay: {
                            background: 'rgba(30, 30, 30, 0.6)',
                            width: '100%',
                            margin: '0em'
                        },
                        content: {
                            borderRadius: '2em',
                            marginLeft: '17.5%',
                            marginTop: '3%',
                            height: '80%',
                            width: '60%'
                        } 
                    }
                }
            >
                <div className='collegeModalContainer'>
                    <div className='collegeImage'></div>
                    <div className='collegeContent'>
                        <div className='collegeTextInfo'>
                            <div className='collegeInfo'>
                                <p>Short Description of college (i.e.The State University of New York at Stony Brook, commonly referred to as Stony Brook University, SBU, or SUNY Stony Brook, is a public sea-grant and space-grant research university in Stony Brook, New York. It is one of four university centers of the State University of New York system.)
                                </p>
                            </div>
                            <div className='collegeStats'>
                                <p>Admission Rate: <strong>42.2%</strong></p>
                                <p>Cost of Attendance: <strong>$10,175</strong></p>
                                <p>Location: <strong>Stony Brook, NY</strong></p>
                                <p>Ranking: <strong>#91</strong></p>
                                <p>Size: <strong>26,256</strong></p>
                                <p>AVG SAT Math: <strong>690</strong></p>
                                <p>AVG SAT EBRW: <strong>640</strong></p>
                                <p>AVG SAT Composite: <strong>28</strong></p>
                            </div>
                        </div>
                        <div className='collegeSimilar'>
                            <p>Students with similar profiles also applied to these colleges:</p>
                            <div className='resultBox' id='modalSimilar'>
                                <div >
                                    <h2>University at Buffalo</h2>
                                </div>
                            </div>
                            <div className='resultBox' id='modalSimilar'>
                                <div >
                                    <h2>Binghamton University</h2>
                                </div>
                            </div>
                            <div className='resultBox' id='modalSimilar'>
                                <div >
                                    <h2>Columbia University</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Modal>
        </div>
    )

}

export default CollegeModal;