import fire from '../../public/images/fire.png'
import '../../public/styles/font.css'
import ToggleButton from './ToggleButton'
import { motion } from 'framer-motion'

function Part2() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center mt-[10vh]'>
         <h1 className='text-[#1500ff] font-[largec] text-[11.5vw] w-[64vw] tracking-tighter leading-[25vh]'>We make you</h1>
        <h1 className='text-[#1500ff] font-[slima] text-[11vw] w-[64vw] tracking-tight ml-[5vw] flex items-center gap-4 leading-[10vh] mb-[10vh]'>one of a kind <motion.img initial={{y:"-10vh", opacity:0}} whileInView={{y:"0vh", opacity:1, transition:{duration: 1.5}}} className='w-[6vw] inline-block' src={fire} alt="fire image" /></h1>
        <p className='text-center font-[largec] text-[#1500ff] text-[2.5vw] tracking-normal font-normal leading-[5vh]'>We’re a new brand studio with a dynamic, in-house <br /> approach. We help you sharpen your value, create <br /> <span className='font-[bolda] text-[2.5vw] tracking-normal font-light leading-[5vh]'>superfans</span>, and build a brand that <span className='font-[bolda] text-[2.5vw] tracking-normal font-light leading-[5vh]'>pulls your customer in.</span></p>
        <div className='pt-[10vh]'>
        <ToggleButton bg={"#1500ff"} textc={"white"} text={"Learn More"} scale={"1.5"} fonts={"13px"} width={"110px"}/>
        </div>
    </div>
  )
}

export default Part2