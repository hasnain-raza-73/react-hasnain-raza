import React from 'react'
import { features  } from '../constants'
import styles , { layout } from '../style'
import Button from './Button'


const FeatureCard  = ({icon , title, content , index}) => (
  <div className={`p-6 flex-row flex rounded-[20px] ${index != features.length - 1 ? "md-6" : "mb-0" } feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%]'/>
    </div>
    <div className='flex flex-1 ml-3 flex-col'>
        <h4 className={` font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1`}>
          {title}
        </h4>
      <p className={` font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1`}>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Lorem ipsum dolor sit ,<br className='sm:block hidden'/> amet consectetur.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste illo ut delectus nostrum impedit,
           voluptatum alias consequatur explicabo provident soluta animi possimus ipsa. Quos, in?</p>

           <Button styles='mt-10'/>
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index}/>
      )) }
    </div>
  </section>
  )
}

export default Business