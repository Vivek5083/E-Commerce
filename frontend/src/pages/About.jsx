import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p className='text-black'>"Welcome to Forever – your destination for timeless elegance and everyday essentials. Discover a curated collection designed to inspire and elevate your lifestyle."</p>
        <p className='text-black'>At Forever, we believe in timeless quality and enduring style that caters to every generation. Our platform curates a wide range of products that blend innovation with everyday essentials, designed to make your life easier and more delightful. Discover a world where shopping feels seamless and satisfaction lasts forever.</p>
        <b className='text-black'>Our Mission</b>
        <p className='text-black'>At Forever, our mission is to create a seamless shopping experience that inspires trust, fosters connection, and celebrates individuality. We strive to deliver exceptional quality, innovation, and value, empowering our customers to embrace timeless choices for a better tomorrow.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-black'>At Forever, quality is at the heart of everything we do. Each product in our collection goes through a rigorous selection process to ensure it meets the highest standards of durability, functionality, and style. </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-black'>At Forever, we prioritize your convenience at every step of your shopping journey. From an intuitive website design to streamlined checkout and fast, reliable delivery, we ensure a hassle-free experience.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p >At Forever, our customers are at the core of everything we do. We are committed to providing prompt, friendly, and personalized support to ensure your shopping experience is nothing short of exceptional.</p>
        </div>
      </div>
      <NewsLetterBox/>

        
    </div>
  )
}

export default About