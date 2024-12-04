import React from 'react'
import Hero from '@/components/Herosection/hero'
import Page from '@/app/Home/Herosection1/page';
import Hero2 from '@/app/Home/Herosection2/page'
import Sectionthree from '@/app/Home/Payment/page'
import Downloadapp from '@/components/Downloadapp/downloadapp'


const Homesec = () => {
  return (
    <div>
      <Hero/>
       <Page/>
       <Hero2/>
       <Sectionthree/>
       <Downloadapp />
    </div>
  )
}

export default Homesec
