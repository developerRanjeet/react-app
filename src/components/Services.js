import React from 'react';

function Services() {
    return (
        <div className="service" id="service">
            <h3 className="text-center mt-5">OUR SERVICES</h3>
            <div className="row mt-5 p-2">
                <div className="col-md-3 service-card mx-auto text-center border rounded shadow">
                    <img src="web.png" alt="web" className="mt-5" />
                    <h5>Web Development</h5>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat accusamus veniam, possimus maxime rem, sed recusandae veritatis perspiciatis maiores, suscipit quisquam quis voluptate numquam cupiditate fuga debitis est explicabo </p><br/>
                </div>
                <div className="col-md-3 service-card mx-auto text-center border rounded shadow">
                    <img src="android.png" alt="android" className="mt-5" />
                    <h5>Android/iOS Development</h5>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat accusamus veniam, possimus maxime rem, sed recusandae veritatis perspiciatis maiores, suscipit quisquam quis voluptate numquam cupiditate fuga debitis est explicabo </p><br/>
                </div>
                <div className="col-md-3 service-card mx-auto text-center border rounded shadow">
                    <img src="graphic.png" alt="graphic" className="mt-5" />
                    <h5>Graphics Design</h5>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat accusamus veniam, possimus maxime rem, sed recusandae veritatis perspiciatis maiores, suscipit quisquam quis voluptate numquam cupiditate fuga debitis est explicabo </p><br/>
                </div>
            </div>
        </div>
    )
}

export default Services;