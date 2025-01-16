import React from 'react';

function Testimonial() {
    return (
        <div className="testimonial" id="testimonial">
            <h3 className="text-center mt-5">TESTIMONIAL</h3>
            <div className="row mt-5 p-2">
                <div className="col-md-3 testimonial-card mx-auto text-center border rounded shadow">
                    <img src="test-1.png" alt="profile" className="mt-5" />
                    <h5 className="">Raghav</h5>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat accusamus veniam, possimus maxime rem, sed recusandae veritatis perspiciatis maiores, suscipit quisquam quis voluptate numquam cupiditate fuga debitis est explicabo </p><br/>
                </div>
                <div className="col-md-3 testimonial-card mx-auto text-center border rounded shadow">
                    <img src="test-2.png" alt="profile" className="mt-5" />
                    <h5>Dev</h5>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat accusamus veniam, possimus maxime rem, sed recusandae veritatis perspiciatis maiores, suscipit quisquam quis voluptate numquam cupiditate fuga debitis est explicabo </p><br/>
                </div>
                <div className="col-md-3 testimonial-card mx-auto text-center border rounded shadow">
                    <img src="test-3.png" alt="profile" className="mt-5" />
                    <h5>Jay Yadav</h5>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat accusamus veniam, possimus maxime rem, sed recusandae veritatis perspiciatis maiores, suscipit quisquam quis voluptate numquam cupiditate fuga debitis est explicabo </p><br/>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;