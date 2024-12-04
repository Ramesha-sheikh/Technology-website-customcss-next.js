import React from 'react'
import Abouthero from '@/components/Abouthero/abouthero.module.css'

const Abouth = () => {
  return (
   <>
   <div className={Abouthero.section}>
      {/* Wrapper for the content to keep it above the overlay */}
      <div className={Abouthero['content-wrapper']}>
        <div className={Abouthero.maindiv}>
          <h1>Our Incredible Crew</h1>
          <p>Aenean sed nibh a magna posuere tempornunc faucibus pellentesque nunc in aliquet. Donec 
          congue, nunc vel tempor congue.</p>
          
        
    </div>
    </div>
    </div>
   </>
  )
}

export default Abouth 
