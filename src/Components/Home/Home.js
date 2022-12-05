import React from 'react'
import useTitle from '../../Hooks/useHooks'
import HeroSection from './Hero-Section/HeroSection'
import OurFeature from './Our-Feature/OurFeature'
import Services from './Services/HomeServices'
import Testimonial from './Testimonial/Testimonial'

function Home() {

  useTitle('home')
    
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