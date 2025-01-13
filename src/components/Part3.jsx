import { GrLinkDown } from "react-icons/gr";
import {motion} from 'framer-motion'
import video from '../../public/video/mainvideo.mp4'

function Part3() {
  return (
    <div className="h-screen w-full px-[3vw] pt-[20vh]">
        <div className="flex items-center">
            <div className="text-[#1500ff] text-[6.2vw] font-[bolda] font-normal border-b-2 border-l-2 border-r-2 border-[#1500ff] rounded-full px-8"><span className="font-[largec]">Our</span> Work</div>
            <div className="text-[#1500ff] text-[7vw] border-t-2 border-l-2 border-r-2 border-[#1500ff] rounded-full p-6"><GrLinkDown /></div>
        </div>
        <motion.div initial={{opacity:0, y:"20vh"}} whileInView={{opacity:1, y:"0vh", transition:{duration:0.5}}} className="h-[90vh] w-full relative">
        <video  src={video} autoPlay muted loop className="mt-[5vh] h-full w-full object-cover"></video>
        <div className="w-full h-full flex flex-col items-center justify-center absolute top-0 text-white font-[largec] text-[4.5vw] bg-[#1500FFBF] text-center opacity-0 hover:opacity-100 duration-300">A Multiplayer Revolution: <br /> Fun Without the Grind</div>
        </motion.div>
    </div>
  )
}

export default Part3