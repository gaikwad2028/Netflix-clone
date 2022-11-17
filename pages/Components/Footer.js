import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
        <footer className='sub-footer'>
        <p className='number'>Questions? Call 000-800-040-1843</p>
        <div className='faq'>
          <ul className='footer-list1'>
            <li>Faq</li>
            <li>Inventer Releationship</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul className='footer-list1'>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
          <ul className='footer-list1'>
            <li>Account</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
          <ul className='footer-list1'>
            <li>Media Centre</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer-row-3'>
            <select className='select-2'>
                <option>English</option>
                <option>English</option>
            </select>
        </div>
        </footer>
    </div>
  )
}
