import React from 'react'
import homeImage from '../images/shutterstock_2189773743 1.jpg'
import homeHeadlogo from '../images/LOGO-02 3.jpg'
import { Link } from "react-router-dom";
import '../CssFiles/home.css'
const Home = () => {
  return (
    <div className='home'>
        <div className='home_logo'>
        </div>
        <div className='home_line'></div>
        <div className='bran_logo'></div>
        
        <button className='home_resumeAdd'>
        <Link to={'/HeadPage'} className='home_btn' style={{paddingLeft: 13, textDecoration: 'none'}}> რეზიუმეს დამატება</Link>
           </button>
    </div>
  )
}

export default Home