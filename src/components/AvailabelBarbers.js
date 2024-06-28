import beard from '../imgs/beard.jpg';
import styles from '../styles/App.module.css';
import { FaHeart } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";

function AvailabelBarbers(){
    return (
        <div className="w-full px-3 480:px-5">
            <div className="pl-3"><p className="font-extrabold text-xl text-green-600 mb-6">Barbers Availabel</p></div>
            <div className=" w-full grid grid-cols-2  md:grid-cols-3  gap-x-4 480:gap-x-2 gap-y-4  480:gap-y-12">
                <div className="w-[100%] 480:w-[90%] sm:h-[350px] h-[300px] shadow-black2 rounded-[20px]  mx-auto  flex flex-col items-center">
                    <div className="w-full h-[45%] rounded-t-[20px] relative z-0">
                        <img src={beard} alt="" srcset="" className="w-full h-full object-cover rounded-t-[20px]"/>
                        {/* <div className='absolute top-5 left-4 rounded-xl w-[50px] h-[20px] bg-green-700 text-[12px] text-white font-bold flex items-center justify-center'>Open</div> */}
                        <div className='absolute top-5 left-4 rounded-xl w-[55px] h-[20px] bg-red-800 text-[12px] text-white font-bold flex items-center justify-center'>Closed</div>
                    </div>
                    <div className=' w-full text-white pt-4 px-4'>
                        <p className={`font-bold ${styles.truncate}`}>Salon Dodo</p>
                        <p className={`text-gray text-sm ${styles.truncate}`}>abdelkarim hajji</p>
                    </div>
                    <div className={`w-full  px-4 pt-4 flex overflow-hidden mb-4`}>
                        <p className='flex items-center text-white'><FaHeart className='text-red-700'/> <span className='ml-1 text-[12px]'>20,200</span></p>
                        <p className={`text-white ml-6 flex items-center `}><LuMessagesSquare  className='text-green-600'/><span className='text-[12px] ml-1'>1,500</span></p>
                    </div>
                    <div>hi</div>
                </div>
                <div className="w-[100%] 480:w-[90%] sm:h-[350px] h-[300px] shadow-black2 rounded-[20px]  mx-auto  flex items-center justify-center">
                <p>Div 2</p>
                </div>
                <div className="w-[100%] 480:w-[90%] sm:h-[350px] h-[300px] shadow-black2 rounded-[20px]  mx-auto  flex items-center justify-center">
                <p>Div 3</p>    
                </div>
                <div className="w-[100%] 480:w-[90%] sm:h-[350px] h-[300px] shadow-black2 rounded-[20px]  mx-auto  flex items-center justify-center">
                <p>Div 4</p>
                </div>
            </div>
        </div>
    );
}

export default  AvailabelBarbers;