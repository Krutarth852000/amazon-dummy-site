import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_img"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="azonprime" />     
                <div className="home_row">
                    <Product
                        title="the lean startup"
                        price={901}
                        img="https://slooowdown.files.wordpress.com/2014/04/lean_startup.jpg"
                        rating={5}/>
                    <Product
                        title="the lean startup"
                        price={901}
                        img="https://slooowdown.files.wordpress.com/2014/04/lean_startup.jpg"
                        rating={5}/>
                    
                </div>
                <div className="home_row">
                    <Product
                        title="the lean startup"
                        price={901}
                        img="https://slooowdown.files.wordpress.com/2014/04/lean_startup.jpg"
                        rating={5} />
                    <Product
                        title="the lean startup"
                        price={901}
                        img="https://slooowdown.files.wordpress.com/2014/04/lean_startup.jpg"
                        rating={5} />
                    <Product
                        title="the lean startup"
                        price={901}
                        img="https://slooowdown.files.wordpress.com/2014/04/lean_startup.jpg"
                        rating={5}/>
                </div>
                <div className="home_row">
                    <Product
                        title="the lean startup"
                        price={901}
                        img="https://slooowdown.files.wordpress.com/2014/04/lean_startup.jpg"
                        rating={5}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home
