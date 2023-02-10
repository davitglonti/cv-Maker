import React, {useState} from 'react'
import '../CssFiles/headpage.css'
import { AiOutlineLeft } from 'react-icons/ai';
import Personal from './Personal';
import Resume from '../Pages/Resume'
const HeadPage = () => {
    const [name,setName]=useState('')
    const [lastname,setLastName]=useState('')
    const [aboutme,setAboutMe]=useState('')
    const [email,setEmail]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [image,setImage]=useState(null)
    
    console.log(image)
  return (
    <div className='headpage'>
        <div>
            <AiOutlineLeft className='lefticon' />
            <h3 className='headerInfo'>პირადი ინფო</h3>
            <h3 className='headerNumber'>1/3</h3>
            <div className='headline'></div>
            <div style={{position:'relative', left:'50%', top:'106px', width:'100%'}}>
                {/*  */}
            <Personal name={setName} lastname={setLastName} aboutMe={setAboutMe} email={setEmail} phoneNumber={setPhoneNumber} image={setImage}/>
          
</div>   

        </div>
        <div className='headRight'> 
            <Resume name={name} lastName={lastname} aboutinfo={aboutme} email={email} phoneNumber={phoneNumber} image={image}/>
        </div>
    </div>
  )
}

export default HeadPage