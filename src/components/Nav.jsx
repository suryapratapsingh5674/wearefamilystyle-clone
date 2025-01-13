import ToggleButton from "./ToggleButton"
import '../../public/styles/font.css'

function Nav() {
  return (
    <div className="w-full fixed h-[12vh] flex items-center z-50 justify-between bg-white/60 backdrop-blur-sm px-[4vw] py-[4vh] ">
        <div className="bg-[#1500ff] w-[12vw] h-[4vh] flex items-center justify-center text-white font-[smallc] font-bold tracking-[4px] text-[1vw]">FAMILY STYLE</div>
        <div className="flex items-center space-x-[4vw]">
            <h1 className="text-[#1500ff] cursor-pointer font-normal text-lg">Work</h1>
            <h1 className="text-[#1500ff] font-normal cursor-pointer text-lg">About</h1>
            <ToggleButton bg={"#1500ff"} textc={"white"} text={"Contact"} scale={"1"} fonts={"16px"} width={"80px"}/>
        </div>
    </div>
  )
}

export default Nav