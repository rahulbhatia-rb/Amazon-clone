import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Banner"></img>
            </div>
            <div className="home_row">
                <Product id="1" title="The Lean startup" price={125.00} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating = {4}/>
                <Product id="2" title="SanDisk Cruzer Blade 32GB USB Flash Drive" price={399.00} image="https://images-na.ssl-images-amazon.com/images/I/61pHXsALAOL._SL1206_.jpg" rating = {4}/>
            </div>
            <div className="home_row">
            <Product id="3" title=" FIFA 21 Standard Edition (PS4)" price={3499.00} image="https://images-na.ssl-images-amazon.com/images/I/81-sClzQ2AL._SL1500_.jpg" rating = {5}/>
            <Product id="4" title="The Wolf of The WallStreet (Paper Back Edition)" price={399.00} image="https://images-na.ssl-images-amazon.com/images/I/518jpP2MEbL._SX323_BO1,204,203,200_.jpg" rating = {4}/>
            <Product id="5" title="FIFA Street 2" price={699.00} image="https://images-na.ssl-images-amazon.com/images/I/41IU46xL7wL.jpg" rating = {5}/>

            </div>

            <div className="home_row">
            <Product id="6" title="Samsung TV" price={40099.00} image="https://images-na.ssl-images-amazon.com/images/I/81644xBqdyL._SL1500_.jpg" rating = {5}/>

            </div>

        </div>
    )
}

export default Home
