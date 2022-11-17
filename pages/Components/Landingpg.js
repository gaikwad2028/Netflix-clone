import React from 'react'
import Image from 'next/image'
import { AiOutlineDownload } from "react-icons/ai";
import { Frenquentlycard } from './Frenquentlycard';
import { Footer } from './Footer';
import Link from 'next/link';



export const Landingpg = () => {
  return (
    <div className='landing-container'>
        <div className='intro-container'>
            <div className='signin-nav'><h1>NETFLIX</h1><div className='sign-btn'>
                <select className='select-1'>
                    <option>English</option>
                    <option>Hindi</option>
            </select>
            <button className='let-in'><Link href="/Components/form">Sign-in</Link></button>
            </div>
            </div>
            <Image src="/netflix.jpg" className='netfliximg-1' alt="netflix-bg" width={500} height={500}></Image>
            <div className='unlimited'>
                <p className='un'>Unlimited movies, TV <br></br> shows and more.</p>
                <p className='tag'>Watch anywhere. Cancel anytime.</p>
                <p className='synom'>Ready to watch? Enter your email to create or restart your membership.</p>
                <input type='text' placeholder='Email required '></input><button className='get started'>Get Started</button>
            </div>
        </div>
        <div className='slider-container'>
            <div className='page-1'>
                <div className='vc-description-1'>
                <p className='vc'>Enjoy on your TV.</p>
                <p className='vc-sub'>Watch on smart TVs, PlayStation, <br></br>Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='main-vc '>    
                <video width="400" height="400" controls >
      <source src="/paradise.mp4" type="video/mp4"/>
     </video>
     <Image src="/tv.png" alt="tv" className='tv' width={400} height={400}></Image>
     </div>
            </div>
            <div className='page-2'>
                <div className='vc-description'>
                <p className='vc'>Download your shows <br></br>to watch offline.</p>
                <p className='vc-sub'>Save your favourites easily and <br></br>always have something to watch.</p>
                </div>
                <div className='main-vc-1 '>  
                <div className='box-shot'>
                    <Image src="/boxshot.png" alt="box" width={57} height={80} className="box-img"></Image>
                    <span className='stranger'>Stranger Things<br></br><p className='color'>Downloading....</p></span>
                    <p className='icon'><AiOutlineDownload  className='download'/></p>
                </div>  
     <Image src="/mobile-0819.jpg" alt="mobile" className='mob' width={400} height={400}></Image>
     </div>
            </div>
            <div className='page-3'>
                <div className='vc-description'>
                <p className='vc'>Watch everywhere.</p>
                <p className='vc-sub'>Stream unlimited movies and <br></br>TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className='main-vc '>    
                <video width="400" height="400" controls >
      <source src="/paradise.mp4" type="video/mp4"/>
     </video>
     <Image src="/tv.png" alt="tv" className='tv' width={400} height={400}></Image>
     </div>
            </div>
            <div className='page-2'>
                <div className='vc-description'>
                <p className='vc'>Download your shows <br></br>to watch offline.</p>
                <p className='vc-sub'>Save your favourites easily and <br></br>always have something to watch.</p>
                </div>
                <div className='main-vc-1 '>  
              <Image src="/children.png" alt="mobile" className='mob' width={400} height={400}></Image>
     </div>
            </div>
        </div>
        <Frenquentlycard/>
        <div className='search'>
            <p className='na'>Ready to watch? Enter your email to create or restart your membership.</p>
            <input type='text'></input><button className='get started-1'>Get Started</button>
            </div>
            <Footer></Footer>
    </div>
  )
}
