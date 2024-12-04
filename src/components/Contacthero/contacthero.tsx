import React from 'react'
import Contacthero from '@/components/Contacthero/contacthero.module.css'

const contacthero = () => {
  return (
   <>
   <div className={Contacthero.section}>
      {/* Wrapper for the content to keep it above the overlay */}
      <div className={Contacthero['content-wrapper']}>
        <div className={Contacthero.maindiv}>
          <h1>Contact Us</h1>
          <p>Aenean sed nibh a magna posuere tempornunc faucibus pellentesque nunc in aliquet. Donec 
          congue, nunc vel tempor congue.</p>
          
        
    </div>
    </div>
    </div>
   </>
  )
}

export default contacthero
