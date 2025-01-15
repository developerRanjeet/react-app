import React from 'react';

function Header() {
    return (
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src="sa.png" style={{width: '30%'}} alt="logo" /></a>
                    <div id="navbarToggler" style={{textAlign: 'right'}}>
                        <a className="text-white" href="#"><i className="fa-solid fa-bars-staggered"></i></a>
                    </div>
                    <div id="navbarCross" style={{textAlign: 'right'}}>
                        <a className="text-white" href="#"><i className="fa-solid fa-xmark"></i></a>
                    </div>
                    <div id="navbarNav">
                        <ul className="navbar-nav" style={{ gap: '40px' }}>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;