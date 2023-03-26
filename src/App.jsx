import React from 'react'
import styles from './style'

import {   Navbar, Billings, CardDeal, Business,Clients, CTA, Stats, Footer, Testimonials, Hero, } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <h1 className='color-white'>hello world</h1>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} text-white`}>
            <Stats />
            <Business />
            <Billings />
            <CardDeal />
            <Clients />
            <CTA />
            <Footer />
            <Testimonials />
        </div>
      </div>

    </div>
  )
}

export default App 