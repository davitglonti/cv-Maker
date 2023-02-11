import React from 'react'
import '../CssFiles/experience.css'
import { useForm } from "react-hook-form";
import { BiError } from 'react-icons/bi';
const Experience = ({position,employer,startDate,endDate,about}) => {
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
    
  return (
    <div>
         <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <div className='input_namelastname'>
        <div >
            <label style={{position:'relative'}} className={errors.name ? "label-error experiencePosition": ''}> თანამდებობა  
                <input type='text' {...register("position",{ required: true, minLength:2,  })} onChange={(e)=>position(e.target.value)}/>
                <h5  className='input_info'>მინიმუმ 2 სიმბოლო  </h5>
                {errors.position && <BiError className='errormessage'/>}
            </label>
        </div>
    </div>

    <label className={errors.email && "label-error"} style={{position:'relative'}}> დამსაქმებელი
        <input type='text' className={errors.text && "input-error"}  {...register("text",{ required: true,   pattern: /^[a-z0-9](\.?[a-z0-9]){5,}@redberry\.ge$/i })} onChange={(e)=>employer(e.target.value)}/>
        <h5  className='input_info'>უნდა მთავრდებოდეს @redberry.ge-ით</h5>
        {errors.text && <BiError className='errormessage'/>}
    </label>
    {/* include validation with required or other standard HTML validation rules */}
    <div className='input_namelastname'>
        <div >
   <label style={{position:'relative'}} className={errors.name ? "label-error": ''}> დაწყების დრო  
 
    <input type='date' {...register("name",{ required: true,  })} onChange={(e)=>startDate(e.target.value)}/>
  
    {errors.name && <BiError className='errormessage'/>}
 </label>
    
    </div>
    
    {/* include validation with required or other standard HTML validation rules */}
    <div>
   <label style={{position:'relative'}} className={errors.exampleRequired && "label-error"}>დამთავრების დრო
    <input  type='date'{...register("exampleRequired", { required: true,})}  onChange={(e)=>endDate(e.target.value)}/>
  
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <BiError className='errormessage'/>}
    </label>
    </div>
    </div>
    <label className="custom-file-upload">აღწერა </label>
          <input type="text"  className='Aboutme'  onChange={(e)=>about(e.target.value)}/>
         

         
    <button type="submit" className='submit' ><h5 className='btn_txt'>შემდეგ</h5> </button>
  </form>
    </div>
  )
}

export default Experience