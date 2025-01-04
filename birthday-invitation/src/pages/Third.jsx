import React, { useState, useRef } from 'react';
import "../Styles/Third.css";
import profile from '../assets/IMAGE.jpg';

function Third() {
    const [showForm, setShowForm] = useState(false); // State to control form visibility
    const [yesForm, setYesForm] = useState(true);
    const [noForm, setNoForm] = useState(false);

    // Separate state for Yes form data
    const [yesFormData, setYesFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        message: ''
    });

    // Separate state for No form data
    const [noFormData, setNoFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        message: ""
    });

    // State for the thank you popup
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const [showAwwpopup, setshowAwwpopup] = useState(false)

    const formRef = useRef(null); // Reference to the form section
    const yesform = useRef(null);
    const noformRef = useRef(null);

    const handleRespondClick = () => {
        setShowForm(true); // Show the form when "Please Respond" is clicked
        setTimeout(() => {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };

    const handleYesForm = () => {
        setYesForm(true);
        setNoForm(false);
        setTimeout(() => {
            yesform.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };

    const handleNoForm = () => {
        setYesForm(false);
        setNoForm(true);
        setTimeout(() => {
            noformRef.current.scrollIntoView({ behavior: "smooth" });
        }, 0);
    };

    // Handle changes in Yes form fields
    const handleYesFormChange = (e) => {
        const { name, value } = e.target;
        setYesFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle changes in No form fields
    const handleNoFormChange = (e) => {
        const { name, value } = e.target;
        setNoFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle "Yes" form submission
    const handleYesSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://birthday-invitation-website-2.onrender.com/api/invitations/yes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(yesFormData), // Send "Yes" response data
            });

            console.log('Response status:', response.status);
            console.log('Response text:', await response.text()); // Log raw response text

            if (response.ok) {
                // Show thank you popup
                setShowThankYouPopup(true);
                setYesFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    number: '',
                    message: ''
                });
            } else {
                const errorData = await response.json();
                const errorMessage = errorData?.message || 'Something went wrong, please try again';
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Error submitting the form', error);
            alert('Error submitting the form');
        }
    };

    // Handle "No" form submission
    const handleNoSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://birthday-invitation-website-2.onrender.com/api/invitations/no', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(noFormData), // Send "No" response data
            });

            if (response.ok) {
                setshowAwwpopup(true)
                setNoFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    number: '',
                    message: '' // Reset fields after successful submission
                });
            } else {
                const errorData = await response.json();
                const errorMessage = errorData?.message || 'Something went wrong, please try again';
                alert(`Something went wrong: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error submitting the form', error);
            alert('Error submitting the form');
        }
    };

    // Handle closing the thank you popup
    const closePopup = () => {
        setShowThankYouPopup(false);
        setshowAwwpopup(false)
        setShowForm(false)

    };

    const handleMapClick = () => {
        // Open Google Maps with the address
        const address = "M95, sector 66, Noida";
        const mapUrl = 'https://www.google.com/maps/@28.6035306,77.378813,18.62z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D';
        window.open(mapUrl, '_blank'); // Open in a new tab
    };

    return (
        <>
            <div className='Third-main'>
                <div className='RsvpCard'>
                    <div className='imgWrapper'>
                        <img src={profile} alt="" />
                    </div>
                    <div className='location'>
                        <h1>Let me know you're coming</h1>
                        <p>06.01.2025 | 7:00PM (GMT+04:00)</p>
                        <p onClick={handleMapClick} className='address_clickable'>
                            || M95, sector 66, Noida ||
                        </p>
                        <button onClick={handleRespondClick} className='respond'>Please Respond</button>
                    </div>
                </div>
            </div>
            {showForm && (
                <div ref={formRef} className='formcard'>
                    <div className='formwrapper' id='formcard'>
                        <div className='form-elemnt'>
                            <h2>Will you be attending?</h2>
                            <div className='first'>
                                <input type="radio" id="Yes" name="attendance" onClick={handleYesForm} defaultChecked />
                                <label htmlFor="Yes">Yes</label>
                                <input type="radio" id="No" name="attendance" onClick={handleNoForm} />
                                <label htmlFor="No">No</label>
                            </div>

                            {yesForm && (
                                <form onSubmit={handleYesSubmit}>
                                    <div ref={yesform} className='formcontent'>
                                        <div className='firstSection'>
                                            <div className='firstname'>
                                                <label htmlFor="First">First Name</label>
                                                <input
                                                    type="text"
                                                    id="First"
                                                    name="firstname"
                                                    value={yesFormData.firstname}
                                                    onChange={handleYesFormChange}
                                                    required
                                                />
                                            </div>
                                            <div className='secondname'>
                                                <label htmlFor="Second">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="Second"
                                                    name="lastname"
                                                    value={yesFormData.lastname}
                                                    onChange={handleYesFormChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='secondSection'>
                                            <div className='thirdname'>
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={yesFormData.email}
                                                    onChange={handleYesFormChange}
                                                    required
                                                />
                                            </div>
                                            <div className='fourthname'>
                                                <label htmlFor="number">Number</label>
                                                <input
                                                    type="number"
                                                    id="number"
                                                    name="number"
                                                    value={yesFormData.number}
                                                    onChange={handleYesFormChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='fifth'>
                                            <label htmlFor="comment">Question or Comment</label>
                                            <textarea
                                                id='comment'
                                                name="message"
                                                value={yesFormData.message}
                                                onChange={handleYesFormChange}
                                            />
                                        </div>
                                        <button type='submit' className='submit'>Submit</button>
                                    </div>
                                </form>
                            )}

                            {noForm && (
                                <form onSubmit={handleNoSubmit}>
                                    <div ref={noformRef} className='formcontent-no'>
                                        <div className='firstSection'>
                                            <div className='firstname'>
                                                <label htmlFor="First">First Name</label>
                                                <input
                                                    type="text"
                                                    id="First"
                                                    name="firstname"
                                                    value={noFormData.firstname}
                                                    onChange={handleNoFormChange}
                                                    required
                                                />
                                            </div>
                                            <div className='secondname'>
                                                <label htmlFor="Second">Last Name</label>
                                                <input
                                                    type="text"
                                                    id="Second"
                                                    name="lastname"
                                                    value={noFormData.lastname}
                                                    onChange={handleNoFormChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='secondSection'>
                                            <div className='thirdname'>
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={noFormData.email}
                                                    onChange={handleNoFormChange}
                                                    required
                                                />
                                            </div>
                                            <div className='fourthname'>
                                                <label htmlFor="number">Number</label>
                                                <input
                                                    type="number"
                                                    id="number"
                                                    name="number"
                                                    value={noFormData.number}
                                                    onChange={handleNoFormChange}
                                                    required
                                                />
                                            </div>
                                            <div className='fifth'>
                                                <label htmlFor="Reason">Please write a reason</label>
                                                <textarea
                                                    id='Reason'
                                                    name="message"
                                                    value={noFormData.message}
                                                    onChange={handleNoFormChange}
                                                />
                                            </div>
                                        </div>
                                        <button className='submit' type='submit'>Submit</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {showThankYouPopup && (
                <div className="thank-you-popup">
                    <div className="popup-content ">
                        <h3>😊Thank you 😊</h3>
                        <p>"Thank you for coming to my birthday! I'll be waiting for you." 😊</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
            {showAwwpopup && (
                <div className="thank-you-popup">
                    <div className="popup-content ">
                        <h3>😟😟😟</h3>
                        <p>"No problem if you can't come, we'll meet soon." 😊</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Third;
