import {useEffect} from "react";    
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import { RiEditBoxFill } from "react-icons/ri";
function Profile(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full md:w-[100%] lg:w-[1000px] box-border relative ">
                <NavBar profile="profile"/>
                <div className="mt-[163px] 324:mt-[165px] 480:mt-[120px]"></div>
                <div className="w-full h-full px-[30px]">
                    <div className="w-full bg-login h-[400px] overflow-hidden rounded-2xl relative text-white ">
                        <div className="absolute w-[80px] h-[80px] bg-green-700 right-0 rounded-bl-[100px] flex items-center justify-center text-[30px] text-white"><RiEditBoxFill  className="ml-4 mt-[-13px] cursor-pointer hover:text-login transition-all duration-300"/></div>
                        <div className="w-full px-[30px] pt-5 mb-[50px]">
                            <p className="font-bold text-[20px]">Personal Info</p>
                        </div>
                        <div className="w-full h-full 600:px-[100px] px-[60px] flex">
                            <div className="w-1/2">
                                <div className="mb-[30px] ">
                                    <p className="font-bold text-xl mb-2">Full Name</p>
                                    <p className="text-[16px] ml-1">Abdelkarim Hajji</p>
                                </div>
                                <div className="mb-[30px]">
                                    <p className="font-bold text-xl mb-2">Gender</p>
                                    <p className="text-[16px] ml-1">Male</p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl mb-2 overflow-hidden">E-mail</p>
                                    <p className="text-[16px] ml-1">hajjikarim530@gmail.com</p>
                                </div>
                            </div>
                            <div className=" w-1/2 flex flex-col  700:items-center items-end">
                            <div>
                                <div className="mb-[30px]">
                                    <p className="font-bold text-xl mb-2">Date of Birth</p>
                                    <p className="text-[16px] ml-1">2001/04/20</p>
                                </div>
                                <div className="mb-[30px]">
                                    <p className="font-bold text-xl mb-2">Phone</p>
                                    <p className="text-[16px] ml-1">0617591321</p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl mb-2">Location</p>
                                    <p className="text-[16px] ml-1">Tangier</p>
                                </div>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <BottomMenu location="profile"/>
            </div>
        </div>
    );
}

export default Profile;