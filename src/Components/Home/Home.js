import React from 'react'
import HeroSection from './Hero-Section/HeroSection'
import OurFeature from './Our-Feature/OurFeature'
import Services from './Services/HomeServices'
import Testimonial from './Testimonial/Testimonial'

function Home() {

    
  return (
    <div className="">
        <HeroSection></HeroSection>
        <OurFeature></OurFeature>
        <Services></Services>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home