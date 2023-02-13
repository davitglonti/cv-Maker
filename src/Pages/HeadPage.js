import React, {useState} from 'react'
import '../CssFiles/headpage.css'
import { AiOutlineLeft } from 'react-icons/ai';
import Personal from './Personal';
import Resume from '../Pages/Resume'
import Experience from '../Pages/Experience'
import Education from './Education';
const HeadPage = () => {
  const [pageNumber,setPageNumber]=useState(1)

    const [name,setName]=useState('')
    const [lastname,setLastName]=useState('')
    const [aboutme,setAboutMe]=useState('')
    const [email,setEmail]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [image,setImage]=useState(null)
    const [binaryImage,setBinaryImage]=useState()
    const [position,setPosition]=useState('')
    const [employer,setEmployer]=useState('')
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')
    const [aboutexperience,setAboutExperience]=useState('')
    const [University,setUniversity]=useState('')
    const [Quality,setQuality]=useState('')
    const [studyDate,setStudyDate]=useState('')
    const [studyInfo,setStudyInfo]=useState('')
    console.log(image)
   
  return (
    <div className='headpage'>
        <div>
            <AiOutlineLeft className='lefticon' />
            <h3 className='headerInfo'>პირადი ინფო</h3>
            <h3 className='headerNumber'>1/3</h3>
            <div className='headline'></div>
            <div style={{position:'absolute', right:'525px',top:'106px', width:'100%'}}>
                {/*  */}
                {pageNumber === 1?   
                <Personal name={setName} lastname={setLastName} aboutMe={setAboutMe} email={setEmail} phoneNumber={setPhoneNumber} image={setImage} pageNumber={pageNumber} setPageNumber={setPageNumber} binary={setBinaryImage}/>:null
                }
                {pageNumber===2 ? 
                <Experience position={setPosition} employer={setEmployer} startDate={setStartDate} endDate={setEndDate} about={setAboutExperience} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                :null
                }
                {pageNumber===3 ? 
                <Education University={setUniversity} Quality={setQuality} studyDate={setStudyDate} studyinfo={setStudyInfo}/>
                :null
                }

            {/*
            <button type="submit" className='prev_btn' ><h5 className='btn_txt'>უკან</h5> </button>
            <button type="submit" className='next_btn' ><h5 className='btn_txt'>შემდეგ</h5> </button>
              */}
</div>   

        </div>
        <div className='headRight'> 
            <Resume name={name} lastName={lastname} aboutinfo={aboutme} email={email} phoneNumber={phoneNumber} image={image} experienceInfo={aboutexperience} employer={employer} dataStart={startDate} dataEnd={endDate} about={aboutexperience} position={position} University={University} Quality={Quality} studyDate={studyDate} studyInfo={studyInfo}/>
        </div>
    </div>
  )
}

export default HeadPage