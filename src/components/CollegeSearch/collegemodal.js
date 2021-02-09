import React from 'react';
import Modal from 'react-modal';
import '../../css/collegesearch.css';

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
                            height: '0%',
                            width: '0%'
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
                            <p>Students with similar profiles who applied to this college:</p>
                            <div className='resultBox' id='modalSimilar'>
                                <div className="resultName">
                                    <h2>Alexander Lee</h2>
                                </div>
                                <div className="resultInfo">
                                    <p>Status: <strong>Accepted</strong></p>
                                    <p>AVG Sat Math: <strong>790</strong></p>
                                    <p>AVG SAT EBRW: <strong>700</strong></p>
                                </div>
                            </div>
                            <div className='resultBox' id='modalSimilar'>
                            <div className="resultName">
                                    <h2>John Smith</h2>
                                </div>
                                <div className="resultInfo">
                                    <p>Status: <strong>Accepted</strong></p>
                                    <p>AVG Sat Math: <strong>780</strong></p>
                                    <p>AVG SAT EBRW: <strong>720</strong></p>
                                </div>
                            </div>
                            <div className='resultBox' id='modalSimilar'>
                            <div className="resultName">
                                    <h2>Ryan Taylor</h2>
                                </div>
                                <div className="resultInfo">
                                    <p>Status: <strong>Denied</strong></p>
                                    <p>AVG Sat Math: <strong>620</strong></p>
                                    <p>AVG SAT EBRW: <strong>560</strong></p>
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