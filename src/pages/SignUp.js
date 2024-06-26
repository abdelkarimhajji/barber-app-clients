import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import { GiBeard } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { GoLock } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { GoInbox } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";
import { useState } from "react";

import styles from "../styles/App.module.css";

function SignUp() {

  const [showPassword, setPassword] = useState(true);
  const navigate = useNavigate();
  return (
    <div   className="bg-customBlue min-h-screen h-full  flex  items-center justify-center pt-4 pb-4 2xl:items-center sm:pt-10 sm:pb-10 box-border ">
            {/* start of the container of two parts */}
            <div className="bg-black min-h-full w-11/12 flex h-full 2xl:w-[1300px] lg:h-[750px] rounded-xl  box-border">
                {/* start of the first part of left login */}
                <div className="bg-beard bg-custom-left w-3/5 h-full hidden lg:block rounded-l-xl">
                    <div className="w-full h-full bg-transparent text-white rounded-l-xl">
                        <div className="  flex flex-col items-center box-border  pt-[100px]">
                            <GiBeard className="text-[80px] text-white"/>
                        </div>
                        <div className=" h-[600px]  w-full box-border overflow-hidden flex flex-col   justify-center ">
                            <div className=" w-full h-auto  flex flex-col items-center box-border pl-[30px] pr-[80px] ">
                                <h3 className="text-5xl font-bold mb-6 text-center ">Welcome back!</h3>
                                <p className="ml-2 text-lg tracking-wide mb-6 text-center">Get access to your Orders, Wishlist and Recommendations,
                                     Get access to your Orders, Wishlist and Recommendations.</p>
                                <button type="button" className="bg-green-800 hover:bg-green-900     py-3.5 w-[300px] rounded-xl  transition-all ">Watch Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of the first part of left login */}
                {/* start of the second part of right login */}
                <div className="bg-login w-full lg:w-2/5 md:h-full  h-auto flex items-center justify-center flex-col text-white   lg:rounded-none rounded-xl lg:rounded-r-xl py-[50px]">
                    <div className="w-full flex items-center justify-center  flex-col  ">
                        <div className="w-[90px] h-[90px] rounded-2xl flex items-center justify-center bg-white shadow-white mb-5">
                                <GiBeard className="text-[75px] text-login"/>
                        </div>
                        <h1 className="font-semibold font-signature tracking-widest text-2xl mb-[10px]">7ala9</h1>
                        <h2 className="text-4xl font-semibold mb-3 w-11/12 text-center">Welcome back</h2>
                        <p className="w-11/12 xsm:w-[350px] text-center tracking-wide mb-10 text-sm">Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed do eiusmod tempor</p>
                        <div className="flex  rounded-xl h-[50px]  w-11/12 xsm:w-[300px] relative mb-4">
                            <IoPersonOutline className="text-[26px] top-3  left-2 text-green-800  w-[40px] absolute"/>
                            <input type="text" placeholder="Full Name" className={`rounded-xl w-full border-green-500 text-placeholder  focus:outline-green-500 box-border pl-[53px] pr-[20px] ${styles.inputPlaceholder}`}/>
                        </div>
                        <div className="flex  rounded-xl h-[50px]  w-11/12 xsm:w-[300px] relative mb-4">
                            <GoInbox className="text-[26px] top-3  left-2 text-green-800  w-[40px] absolute"/>
                            <input type="text" placeholder="Email Address" className={`rounded-xl w-full border-green-500 text-placeholder  focus:outline-green-500 box-border pl-[53px] pr-[20px] ${styles.inputPlaceholder}`}/>
                        </div>
                        <div className="flex  rounded-xl h-[50px]  w-11/12 xsm:w-[300px] relative mb-4">
                            <IoIosPhonePortrait className="text-[26px] top-3  left-2 text-green-800  w-[40px] absolute"/>
                            <input type="text" placeholder="Phone Number" className={`rounded-xl w-full border-green-500 text-placeholder  focus:outline-green-500 box-border pl-[53px] pr-[20px] ${styles.inputPlaceholder}`}/>
                        </div>
                        <div className="flex  rounded-xl h-[50px]  w-11/12 xsm:w-[300px] relative mb-8">
                            <GoLock className="text-[26px] top-3  left-2 text-green-800  w-[40px] absolute"/>
                            <input type={showPassword ? "password" : "text"} placeholder="Password" className={`rounded-xl w-full border-green-500 text-placeholder  focus:outline-green-500 box-border pl-[53px] pr-[53px] ${styles.inputPlaceholder}`}/>
                            {
                              showPassword ? <AiOutlineEyeInvisible onClick={() => setPassword(!showPassword)} className="absolute text-green-800 text-[26px] top-3 left-[85%] xsm:left-[257px] cursor-pointer"/> :
                              <AiOutlineEye onClick={() => setPassword(!showPassword)}  className="absolute text-green-800 text-[26px] top-3 left-[85%] xsm:left-[257px] cursor-pointer"/>
                            }
                        </div>
                        <button type="button" className="bg-green-800 hover:bg-green-900   py-3.5 w-11/12 xsm:w-[300px] rounded-xl  transition-all mb-6">Login</button>
                        <p className="mb-6 w-11/12 text-center">You realy have accout go to?<span onClick={() => navigate("/signIn")} className="text-green-700 font-medium cursor-pointer hover:text-green-800"> Sign In</span></p>
                    </div>
                    
                </div>
                {/* end of the second part of right login */}
            </div>
            {/* end of the container of two parts */}
        </div>
  );
}

export default SignUp;
