import {useEffect} from "react";    
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import { RiEditBoxFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

function Profile(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full md:w-[100%] lg:w-[1000px] box-border relative ">
                <NavBar profile="profile"/>
                <div className="mt-[163px] 324:mt-[110px] 480:mt-[120px]"></div>
                <div className="w-full h-full 376:px-[30px] px-[10px] mb-[20px]">
                    <div className="w-full bg-login 570:h-[400px] overflow-hidden rounded-2xl relative text-white ">
                        <div className="absolute 570:w-[80px] 570:h-[80px]  w-[50px] h-[50px] bg-green-700 right-0 rounded-bl-[100px] flex items-center justify-center 570:text-[30px] text-[20px] text-white"><RiEditBoxFill  className="570:ml-4 ml-2.5 570:mt-[-13px] mt-[-7px] cursor-pointer hover:text-login transition-all duration-300"/></div>
                        <div className="w-full px-[30px] pt-5 500:mb-[50px] mb-[25px]">
                            <p className="font-bold 500:text-[20px] text-[17px]">Personal Info</p>
                        </div>
                        <div className="w-full h-full 600:px-[100px] 500:px-[60px]  pl-[30px] pr-[30px] flex mb-[30px]">
                            <div className="w-1/2">
                                <div className="mb-[30px] ">
                                    <p className="font-bold 570:text-xl 500:text-md text-[13px]  mb-2">Full Name</p>
                                    <p className="570:text-[16px] 500:text-[14px] text-[12px] ml-1">Abdelkarim Hajji</p>
                                </div>
                                <div className="mb-[30px]">
                                    <p className="font-bold 570:text-xl 500:text-md text-[13px] mb-2">Gender</p>
                                    <p className="570:text-[16px] 500:text-[14px] text-[12px] ml-1">Male</p>
                                </div>
                                <div>
                                    <p className="font-bold 570:text-xl 500:text-md text-[13px] mb-2 overflow-hidden">E-mail</p>
                                    <p className="570:text-[16px] 500:text-[14px] text-[12px] ml-1">hajjikarim530@gmail.com</p>
                                </div>
                            </div>
                            <div className=" w-1/2 flex flex-col  700:items-center items-end">
                            <div>
                                <div className="mb-[30px]">
                                    <p className="font-bold 570:text-xl 500:text-md text-[13px] mb-2">Date of Birth</p>
                                    <p className="570:text-[16px] 500:text-[14px] text-[12px] ml-1">2001/04/20</p>
                                </div>
                                <div className="mb-[30px]">
                                    <p className="font-bold 570:text-xl 500:text-md text-[13px] mb-2">Phone</p>
                                    <p className="570:text-[16px] 500:text-[14px] text-[12px] ml-1">0617591321</p>
                                </div>
                                <div>
                                    <p className="font-bold 570:text-xl 500:text-md text-[13px] mb-2">Location</p>
                                    <p className="570:text-[16px] 500:text-[14px] text-[12px] ml-1">Tangier</p>
                                </div>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full 376:px-[30px] px-[10px] mb-[120px]">
                        <div className="h-[80px] text-white flex items-center pl-[30px] bg-login rounded-xl mb-1 relative cursor-pointer">
                            <p>Appointemnt</p>
                            <div className="absolute 700:w-10  500:w-7 500:h-7 h-6 w-6  bg-white rounded-full 700:right-[50px] right-8 flex items-center justify-center"><MdKeyboardArrowRight className="text-[22px] text-login font-bold"/></div>
                        </div>
                        <div className="h-[80px] text-white flex items-center pl-[30px] bg-login rounded-xl mb-1 relative cursor-pointer">
                            <p>Appointemnt</p>
                            <div className="absolute 700:w-10  500:w-7 500:h-7 h-6 w-6  bg-white rounded-full 700:right-[50px] right-8 flex items-center justify-center"><MdKeyboardArrowRight className="text-[22px] text-login font-bold"/></div>
                        </div>
                </div>
                <BottomMenu location="profile"/>
            </div>
        </div>
    );
}

export default Profile;