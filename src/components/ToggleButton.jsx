import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

function ToggleButton(data) {
  return (
    <motion.div variants={{open:{opacity:1}, closed:{opacity:1}}} initial="closed" whileHover="open" className="flex cursor-pointer items-center" style={{color:data.textc, scale:data.scale}}>
        <motion.div variants={{open:{scale:1}, closed:{scale:0}}}  className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor:data.bg}}><HiArrowRight /></motion.div>
        <motion.div variants={{open:{x:"0px"}, closed:{x:"-20px"}}}  className="h-8 flex items-center justify-center font-normal  rounded-3xl" style={{backgroundColor:data.bg, width:data.width, fontSize:data.fonts}}>{data.text}</motion.div>
        <motion.div variants={{open:{scale:0}, closed:{scale:1, x:"-20px"}}}  className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor:data.bg}}><HiArrowRight /></motion.div>
    </motion.div>
  )
}

export default ToggleButton