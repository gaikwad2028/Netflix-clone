import React from 'react'
import Image from 'next/image'

export default function form() {
  return (
    <div className='sign-page'>
      
   <Image src="/netflix.jpg" className='netfliximg-2' alt="netflix-bg" width={500} height={500}></Image>
   <form>
   <div className='form-page'>
    <div className='form-containe-1'>
      <h1> Sign in</h1>
       <input type="text" alt="email" className='email'></input>
       <input type="text" alt="pass" className='email'></input>
       <button className='btn'>Sign-in</button>
       <p className='help'>
        <span><input type="checkbox"></input>Remeber me</span>
        <span>need help?</span>
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
