import React, {useState} from 'react'
import '../CssFiles/headpage.css'
import { AiOutlineLeft } from 'react-icons/ai';
import Personal from './Personal';
import Resume from '../Pages/Resume'
import Experience from '../Pages/Experience'
const HeadPage = () => {
  const [pageNumber,setPageNumber]=useState(2)

    const [name,setName]=useState('')
    const [lastname,setLastName]=useState('')
    const [aboutme,setAboutMe]=useState('')
    const [email,setEmail]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [image,setImage]=useState(null)
    const [position,setPosition]=useState('')
    const [employer,setEmployer]=useState('')
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')
    const [aboutexperience,setAboutExperience]=useState('')
  //employer,startDate,endDate,about
    console.log(aboutexperience)
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
                <Personal name={setName} lastname={setLastName} aboutMe={setAboutMe} email={setEmail} phoneNumber={setPhoneNumber} image={setImage} pageNumber={pageNumber} setPageNumber={setPageNumber}/>:null
                }
                {pageNumber===2 ? 
                <Experience position={setPosition} employer={setEmployer} startDate={setStartDate} endDate={setEndDate} about={setAboutExperience}/>
                :null
                }
            
            <button type="submit" className='prev_btn' ><h5 className='btn_txt'>უკან</h5> </button>
            <button type="submit" className='next_btn' ><h5 className='btn_txt'>შემდეგ</h5> </button>
</div>   

        </div>
        <div className='headRight'> 
            <Resume name={name} lastName={lastname} aboutinfo={aboutme} email={email} phoneNumber={phoneNumber} image={image} experienceInfo={aboutexperience} employer={employer} dataStart={startDate} dataEnd={endDate} about={aboutexperience} position={position}/>
        </div>
    </div>
  )
}

export default HeadPage