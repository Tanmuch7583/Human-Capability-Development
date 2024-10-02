import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Mandel-Training-Centre.jpeg';

const CourseRegistration = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalToggle = () => {
        setModalVisible(!modalVisible);
    };

    const handleOutsideClick = (event) => {
        if (event.target.className.includes('modal')) {
            setModalVisible(false);
        }
    };

    return (
        <div className="bg-image bg-image2">
            <div className="content">
                <img 
                    src={logo} 
                    alt="logo" 
                    height="155px" 
                    className="img-fluid back" 
                    style={{ borderRadius: '3px' }} 
                />
                <h1 className="header-align">Course Registration Form</h1>
                <button onClick={handleModalToggle} className="mx-auto my-4">
                    Register
                </button>

                {modalVisible && (
                    <div className="modal" onClick={handleOutsideClick}>
                        <span 
                            onClick={handleModalToggle} 
                            className="close" 
                            title="Close Modal"
                        >
                            &times;
                        </span>
                        <form className="modal-content" action="/action_page.php">
                            <div className="container">
                                <h1>Mandel Training Centre</h1>
                                <p>Please fill in this form to confirm registration</p>
                                <hr />
                                {/* Form fields go here */}
                                <div className="first-block">
                                    <label htmlFor="fname"><b>First Name</b></label><br />
                                    <input type="text" placeholder="Enter your First Name" id="fname" name="fname" required style={{ float: 'left' }} />
                                    
                                    <label htmlFor="lname"><b>Last Name</b></label><br />
                                    <input type="text" placeholder="Enter your Last Name" id="lname" name="lname" required style={{ float: 'right' }} />
                                </div>
                                <label htmlFor="employeeNO"><b>Employee Number</b></label><br />
                                <input type="number" placeholder="Enter your Employee Number" id="employeeNO" name="employeeNO" required />
                                
                                <label htmlFor="jtitle"><b>Job title</b></label><br />
                                <input type="text" placeholder="Enter your Job Title" id="jtitle" name="jtitle" required />
                                
                                <label htmlFor="isuperior"><b>Immediate Superior</b></label><br />
                                <input type="text" placeholder="Enter the name of your immediate superior here" id="isuperior" name="isuperior" required />
                                
                                <label htmlFor="company"><b>Enter your Parent company here</b></label><br />
                                <input type="text" placeholder="Enter your Parent company here (E.g Delta Head Office)" id="company" name="company" required />
                                
                                <label htmlFor="wplace"><b>Enter your working place here</b></label><br />
                                <input type="text" placeholder="Enter your working place here (E.g Mandel Training Centre)" id="wplace" name="wplace" required />

                                <label htmlFor="course">Select your designated Venue for Course here:</label><br />
                                <select id="course" name="course" className="styled-select">
                                    <option value="GDP- Graduate Development Programe">Mukuyu</option>
                                    {/* Add other options here */}
                                </select>

                                <label htmlFor="venue">Select your designated Course here:</label><br />
                                <select id="venue" name="venue" className="styled-select">
                                    <option value="EDP">EDP- Executive Development Programe</option>
                                    {/* Add other options here */}
                                </select>

                                <label htmlFor="duration">Duration of course <br /> Starting Date:</label>
                                <input type="date" id="start-date" name="start-date" />
                                
                                <label htmlFor="duration">Ending Date:</label>
                                <input type="date" id="end-date" name="end-date" />
                                
                                <div className="text-warning">
                                    Please be sure to have entered the correct registration details
                                </div>
                                
                                <div className="clearfix">
                                    <button type="button" onClick={handleModalToggle} className="cancelbtn">Cancel</button>
                                    <button type="submit" className="signupbtn">Submit</button>
                                </div>



                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseRegistration;




















