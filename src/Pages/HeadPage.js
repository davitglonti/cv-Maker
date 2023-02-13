import React, {useState,useEffect} from 'react'
import axios from 'axios'
import '../CssFiles/headpage.css'
import { AiOutlineLeft,AiOutlineClose } from 'react-icons/ai';
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
    const [binaryImage,setBinaryImage]=useState('')
    const [position,setPosition]=useState('')
    const [employer,setEmployer]=useState('')
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')
    const [aboutexperience,setAboutExperience]=useState('')
    const [University,setUniversity]=useState('')
    const [Quality,setQuality]=useState('')
    const [studyDate,setStudyDate]=useState('')
    const [studyInfo,setStudyInfo]=useState('')
    const [finalResume,setFinalResume]=useState(false)
const [gasag,setGasag]=useState()
//console.log(gasag)

    useEffect(() => {
      fetch(binaryImage)
       .then((res) => res.blob()).then((blob)=>{
        console.log(blob);
       const filess=  new File([blob], 'image', {type: blob.type})
      console.log(filess)
      } );
     }, []);
    
   // console.log(binaryImage)
   
    const [experienceArray,setExperienceArray]=useState([
      {
       position:position,
       employer: employer,
       start_date:startDate,
       due_date:endDate,
       description:aboutexperience
      }
     ])

     const [educationArray,setEducationArray]=useState([
      {

      }
     ])
    //console.log(educationArray)

    const AddForm = () => {
      if(position==='' || employer==='' || startDate==='' || endDate ==='' || aboutexperience==='' ){
        console.log('error')
      }else {
      setExperienceArray([...experienceArray,  {
        position:position,
        employer: employer,
        start_date:startDate,
        due_date:endDate,
        description:aboutexperience
       }]);
      }
    };
    console.log(experienceArray)

    const AddFormEdu = () => {
        if(University==='' || Quality==='' || studyDate==='' || studyInfo===''){
          console.log('error')
        }else {
          setEducationArray([...educationArray, 
            {
              institute: University,
              degree: Quality,
              due_date: studyDate,
              description:studyInfo
            }
        ])
        }
    }
console.log(educationArray)


    const prevBtn= () => {
      if(pageNumber>=1){
         setPageNumber(pageNumber-1)
      }
     
    }


    const nextPage = ()=> {
      if(position==='' || employer==='' || startDate===''|| endDate==='' ){
         console.log('შეავსე')
      }else {
        setPageNumber(3)
      }
      
    }

    const personalCheck =()=>{
      if(name==='' || lastname==='' ||  email==='' || phoneNumber==='' || image===''){
        console.log('შეავსე')
     }else {
       setPageNumber(2)
     }
    }

async function EndPage()  {
  if(University==='' || Quality==='' || studyDate==='' || studyInfo===''){
    console.log('error')
  }else {
    setFinalResume(true)
    const  response = await axios.post('https://resume.redberryinternship.ge/api/cvs', 
    {
      "name": name,
      "surname": lastname,
      "email": email,
      "phone_number": phoneNumber,
      "experiences": experienceArray,
      "educations": educationArray,
      "image": binaryImage,
      "about_me": aboutme
    
    },{headers:{
     'Access-Control-Allow-Origin' : '*',
     "content-type": "application/json" }}
        
    );
    
    console.log(response.headers);  

  }
  
  }
  
     const pageHeaderName = [ "პირადი ინფო",'გამოცდილება', 'განათლება']
  return (
  <div className='headpage'>
          {finalResume ? 
          <div className='finalresume'>
           <Resume name={name} lastName={lastname} aboutinfo={aboutme} email={email} phoneNumber={phoneNumber} image={image} experienceInfo={aboutexperience} employer={employer} dataStart={startDate} dataEnd={endDate} about={aboutexperience} position={position} University={University} Quality={Quality} studyDate={studyDate} studyInfo={studyInfo}/>
          <div className='finalresumecheck'><h3 className='resumesucces'>რეზიუმე წარმატებით გაიგზავნა  🎉</h3> <AiOutlineClose className='checkexit' /></div>
          </div>
          :
          <>
          <div>
            <AiOutlineLeft className='lefticon' onClick={prevBtn}/>
            <h3 className='headerInfo'>{pageHeaderName[pageNumber-1]}</h3>
            <h3 className='headerNumber'>{pageNumber}/3</h3>
            <div className='headline'></div>
            <div style={{position:'absolute', right:'525px',top:'106px', width:'100%'}}>
                {/*  */}
                {pageNumber === 1? 
                <Personal name={setName} lastname={setLastName} aboutMe={setAboutMe} email={setEmail} phoneNumber={setPhoneNumber} image={setImage} personalCheck={personalCheck} binary={setBinaryImage}/>
                :null
                }
                {pageNumber===2 ? 
                  <>
                  
                  {experienceArray.map(item=>{
                    return (
                      <Experience position={setPosition} employer={setEmployer} startDate={setStartDate} endDate={setEndDate} about={setAboutExperience} pageNumber={pageNumber} setPageNumber={setPageNumber} nextPage={nextPage}/>
                    )
                  })}
                    <button onClick={()=>AddForm()} className='AddexpForm'>მეტი გამოცდილების დამატება</button>
                    <button className='prevBtns' onClick={prevBtn}> <h5 className='buttontext'>წინა</h5></button>
                   
                  </>
                      :null
                }
                {pageNumber===3 ? 
                <>
                {educationArray.map(item=>{
                  return (
                    <Education University={setUniversity} Quality={setQuality} studyDate={setStudyDate} studyinfo={setStudyInfo} EndPage={EndPage}/>
                  )
                })}
                
                    <button onClick={()=>AddFormEdu()} className='AddexpForm'>მეტი გამოცდილების დამატება</button>
                    <button className='prevBtns' onClick={prevBtn}> <h5 className='buttontext'>წინა</h5></button>
                </>
                :null
                }

 
            <button type="submit" className='prevbtn' ><h5 className='btn_txt'>უკან</h5> </button>
           
             
        </div>   

        </div>
        <div className='headRight'> 
            <Resume name={name} lastName={lastname} aboutinfo={aboutme} email={email} phoneNumber={phoneNumber} image={image} experienceInfo={aboutexperience} employer={employer} dataStart={startDate} dataEnd={endDate} about={aboutexperience} position={position} University={University} Quality={Quality} studyDate={studyDate} studyInfo={studyInfo}/>
        </div>
          </>
        }
        
  </div>
  )
}

export default HeadPage