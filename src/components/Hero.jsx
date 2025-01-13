import mainimage from '../../public/images/maintext.png'
import chair from '../../public/images/chir.png'
import pinkchair from '../../public/images/pinkchir.png'
import plant from '../../public/images/plant.png'
import bird from '../../public/images/bird.png'
import windmile from '../../public/images/windmile.png'
import gladiator from '../../public/images/gladiater.png'
import frame from '../../public/images/frame.png'
import '../../public/styles/font.css'
import {motion} from 'framer-motion'

function Hero() {

  return (
    <div className='relative'>
    <div className='flex flex-col items-center gap-[4vh] pt-[20vh]'>
        <h1 className='text-[#1500ff] font-[smallc] text-[3.2vw]'>INTRODUCING</h1>
        <img className='h-[26vw]' src={mainimage} alt="" />
        <h1 className='text-[#1500ff] font-[smallc] text-[2.2vw]'>A NEW BRAND STUDIO</h1>
    </div>
    <motion.img initial={{y:"0px"}} animate={{y:[0, 3, 0], transition: {duration: 2, repeat: Infinity, ease: 'easeInOut'}}} className='absolute top-[72vh] left-[6vw] z-10 h-[13vw]' src={chair} alt="" />
    <motion.img initial={{y:"0px"}} animate={{y:[0, -4, 0], transition: {duration: 2, repeat: Infinity, ease: 'easeInOut'}}} className='absolute top-[62vh] z-10 right-[11vw] h-[13vw]' src={pinkchair} alt="" />
    <motion.img initial={{y:"0px"}} animate={{y:[0, -4, 0], transition: {duration: 2, repeat: Infinity, ease: 'easeInOut'}}} className='absolute top-[52vh] left-[13.4vw] h-[18vw]' src={plant} alt="" />
    <motion.img initial={{y:"0px"}} animate={{y:[0, 3, 0], transition: {duration: 2, repeat: Infinity, ease: 'easeInOut'}}} className='absolute top-[20vh] right-[23vw] h-[8vw]' src={bird} alt="" />
    <motion.img initial={{y:"0px"}} animate={{y:[0, 3, 0], transition: {duration: 2, repeat: Infinity, ease: 'easeInOut'}}} className='absolute top-[32vh] left-[6vw] h-[10vw]' src={windmile} alt="" />
    <motion.img initial={{y:"0px"}} animate={{y:[0, -4, 0], transition: {duration: 2, repeat: Infinity, ease: 'easeInOut'}}} className='absolute top-[22vh] left-[20vw] h-[6vw]' src={gladiator} alt="" />
    <motion.img initial={{y:"0px"}} animate={{y:[0, 3, 0], transition: {duration: 2, repeat: Infinity, ease: 'easeInOut'}}} className='absolute top-[46vh] right-[9vw] h-[10vw]' src={frame} alt="" />
    </div>
  )
}

export default Hero