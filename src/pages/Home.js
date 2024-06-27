import NavBar from "../components/NavBar";
import Ads from "../components/Ads";
import beard from '../imgs/beard.jpg';
import styles from '../styles/App.module.css';
import { FaHeart } from "react-icons/fa";

// import { FaHeart } from "react-icons/fa";
function Home(){
    return(
        <div className="bg-login w-full  h-[2000px] flex justify-center">
            <div className="bg-customBlue h-full w-full lg:w-[70%] 2xl:w-[1000px] box-border">
                <NavBar />
                <Ads />
                <div className="w-full px-5 text-white">
                    <div className="pl-5"><p className="font-extrabold text-xl text-green-600 mb-5">Top Barbers</p></div>
                    <div className={`flex gap-5   pb-5  overflow-x-scroll ${styles.hideScrollbar}`}>
                        <div className="h-[250px] w-[250px]  rounded-[20px] flex-shrink-0 shadow-black2">
                            <div className="h-[70%] w-full"><img src={beard} alt=""className="h-full w-full object-cover rounded-t-[20px]" /></div>
                            <div className="h-[30%] w-full p-3 flex">
                                <div className="w-[80%]">
                                    <h2 className="font-bold ">Salon DODO</h2>
                                    <p className="text-sm text-gray">Abdemoneim</p>
                                </div>
                                <div className="w-[20%] items-center justify-center flex flex-col">
                                    <FaHeart className="text-lg text-red-700 mb-1"/>
                                    <p className="text-[12px]">20K</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[250px] w-[250px]  rounded-[20px] flex-shrink-0 shadow-black2">
                        <div className="h-[70%] w-full"><img src={beard} alt=""className="h-full w-full object-cover rounded-t-[20px]" /></div>
                        <div className="h-[30%] w-full p-3 flex">
                                <div className="w-[80%]">
                                    <h2 className="font-bold ">Salon DODO</h2>
                                    <p className="text-sm text-gray">Abdemoneim</p>
                                </div>
                                <div className="w-[20%] items-center justify-center flex flex-col">
                                    <FaHeart className="text-lg text-red-700 mb-1"/>
                                    <p className="text-[12px]">20K</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[250px] w-[250px] shadow-black2 rounded-[20px] flex-shrink-0">
                        <div className="h-[70%] w-full"><img src={beard} alt=""className="h-full w-full object-cover rounded-t-[20px]" /></div>
                        <div className="h-[30%] w-full p-3 flex">
                                <div className="w-[80%]">
                                    <h2 className="font-bold ">Salon DODO</h2>
                                    <p className="text-sm text-gray">Abdemoneim</p>
                                </div>
                                <div className="w-[20%] items-center justify-center flex flex-col">
                                    <FaHeart className="text-lg text-red-700 mb-1"/>
                                    <p className="text-[12px]">20K</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[250px] w-[250px] shadow-black2 rounded-[20px] flex-shrink-0">
                        <div className="h-[70%] w-full"><img src={beard} alt=""className="h-full w-full object-cover rounded-t-[20px]" /></div>
                        <div className="h-[30%] w-full p-3 flex">
                                <div className="w-[80%]">
                                    <h2 className="font-bold ">Salon DODO</h2>
                                    <p className="text-sm text-gray">Abdemoneim</p>
                                </div>
                                <div className="w-[20%] items-center justify-center flex flex-col">
                                    <FaHeart className="text-lg text-red-700 mb-1"/>
                                    <p className="text-[12px]">20K</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;