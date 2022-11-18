import React from 'react'
import Image from 'next/image'

export default function form() {
  var Initialvalue={email:"",password:""}
  const [formValues,setFormvalues]=React.useState(Initialvalue)
  const [formErrors, setFormErrors]=React.useState({})
  const [isSubmit, setIsSubmit] = React.useState(false);
  // const [visibel,setVisibel]=React.useState(false)


  const Handelchange=(e)=>{
    // console.log(e.target.value)
    const{name,value}=e.target
    setFormvalues({...formValues,[name]:value}) 
  }
  // const handelsubmit1=(e)=>{
  //   if(formValues.email.length>3 &&formValues.password.length>3  ){
  //     setVisibel(!visibel)
  //   }
  //   else{
  //     setVisibel(false)
  //   }
  //   }
  
  console.log(formValues,"formvalues")

  const handelsubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  const validate=(value)=>{
    console.log(value.password.length,"values")
const errors={}
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// const regex ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";

if(!value.email){
  errors.email="not valid mail"
}
else if(!regex.test(value.email)){
  errors.email = "This is not a valid email format!";
}
 if(value.password.length<5){
     errors.password="the password length is too short"
}
// else if(!regex.test(value.password)){
//   errors.password = "please use special characters";
// }


return errors

  }
console.log(formErrors,"hgfdsdfghjkuytfdc",isSubmit)
  

  
  return (
    <div className='sign-page'>
      
   <Image src="/netflix.jpg" className='netfliximg-2' alt="netflix-bg" width={500} height={500}></Image>
   <form  onSubmit={handelsubmit}>
   <div className='form-page'>
    <div className='form-containe-1'>
      <h1> Sign in</h1>
       <input type="text" alt="email" className='email' name='email' value={formValues.email} onChange={Handelchange} ></input>
       <p className='kkk'>{formErrors.email}</p>
       <input type="text" alt="pass" className='email' name='password'  value={formValues.password} onChange={Handelchange} ></input>
       <p className='kkk'>{formErrors.password}</p>
       <button className='btn'>Sign-in</button>
       <p className='help'>
        <span><input type="checkbox" className='check'></input>Remeber me</span>
        <span>Need help?</span>
       </p>
    </div>
    <p className='form-footer'>
    New to Netflix? <a href="#" className='link'>Sign up now.</a><br></br><br></br>
    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
    </p>
    </div>
   </form>
    </div>
  )
}
