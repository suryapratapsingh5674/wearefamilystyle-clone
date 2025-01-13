import chair from '../../public/images/claychair.avif'
import {motion} from 'framer-motion'

function Part4() {
  return (
    <div className='w-full h-[134vh] flex flex-col items-start gap-2 ml-[18vw] justify-center pt-[30vh]'>
        <motion.div initial={{opacity:0, y:"10vh"}} whileInView={{opacity:1, y:"0vh", transition:{duration:0.5, staggerChildren:0.2}}}  className='flex items-end justify-between w-[60vw]'>
            <div className='w-4 h-4 rounded-full bg-[#1500ff]'></div>
            <img src={chair} className='w-[9vw]' alt="" />
        </motion.div>
        <motion.p initial={{opacity:0, y:"10vh"}} whileInView={{opacity:1, y:"0vh", transition:{duration:0.5, staggerChildren:0.2}}}  className='w-[65vw] text-start text-[#1500ff] font-normal font-[largec] text-[2.5vw] leading-[5.5vh]'>Working with Hannah and Jess was a pivotal moment for <br /> our company. They truly understood our industry, <br /> translating our vision into a concrete brand identity and a <br /> strong North Star. It’s hard to overstate the efficiency we <br /> gained. Our decision-making became more streamlined <br /> and more focused. Easily some of the brightest and most <br /> productive people we’ve had the pleasure to work with.</motion.p>
        <motion.p initial={{opacity:0, y:"10vh"}} whileInView={{opacity:1, y:"0vh", transition:{duration:0.5, staggerChildren:0.2}}}  className='w-[65vw] text-start text-[#1500ff] font-normal font-[smallc] text-[1.3vw] mt-4 leading-[5.5vh]'>— Jack Wink, co-Founder lunchbox entertainment</motion.p>

    </div>
  )
}

export default Part4