import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu"
import beard from '../imgs/beard.jpg';
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Posts(){
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full lg:w-[70%] 2xl:w-[1000px] box-border relative ">
                <NavBar />
                <div className="mt-[163px] 324:mt-[165px] 480:mt-[200px]"></div>

                <div className="w-full flex items-center h-auto justify-center flex-col " >
                    <div className="sm:w-[600px]  w-[87%] min-h-[700px]  h-auto  mb-10 bg-login rounded-xl   " >
                        {/* start top of post */}
                        <div className="h-[70px] w-full  flex mb-3">
                            <div className="w-full h-full  flex items-center px-2">
                                <img src={beard} alt="" className="h-[50px] w-[50px] object-cover rounded-full"/>
                                <div className="ml-2 text-white">
                                    <p className="font-bold ">Abdelkarim hajji</p>
                                    <p className="text-[10px] text-gray">3 days a go</p>
                                </div>
                            </div>
                            {/* <div className="w-1/2 h-full ">

                            </div> */}
                        </div>
                        {/* end top of post */}

                        {/* start content of  post*/}
                        <div className="text-gray mb-3 px-6"><p>hi this is my first post hello !!! hi this is my first post hello !!!hi this is my first post hello !!!hi this is my first post hello !!!hi this is my first post hello !!!</p></div>
                        <div className={`px-5 w-full h-[500px] mb-5`} >
                           
                            <div className="rounded-xl h-full  bg-cover bg-center object-cover mb-10" style={{backgroundImage: `url(${beard})` }}></div>
                        </div>
                        {/* end content of  post*/}
                        <div className="px-6 mb-3 flex">
                            <div className="flex items-center justify-start w-1/2 sm:text-[20px] text-[15px]">
                                <FaHeart className=" cursor-pointer text-red-800"/>
                                <p className="text-white ml-2">30.000</p>
                            </div>
                            <div className="flex items-center justify-end w-1/2 sm:text-[20px] text-[15px]">
                               <p className="text-white">193 comments</p>
                                {/* <p className="text-white ml-2">50 share</p> */}
                            </div>
                        </div>
                        {/* start reaction */}
                        <div className="text-white sm:px-[70px] px-6 flex mb-5 sm:text-[20px] text-[15.5px]">
                            <div className="flex items-center sm:justify-center text-gray w-1/2 rounded-xl cursor-pointer transition-all hover:bg-customBlue">
                                <FaHeart className=" cursor-pointer"/>
                                <p className="ml-2">Like</p>
                            </div>
                            <div className="flex items-center sm:justify-center  py-2 cursor-pointer rounded-xl text-gray w-1/2 transition-all hover:bg-customBlue">
                                <FaComment className=" cursor-pointer"/>
                                <p className="ml-2">Comment</p>
                            </div>
                        </div>
                        {/* end reaction */}
                        <div className="w-full px-5 mb-6">
                            <div className="relative">
                                <input type="text" placeholder="Write a comment ... " className="w-full h-[40px] text-white rounded-xl bg-searchBar box-border pl-5" />
                                <IoSend className="absolute top-3 right-4 text-gray  text-[19px] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-[500px] h-[600px] mb-10 bg-login rounded-xl   " >

                    </div> */}
                </div>
                <BottomMenu location="posts"/>
                <div className='mb-[120px]'>

                </div>
            </div>
        </div>
    );
}


export default Posts