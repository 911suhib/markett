import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Ofeers On Your Email</h1>
        <p>Subscrive to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscibe</button>
        </div>
    </div>
  )
}

export default NewsLetter