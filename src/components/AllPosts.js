import {useState} from 'react';
import beard from '../imgs/beard.jpg';
import image from '../imgs/images1.jpeg';
import image2 from '../imgs/image2.jpg';
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function AllPosts(){
    return (
        <div className="w-full flex items-center h-auto justify-center flex-col " >
            {/* start post */}
            <div className="sm:w-[600px]  w-[87%]   h-auto  mb-10 bg-login rounded-xl   " >
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
                <div className="text-gray mb-3 px-6"><p>hi this is my first post hello !!! hi this is my first post hello !!!hi this is my first </p></div>
                    <div className={`px-5 w-full  max-h-[500px] mb-5 flex justify-center `}>                
                        <img 
                            src={beard} 
                            alt="Description of image" 
                            className="rounded-xl object-contain w-full h-full max-h-[500px] "
                        />
                    </div>
                {/* end content of  post*/}

                {/* start how actions in your post */}
                <div className="px-6 mb-3 flex">
                    <div className="flex items-center justify-start w-1/2 md:text-[15.5px] text-[13.5px]">
                        <FaHeart className=" cursor-pointer text-red-800"/>
                        <p className="text-white ml-2">30.000</p>
                    </div>
                    <div className="flex items-center justify-end w-1/2 md:text-[15.5px] text-[13.5px]">
                        <p className="text-white">193 comments</p>
                        {/* <p className="text-white ml-2">50 share</p> */}
                    </div>
                </div>
                {/* end how actions in your post */}

                {/* start reaction */}
                <div className="text-white sm:px-[70px] px-6 flex mb-5 sm:text-[17.5px] text-[15px]">
                    <div className="flex items-center justify-center text-gray w-1/2 rounded-xl cursor-pointer transition-all hover:bg-customBlue">
                        <FaHeart className=" cursor-pointer"/>
                        <p className="ml-2">Like</p>
                    </div>
                    <div  className="flex items-center justify-center  py-2 cursor-pointer rounded-xl text-gray w-1/2 transition-all hover:bg-customBlue">
                        <FaComment className=" cursor-pointer"/>
                        <p className="ml-2">Comment</p>
                    </div>
                </div>
                {/* end reaction */}
                {/* <div className="w-full px-5 mb-6">
                    <div className="relative">
                        <input type="text" placeholder="Write a comment ... " className="w-full h-[40px] text-white rounded-xl bg-searchBar box-border pl-5" />
                        <IoSend className="absolute top-3 right-4 text-gray  text-[19px] cursor-pointer" />
                    </div>
                </div> */}
            </div>
            {/* end post */}



                    
                    













                </div>
    );
}

export default AllPosts;