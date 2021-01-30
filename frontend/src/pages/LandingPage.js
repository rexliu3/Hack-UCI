import React from "react";
import { navigate, Redirect } from "@reach/router"
import './LandingPage.css';
import { Button } from "shards-react";
import backgroundImg from '../images/covid-19-coronavirus-lab.jpg'

const LandingPage = () => {
    const NavBar = () => (
        <header className='navbar'>
            <div className='title item'>Vaccelerate</div>
            <div className='item'>About Us</div>
            <div className='item'>Contact</div>
            <div className='item'>Help</div>  
            <Button className='navButton'>Login</Button>      
        </header>
    )
    
return (
    <div>
        <container>
            <NavBar />
            <p>
                <h1 className='bigTitle'>Vaccelerate</h1>
                <h5 className='description'>Informing Data Driven Vaccine Distribution</h5>
                <Button href='/dashboard' className='dashboard'> To Dashboard</Button>
            </p>
            <img className='backgroundImg' src={backgroundImg} alt='covid-19 vaccine research'></img>
        </container>
    </div>
  )
}

export default LandingPage;