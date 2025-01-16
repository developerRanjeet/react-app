import React from 'react';

function Footer() {
    return (
        <footer className="container-fluid mt-5">
            <div className="row p-5 text-center">
                <div className="col-md-6 col-sm-12">
                <p><span className="h6">Contact US - </span>+91 9999999999 <span className="text-secondary">|</span> xyz.raya@gmail.com</p>
                </div>
                <div className="col-md-6 col-sm-12">
                <p className="float-end">
                    <a href="#">Privacy Policy</a>
                    <span className="text-secondary">|</span>
                    <a href="#">Terms & Condition</a>
                </p>
                </div>
            </div>
            <p className="text-center pb-5">Copyright &copy; 2024 RAYA. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
