import ToggleButton from "./ToggleButton"

function Part6() {
  return (
    <div className="w-full mt-[80vh] h-[54vh] px-[3vw] pt-[4vh] selection:bg-zinc-600 selection:text-white flex flex-col items-start justify-between bg-[#1500ff] text-white">
        <div className="font-[smallc]">WHAT WE BELIEVE:</div>
        <div className="flex flex-col items-start leading-[7.5vh]">
            <div className="font-[slima] text-[4vw]"> <span className="font-[largec]">Make</span> it Simple.</div>
            <div className="font-[slima] text-[4vw]"> <span className="font-[largec]">Make</span> it Personal.</div>
            <div className="font-[slima] text-[4vw]"> <span className="font-[largec]">Make</span> it Ping Pong.</div>
            <div className="font-[slima] text-[4vw]"> <span className="font-[largec]">Make</span> Before you Debate.</div>
        </div>
        <div className="w-full h-[12vh] flex items-center z-50 justify-between py-[4vh] ">
        <div className="bg-white w-[12vw] h-[4vh] flex items-center justify-center text-[#1500ff] font-[smallc] font-bold tracking-[4px] text-[1vw]">FAMILY STYLE</div>
        <div className="flex items-center space-x-[4vw]">
            <h1 className="text-white hover:underline cursor-pointer font-normal text-lg">Linkdin</h1>
            <h1 className="text-white hover:underline cursor-pointer font-normal text-lg">Instagram</h1>
            <ToggleButton bg={"white"} textc={"#1500ff"} text={"Contact"} scale={"1"} fonts={"16px"} width={"80px"}/>
        </div>
        </div>
    </div>
  )
}

export default Part6