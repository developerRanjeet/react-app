import React from 'react';

function Home() {
    return (
        <div className="home container" id="Home">
            <div className="row">
                <div className="col-md-6 home-text">
                    <p className="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat accusamus veniam, possimus maxime rem, sed recusandae veritatis perspiciatis maiores, suscipit quisquam quis voluptate numquam cupiditate fuga debitis est explicabo </p>
                </div>
                <div className="col-md-6 text-center">
                    <img src="home.png" alt="home" className="home-img" />
                </div>
            </div>
        </div>
    );
}

export default Home;