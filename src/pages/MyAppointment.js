import {useEffect} from "react";
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import beard from "../imgs/beard.jpg";
import beard3 from '../imgs/barber2.avif';
import beard2 from '../imgs/images.jpeg';
import { FaHeart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import styles from '../styles/App.module.css';
function MyAppointment()
{
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center overflow-hidden">
            <div className="bg-customBlue h-full flex flex-col items-center min-h-screen w-full md:w-[100%] lg:w-[1000px] box-border relative  overflow-hidden">
                <NavBar profile="MyAppointment"/>
                <div className='pt-[100px]'></div>

                <div className="w-full h-[70px] mb-[50px] text-white font-bold text-lg bg-customBlue shadow-lg  flex" style={{borderColor: "#2d3135"}}>
                    <div className="w-1/2 flex items-center justify-center bg-customBlueHover  cursor-pointer" style={{borderColor: "#2d3135"}}>current</div>
                    <div className="w-1/2 flex items-center justify-center cursor-pointer">past</div>
                </div>
                <div className=" mb-10 w-full 400:grid grid-cols-2  md:grid-cols-3  gap-x-4 480:gap-x-2 px-5   400:gap-y-3">
                    <div className="  w-[100%] 400:w-[100%]  sm:h-[320px] h-[320px] shadow-black2 rounded-[20px]  mx-auto cursor-pointer  flex flex-col items-center mb-[20px] 400:mb-0">
                        <div className="w-full h-[45%] rounded-t-[20px] relative z-0 overflow-hidden">
                            <img src={beard3} alt=""  className="w-full h-full object-cover rounded-t-[20px]"/>
                            {/* <div className='absolute top-5 left-4 rounded-xl py-[0.6px] px-[7px] bg-green-700 text-[12px] text-white font-bold flex items-center justify-center'>Open</div> */}
                            <div className='absolute top-5 left-4 rounded-xl w-[55px] h-[20px] bg-red-800 text-[12px] text-white font-bold flex items-center justify-center'>Closed</div>
                        </div>
                        <div className=' w-full text-white pt-4 px-4'>
                            <p className={`font-bold ${styles.truncate}`}>Salon Dodo</p>
                            <p className={`text-gray text-sm ${styles.truncate}`}>abdelkarim hajji</p>
                        </div>
                        <div className={`w-full  px-4 pt-4 flex  overflow-x-scroll  mb-6 ${styles.hideScrollbar}`}>
                            <p className='flex items-center text-white flex-shrink-0 '><FaHeart className='text-red-700 480:text-[15px]'/> <span className='ml-1 text-[12px]'>20,200</span></p>
                            <p className={`text-white ml-6  flex items-center flex-shrink-0 `}><IoIosPersonAdd className='text-green-600  480:text-[15px]'/><span className='text-[12px] ml-1'>1,500</span></p>
                            <p className={`text-white ml-6  flex items-center flex-shrink-0`}><MdRateReview className='text-green-600 480:text-[15px]'/><span className='text-[12px] ml-1'>1,500</span></p>
                        </div>  
                        <div className='w-[100%]   flex justify-center items-end'>
                            <button type="button" className='text-white text-sm bg-green-700 py-2 mb-3 overflow-hidden sm:px-10 w-[80%] sm:w-auto rounded-xl'>2024/08/20 : 24:45</button>
                        </div>
                    </div>
                
                </div>
                <BottomMenu location="posts"/>
                <div className='mb-[120px]'></div>
            </div>
        </div>
    );
}

export default MyAppointment;