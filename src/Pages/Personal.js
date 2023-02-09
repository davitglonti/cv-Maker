import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import '../CssFiles/personal.css'
import { useForm } from "react-hook-form";
const Personal = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <div className='input_namelastname'>
        <div >
   <label> სახელი</label>
    <input  {...register("name",{ required: true })} />
    <h5  className='input_info'>მინიმუმ 2 ასო, ქართული ასოები</h5>
    {errors.name && <p>This aaaj is required</p>} 
    
    </div>
    
    {/* include validation with required or other standard HTML validation rules */}
    <div>
   <label >გვარი </label>
    <input {...register("exampleRequired", { required: true, maxLength: 10, })}  />
    <h5  className='input_info'>მინიმუმ 2 ასო, ქართული ასოები</h5>
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <p>This field is required</p>}
    </div>
    </div>
        <div className='upload_zone'> 
        <label>პირადი ფოტოს ატვირთვა</label>
      
        <label className="custom-file-upload">
          <input type="file"  style={{display:"none"}}/>
          <div className='upload_img'><h3 className='uploadtxt'>ატვირთვა</h3>  </div>
        </label>
        </div>

        <label className="custom-file-upload">ჩემ შესახებ (არასავალდებულო) </label>
          <input type="text"  className='Aboutme'/>
         

          <label> ელ.ფოსტა</label>
    <input type='email'  {...register("example",{ required: true,   pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
    <h5  className='input_info'>უნდა მთავრდებოდეს @redberry.ge-ით</h5>
    {errors.example && <p>This aaaj is required</p>} 

    {/* include validation with required or other standard HTML validation rules */}
   <label>მობილურის ნომერი </label>
    <input {...register("exampleRequir", { required: true,})} />
    <h5  className='input_info'>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</h5>
    
    {/* errors will return when field validation fails  */}
    {errors.exampleRequir && <p>This field is required</p>}


    <input type="submit" style={{backgroundColor:'rgba(107, 64, 227, 1)'}}/>
  </form>
/*
    <div className='personal'>
       <AiOutlineLeft className='personal_left'/>

       <div className='personal_form'>
        <form action="/action_page">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
    </div>
  */

  )
}

export default Personal