import React from 'react';

function Contact() {
    return (
        <section>
            <div className="contact" id="contact">
                <div className="row mt-5 border rounded shadow p-2">
                    <form method="post" action="#" className="mt-3">
                        <h2 className="text-center">CONTACT US</h2>
                        <div className="d-flex mt-5 justify-content-center">
                            <div className="col-md-6 col-sm-12">
                                <div className="mb-3">
                                    <input type="text" id="name" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" id="email" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" id="subject" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="mb-3">
                                    <textarea name="message" id="message" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="form-control btn btn-dark">Submit</button>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </form>
                </div>
            </div>
            { /* Social Media */}
            <div className="social-media-icons text-center">
                <a href="#" className="social-icon" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.youtube.com/@developerRanjeet" className="social-icon" target="_blank">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
            {/* Social Media - End */}
        </section>
    )
}

export default Contact;