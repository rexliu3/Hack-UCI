import React from "react";
import './LandingPage.css';
import { Button } from "shards-react";
import backgroundImg from '../images/covid-19-coronavirus-lab.jpg'
import logo from '../images/logo.jpg'

const LandingPage = () => {
    const NavBar = () => (
        <header className='navbar'>
            <div className='title logo'>
                <img style={{top:"1px", width:"10em", height:"2em", padding:"1px 1px"}} src={logo}></img>
            </div>
            {/* <div className='title item'>Vaccelerator</div> */}
            <div className='item'>
                <a style={{textDecoration:'none'}} href="/faq">Contact</a>
            </div>
            <div className='item'>
                <a style={{textDecoration:'none'}} href="/faq">Help</a>
            </div>  
            <div className='item'>
                <a style={{textDecoration:'none'}} href="/education">Resources</a>
            </div>
            <Button className='navButton' href="/user-profile-lite">Login</Button>      
        </header>
    )
    
return (
    <div>
        <container>
            <NavBar />
            <container>
                <h1 className='bigTitle'>Vaccelerator</h1>
                <h5 className='description'>Informed Data Driven Vaccine Distribution</h5>
                <Button href='/dashboard' size='lg' className='dashboard'>Go To Dashboard</Button>
            </container>
            <img className='backgroundImg' src={backgroundImg} alt='covid-19 vaccine research'></img>
        </container>
    </div>
  )
}

export default LandingPage;
