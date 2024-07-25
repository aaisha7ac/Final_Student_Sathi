import './contact.css';
import React from 'react';

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f5a74937-19b6-49af-92d8-d9f60057a9b3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <>
            <div style={{ paddingTop: 30 }}>
                <section className="location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.2848876522407!2d76.86988067154819!3d30.877305982205126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff55d9e0ed113%3A0x34a6cadf9a13d341!2sCHITKARA%20UNIVERSITY%2C%20BADDI!5e0!3m2!1sen!2sin!4v1715705225397!5m2!1sen!2sin" width="600" height="450" style={{ border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                </section>

                <section className="contact-us">
                    <div className="row">
                        <div className="contact-col1">
                            <div>
                                <i className="fa fa-home"></i>
                                <span>
                                    <h5>Chitkara university, baddi</h5>
                                    <p>Atal Shiksha Kunj, Pinjore-Nalagarh National Highway</p>
                                </span>
                            </div>

                            <div>
                                <i className="fa fa-phone"></i>
                                <span>
                                    <h5>+91-8990867890</h5>
                                    <p>Sunday to Friday, 10 AM to 5 PM</p>
                                </span>
                            </div>

                            <div>
                                <i className="fa fa-envelope-o"></i>
                                <span>
                                    <h5>Sutdentsathi.info@gmail.com</h5>
                                    <p>Email us your query</p>
                                </span>
                            </div>
                        </div>
                        <div className='contact-col2'>
                            <form>
                            <input type="text" name='name' placeholder="Enter your name" required />
                                <input type="email" name='email' placeholder="Enter email address" required />
                                <input type="text" name='subject' placeholder="Enter your subject" required />
                                <textarea rows="5" name='message' placeholder="Message" required></textarea>
                                <center><button type="submit" className="form-submit1">Send Message</button></center>
                            </form>
                        </div>
                    </div> 
                </section>
            </div>
        </>

    )
}
export default Contact;