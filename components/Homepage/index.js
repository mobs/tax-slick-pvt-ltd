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
import SmallCTABanner from '../SmallCTABanner'
import { FaWhatsapp } from 'react-icons/fa'
import RouteHandler from '../RouteHandler'

const Homepage = () => {
  return (
    <div className="pt-0">
      <SmallCTABanner />
      <Banner />
      <Support />
      <HowItWorks />
      <RequiredDocs />
      <Benefits />
      <Process />
      <WhatYouGet />
      {/* <ForWho /> */}
      
      {/* <Reviews /> */}
      <CTABanner />
      
      <FAQ />

      <a
        href="https://wa.me/+919266159995?text=Hi%2C%20I%20want%20to%20do%20Private%20Limited%20Registration%20of%20my%20organization"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      <RouteHandler eventName="page_viewed" />
    </div>
  )
}

export default Homepage