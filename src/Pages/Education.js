import React,{useEffect,useState} from 'react'
import '../CssFiles/education.css'
import { useForm } from "react-hook-form";
import { BiError } from 'react-icons/bi';
const Education = () => {
    const [degree ,setDegree]=useState([])
    const [select,setSelect]=useState()
   console.log(select)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      }; // your form submit function which will invoke after successful validation
      console.log(watch("example")); // you can watch individual input by pass the name of the input
    
      useEffect(() => {
        fetch(`https://resume.redberryinternship.ge/api/degrees`)
          .then((response) => response.json())
          .then((actualData) => setDegree(actualData));
      }, []);


  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)} className='personal'>
    {/* register your input into the hook by invoking the "register" function */}
    <div className='input_namelastname'>
        <div >
   <label style={{position:'relative', width:'371px'}} className={errors.name ? "label-error": ''}> სასწავლებელი  
 
    <input   {...register("name",{ required: true, minLength:2})} onChange={(e)=>setSelect(e.target.value)}/>
    <h5  className='input_info'>მინიმუმ 2 სიმბოლო  </h5>
    {errors.name && <BiError className='errormessage'/>}
 </label>
    
    </div>
    
    {/* include validation with required or other standard HTML validation rules */}
  
    </div>
        
    <div className='input_namelastname'>
        <div >
        <label for="standard-select" className='selecthead'>Standard Select</label>
        <select className="select" value={select} onChange={(e)=>setSelect(e.target.value)}>
        <option value="" selected disabled hidden>აირჩიე ხარისხი</option>
        {degree.map(item=>{
            return (
                 <option >{item.title}</option>
            )
        })}
   
  </select>
 
    
    </div>
    
    {/* include validation with required or other standard HTML validation rules */}
    <div>
   <label style={{position:'relative', width:'371px'}} className={errors.exampleRequired && "label-error"}>დამთავრების თარიღი 
    <input type='date' {...register("exampleRequired", { required: true,minLength:2, pattern:/[ა-ჰ]/ })} onChange={(e)=>console.log(e.target.value)} />
    <h5  className='input_info'>მინიმუმ 2 ასო, ქართული ასოები</h5>
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <BiError className='errormessage'/>}
    </label>
    </div>
    </div>

        <label className="custom-file-upload">აღწერა </label>
          <input type="text"  className='Aboutme' onChange={(e)=>console.log(e.target.value)} />
         

        

    <button type="submit"  ><h5 className='btn_txt'>შემდეგ</h5> </button>
  </form>
    </div>
  )
}

export default Education