import React from 'react'
import '../CssFiles/resume.css'
import emailIcon from '../images/Vector (2).png'
import phoneIcon from '../images/Vector (1).png'
const Resume = ({name,lastName,email,phoneNumber,image,aboutinfo,dataStart, dataEnd,experienceInfo,University,position,employer,Quality,studyDate,studyInfo}) => {

  return (
    <div className='resume'>
    
        <div className='resume_info'>
        <div style={{display:'flex', gap:'10px'}}>
      
    <h1 className='resume_name'> {name}</h1>
    <h1 className='resume_lastname'>{lastName}</h1>
    </div>
    {email && (
      <>
        <img src={emailIcon} className='emailIcon'/>
        <h1 className='resume_email'>{email}</h1>
      </>
    )}
    {phoneNumber && (
     <>
      <img src={phoneIcon} className='phoneIcon' />
      <h1 className='resume_phone'>{phoneNumber}</h1>
     </>
    )}
    {image && (
    <img src={URL.createObjectURL(image)} className='resume_img'/>
    )}
    {aboutinfo && (
      <>
       <h1 className='resume_aboutme'>ჩემ შესახებ</h1>
       <p className='resume_aboutmeinfo'>{aboutinfo}</p>
       </>
    )}
    
    
     {position && (
      <>
       <h1 className='resume_experience'>გამოცდილება</h1>
       <h2 className='resume_experencename'>{position}, {employer}</h2> 
       </>
      )}

       <h3 className='resume_experienceyear'>{dataStart} - {dataEnd} </h3>
      
       <p className='resume_experienceabout'>{experienceInfo}</p>
       <div className='resume_life'></div>
       
      {University && (
        <>
       <h1 className='resume_education'>განათლება</h1>
      
       <h2 className='resume_univesity'>{University}</h2>
       <h2 className='resume_role'>{Quality}</h2>
       </>
        )}
       <h3 className='resume_Periodofstudy'>{studyDate} </h3>
       <p className='resume_iLearned'>{studyInfo}</p> 

        </div>
     
    </div>
  )
}

export default Resume