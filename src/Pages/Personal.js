import React,{useState} from 'react'
import { BiError } from 'react-icons/bi';

import '../CssFiles/personal.css'
import { useForm } from "react-hook-form";
const Personal = ({name,lastname,aboutMe,email,phoneNumber,image,personalCheck,binary}) => {
  
  const handleImageChange = (event) => {
     image(event.target.files[0])
     const fr = new FileReader();

      fr.readAsDataURL(event.target.files[0]);
      fr.addEventListener('load',()=>{
        binary(fr.result)
  })
  };
  
 /*
const [aaaj,setAaaj]=useState()
console.log(aaaj)
  const handleUploadImage=(event)=>{
    image(event.target.files[0])
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      binary({
        image: URL.createObjectURL(file[0]),
        userImage: reader.result,
      });
    };
  }
  */

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
       // console.log(data);
      }; // your form submit function which will invoke after successful validation
     // console.log(watch("example")); // you can watch individual input by pass the name of the input
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='personal'>
    {/* register your input into the hook by invoking the "register" function */}
    <div className='input_namelastname'>
        <div >
   <label style={{position:'relative', width:'371px'}} className={errors.name ? "label-error": ''}> სახელი  
 
    <input  {...register("name",{ required: true, minLength:2, pattern:/[ა-ჰ]/ })} onChange={(e)=>name(e.target.value)}/>
    <h5  className='input_info'>მინიმუმ 2 ასო, ქართული ასოები  </h5>
    {errors.name && <BiError className='errormessage'/>}
 </label>
    
    </div>
    
    {/* include validation with required or other standard HTML validation rules */}
    <div>
   <label style={{position:'relative', width:'371px'}} className={errors.exampleRequired && "label-error"}>გვარი 
    <input {...register("exampleRequired", { required: true,minLength:2, pattern:/[ა-ჰ]/ })} onChange={(e)=>lastname(e.target.value)} />
    <h5  className='input_info'>მინიმუმ 2 ასო, ქართული ასოები</h5>
    {/* errors will return when field validation fails  */}
    {errors.exampleRequired && <BiError className='errormessage'/>}
    </label>
    </div>
    </div>
        <div className='upload_zone'> 
        <label>პირადი ფოტოს ატვირთვა</label>
      
        <label className="custom-file-upload">
          
          <input type="file"  style={{display:"none"}} className={errors.email && "input-error"}  {...register("image", { required: true, })}   onChange={handleImageChange}/>  {/* onChange={(event)=>image(event.target.files[0])} */}
          <div className='upload_img'><h3 className='uploadtxt'>ატვირთვა</h3>  </div>
         {errors.image && <p>This field is required</p>}
        </label>
        </div>

        <label className="custom-file-upload">ჩემ შესახებ (არასავალდებულო) </label>
          <input type="text"  className='Aboutme' onChange={(e)=>aboutMe(e.target.value)} />
         

          <label className={errors.email && "label-error"} style={{position:'relative'}}> ელ.ფოსტა
    <input type='email' className={errors.email && "input-error"}  {...register("email",{ required: true,   pattern: /^[a-z0-9](\.?[a-z0-9]){5,}@redberry\.ge$/i })} onChange={(e)=>email(e.target.value)}/>
    <h5  className='input_info'>უნდა მთავრდებოდეს @redberry.ge-ით</h5>
    {errors.email && <BiError className='errormessage'/>}
</label>
    {/* include validation with required or other standard HTML validation rules */}
   <label  className={errors.email && "label-error"} style={{position:'relative'}}>მობილურის ნომერი 
    <input {...register("mobilenumber", { required: true, pattern: /^(\+?995)?(79\d{7}|5\d{8})$/})} onChange={(e)=>phoneNumber(e.target.value)} />
    <h5  className='input_info'>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</h5>
    
    {/* errors will return when field validation fails  */}
    {errors.mobilenumber && <BiError className='errormessage'/>}
</label>

    <button type="submit" className='prevBtn' ><h5 className='buttontext' onClick={()=>personalCheck()}>შემდეგ</h5> </button>
  </form>

  )
}

export default Personal