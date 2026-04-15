import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation , Autoplay} from 'swiper/modules';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  {name:"html5", percentage:96},
  {name:"css3", percentage: 95},
  {name:"javaScript (ES6+)", percentage: 98},
  {name:"responsive design", percentage: 97},
  {name:"react JS", percentage:98},
  {name:"any", percentage:10},
]

const Skills = () => {
  
  return (
    <div id='skills' className="h-auto pt-22 sm:pt-25 pb-10">
      <div className='py-12 md:py-16 w-3/4 md:w-2/3 mx-auto my-auto bg-black/20 shadow-[0_0_20px_rgba(59,130,246,0.7)] rounded-4xl '>
        <div className='flex flex-col gap-5 items-center justify-center mb-6 md:mb-15'>
          <h2 className='text-3xl md:text-5xl tracking-wide  text-white font-bold'>Skills</h2>
          <p className='text-gray-400 text-md md:text-xl md:tracking-wider font-medium md:font-semibold capitalize'>you can see my skills here</p>
        </div>
        <div className='p-3 md:p-10'>
          <Swiper
          loop={true}
          // slidesPerView={3}
          centeredSlides={true}
          spaceBetween={10}
          navigation={true}
          modules={[ Navigation, Autoplay]}
          speed={600}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          // grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            668: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper "
        >
          {skills.map((item , index)=>(
            <SwiperSlide className='w-25 md:w-50 '>
              <div className='mx-auto w-25 md:w-40'>
                <CircularProgressbar key={index} value={item.percentage} text={`${item.percentage}%`} styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "oklch(62.3% 0.214 259.815)",
                  trailColor: "transparent",
                  strokeLinecap: "round",
                  
                })} />
                </div>
                <div>
                  <span className="text-white capitalize text-md md:text-lg font-bold flex items-center justify-center mt-4">
                    {item.name}
                  </span>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Skills
