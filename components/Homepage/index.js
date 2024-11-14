import React from 'react'
import Banner from '../Banner'
import Support from '../Support'
import ForWho from '../ForWho'
import RequiredDocs from '../RequiredDocs'
import Reviews from '../Reviews'
import CTABanner from '../CTABanner'
import FAQ from '../FAQ'
import HowItWorks from '../HowItWorks'
import Benefits from '../Benefits'
import Process from '../Process'
import WhatYouGet from '../WhatYouGet'

const Homepage = () => {
  return (
    <div className="pt-0">
      <Banner />
      <Support />
      <HowItWorks />
      <RequiredDocs />
      <Benefits />
      <Process />
      <WhatYouGet />
      {/* <ForWho /> */}
      
      <Reviews />
      <CTABanner />
      
      <FAQ />
    </div>
  )
}

export default Homepage