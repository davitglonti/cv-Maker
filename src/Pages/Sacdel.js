import React,{useState} from 'react'
import axios from 'axios'
 async function Sacdel()  {
const [name,setName]=useState('aaaj')
        const  response = await axios.post('https://resume.redberryinternship.ge/api/cvs', 
        {
          "name": name,
          "surname": "ონიანი",
          "email": "davitoniani@redberry.ge",
          "phone_number": "+995598123456",
          "experiences": [
            {
              "position": "back-end developer",
              "employer": "Redberry",
              "start_date": "2019/09/09",
              "due_date": "2020/09/23",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum."
            }
          ],
          "educations": [
            {
              "institute": "თსუ",
              "degree": "სტუდენტი",
              "due_date": "2017/06/25",
              "description": "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ."
            }
          ],
          "image": "/storage/images/0rI7LyNRJRrokoSKUTb9EKvNuyYFKOvUmDQWoFt6.png",
          "about_me": "ეს არის აღწერა ჩემს შესახებ"
        
        },{headers:{
        
         'Access-Control-Allow-Origin' : '*',
         "content-type": "application/json" }}
          
         
            
        );
        
        console.log(response.headers);
      
   
      
  return (
    <div>Sacdel</div>
  )
}

export default Sacdel