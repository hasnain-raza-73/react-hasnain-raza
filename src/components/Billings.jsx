import React from 'react'
import { apple, google, bill } from '../assets'
import styles, {layout}  from '../style'




const Billings = () => 
 (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-10' />
      <div className=' absolute z-[3] -left-1/2
       top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className=' absolute z-[0] -left-1/2
       bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Lorem ipsum dolor sit<br className='sm:block hidden'/> amet consectetur.</h2>
      <p className={`${styles.paragraph} max-w[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis hic, 
        distinctio mollitia minus, neque fuga debitis sunt illum voluptas eveniet ex officia.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="applePay" className='w-[120px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="googlePay" className='w-[120px] h-[42px] object-contain mr-5 cursor-pointer'/>
        </div>
    </div>
  </section>
  )


export default Billings