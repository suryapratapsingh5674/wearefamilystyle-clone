import chair from '../../public/images/bothchair.avif'
import plant from '../../public/images/plant.png'
import {motion} from 'framer-motion'
import ToggleButton from './ToggleButton'

function Part5() {
  return (
    <div className='h-screen w-full flex flex-col items-center gap-[5vh] pt-[14vh] relative'>
          <img src={chair} alt="" className='absolute w-[48vw] z-10'/>
          <img src={plant} alt="" className=' w-[17vw] absolute top-[-2vh]'/>
          <motion.p initial={{opacity:0, y:"10vh"}} whileInView={{opacity:1, y:"0vh", transition:{duration:1.5}}} className='pt-[40vh] text-[9vw] text-center font-[largec] mb-[8vh] text-[#1500ff] leading-[18vh]'>We partner with <br /> ambitious teams <br /> using a <span className='font-[slima] font-normal'>dynamic,</span> <br /> <span className='font-[slima] font-normal'>in-house</span> approach.</motion.p>
          <ToggleButton bg={"#1500ff"} textc={"white"} text={"Learn More"} scale={"2.1"} fonts={"14px"} width={"110px"} />
    </div>
  )
}

export default Part5