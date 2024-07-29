import {useEffect} from "react";
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
function MyAppointment()
{
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center overflow-hidden">
            <div className="bg-customBlue h-full flex flex-col items-center min-h-screen w-full md:w-[100%] lg:w-[1000px] box-border relative  overflow-hidden">
                <NavBar profile="MyAppointment"/>
                <div className='pt-[100px]'></div>

                <div className="w-full h-[70px] mb-[50px] text-white font-bold text-lg bg-customBlue shadow-lg border-t-[2px]  flex" style={{borderColor: "#2d3135"}}>
                    <div className="w-1/2 flex items-center justify-center border-r-[2px]  cursor-pointer" style={{borderColor: "#2d3135"}}>current</div>
                    <div className="w-1/2 flex items-center justify-center cursor-pointer">past</div>
                </div>
                <div className="px-[70px] w-full flex gap-x-10">
                    <div className="w-full h-[250px] bg-customBlue shadow-xl rounded-xl mb-5">d</div>
                    <div className="w-full h-[250px] bg-customBlue shadow-xl rounded-xl">d</div>
                </div>
                <BottomMenu location="posts"/>
                <div className='mb-[120px]'></div>
            </div>
        </div>
    );
}

export default MyAppointment;