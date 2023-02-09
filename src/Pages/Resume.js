import React from 'react'
import '../CssFiles/resume.css'
import emailIcon from '../images/Vector (2).png'
import phoneIcon from '../images/Vector (1).png'
const Resume = () => {
  return (
    <div className='resume'>
      
        <div className='resume_info'>
        <div style={{display:'flex', gap:'10px'}}>
    <h1 className='resume_name'> ანზორ</h1>
    <h1 className='resume_lastname'>მუმლაძე</h1>
    </div>
    <img src={emailIcon} className='emailIcon'/>
    <h1 className='resume_email'>anzorr77@gmail.com</h1>

    <img src={phoneIcon} className='phoneIcon' />
    <h1 className='resume_phone'>+995 953694580</h1>
    <img src='https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='resume_img'/>
       
       <h1 className='resume_aboutme'>ჩემ შესახებ</h1>
       <p className='resume_aboutmeinfo'>ძალიან მიყვარს დიზაინის კეთება.დილით ადრე რომ ავდგები გამახნეველი ვარჯიშის მაგიერ</p>
       
       
       <h1 className='resume_experience'>გამოცდილება</h1>
       <h1>React Native Developer</h1>
       <p className='resume_aboutmeinfo'>ძალიან მიყვარს დიზაინის კეთება.დილით ადრე რომ ავდგები გამახნეველი ვარჯიშის მაგიერ</p>
        </div>
     
    </div>
  )
}

export default Resume