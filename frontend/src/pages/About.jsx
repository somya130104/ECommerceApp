import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
       <div className='text-2xl text-center border-t pt-8'>
          <Title text1 = {"ABOUT"} text2 = {"US"}></Title>
       </div>
       
       <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src= {assets.about_img} alt=''/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, quidem commodi sequi consequuntur harum, odit alias qui perferendis unde consequatur laboriosam rem ex aperiam iste incidunt dolore repellendus nisi assumenda optio cumque corporis maiores similique aut. Quis velit hic vitae adipisci ex quibusdam reiciendis! Soluta quasi eius ullam quisquam odit?</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate illo voluptates rem quae iste expedita ab reprehenderit fugit dolorum illum officiis facilis adipisci est, itaque pariatur omnis quo cum quam sequi explicabo quod sit consequuntur ex. Corrupti, voluptatum.</p>
          </div>
       </div>

       <div className='text-xl py-4'>
          <Title text1 = {"WHY"} text2 = {"CHOOSE US"}/>
       </div>

       <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-400 rounded-sm  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aperiam. Sunt explicabo quidem minima quaerat est culpa accusantium sequi tenetur.</p>
        </div>
        <div className='border border-gray-400 rounded-sm  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience : </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aperiam. Sunt explicabo quidem minima quaerat est culpa accusantium sequi tenetur.</p>
        </div>
        <div className='border border-gray-400 rounded-sm px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Experience : </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aperiam. Sunt explicabo quidem minima quaerat est culpa accusantium sequi tenetur.</p>
        </div>
       </div>
      
      <NewsLetterBox/>
    </div>
  )
}

export default About
