import React from 'react'
import "./login.css"
import AppleIcon from '@mui/icons-material/Apple';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const login = () => {
  return (
    <>
      <div className="main">
        <img className='renee' src="https://www.reneecosmetics.in/cdn/shop/files/renee-logo-white.svg?v=1704885102&width=186" alt="" />
        <img className='img' src="https://www.reneecosmetics.in/cdn/shop/files/Rectangle_9239.png?v=1702986305&width=1920" alt="" />
        <div className="card">
          <h3>Log in</h3>
          <form action="">
            <label for="Phonenumber">Phone Number</label><br />

            <input type="Number" placeholder='123-456-7890' /><br />

            <button className='btn'> <span>Send OTP   </span></button>
          </form>
          <div className='span'>
            <span>Or Continue With</span>
          </div>
          <div className="icon">
            <div className='apple'>
              <AppleIcon className='a' />
              <p>Log in using Email</p>

            </div>
            <div className='whatsapp'>
              <WhatsAppIcon className='w' />
              <p>Log in using Whatsapp</p>

            </div>

          </div>



        </div>
        <div>
          <label class="contener">
            <input type="checkbox" />
            By continuing, you agree that you have
            <br /> read and accept our T & C
            <span class="checkmark"></span>
          </label>
        </div>
        <div className='guest'>
         <a href="">
          <p>Continues as a guest</p>

         </a>

         
        </div>
        <div className='need'>

          <a href="">

          <p>need help?</p>
          </a>

        </div>

      </div>

    </>
  )
}

export default login