import {useState , useRef, useEffect} from 'react';
import beard from '../imgs/beard.jpg';
// import image from '../imgs/images1.jpeg';
// import image2 from '../imgs/image2.jpg';
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import styles from "../styles/App.module.css";

function AllPosts(){

    const [openCommit, setOpenCommit] = useState(false);
    const elementRef = useRef(null);
    const [displayMore, setDisplayMore] = useState(false);
    const text2 = "hi this is my first post hello first post hello first post hellofirst post hello    !!! hi this is my first post hello !!!hi this is my first";
    const [text, setText] = useState("")

    useEffect(() => {
        if (text2.length > 46) {
            setDisplayMore(false)
            setText(text2.slice(0, 46) + "...\b");
        }
    }, []); 



    function clickComment()
    {
        setOpenCommit(true);
    }

    function closeWindowComment()
    {
        setOpenCommit(false);
    }
    return (
        <>
        
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
                <div className="text-gray mb-3 px-6"><p ref={elementRef}>{  displayMore === true ? text2 :<> {text}<span onClick={() => setDisplayMore(true)} className='cursor-pointer text-green-700 hover:text-green-900 transition-all'> More</span></> }</p></div>
                <div className={`px-5 w-full  max-h-[500px] mb-5 flex justify-center `}>                
                    <img
                        src={beard} 
                        alt="barber"
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
                    <div onClick={clickComment} className="flex items-center justify-center  py-2 cursor-pointer rounded-xl text-gray w-1/2 transition-all hover:bg-customBlue">
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
                


                
            <div className={` ${openCommit ? "block" : "hidden"} bg-login fixed top-0 left-0 w-full  h-screen overflow-y-scroll flex flex-col items-center justify-center bg-transparent2 z-50 `}>
                
                    <div className='sm:w-[600px] w-[90%]  sm:h-[700px] h-[630px] sm:pt-0   mb-3 rounded-xl'>

                        <div className="bg-login px-5  sm:w-[600px]  w-[100%] h-[60px] flex justify-center items-center relative rounded-t-xl">
                            <div className='text-white font-bold sm:text-xl text-md'>the title of the post</div>
                            <div onClick={closeWindowComment} className='cursor-pointer w-6.5 h-6.5 rounded-full hover:bg-gray hover:text-black text-white absolute right-5 top-5 transition-all'><IoClose className=' text-2xl'/></div>
                        </div>

                        <div className={`sm:w-[600px] w-[100%] bg-login sm:h-[700px] h-[500px] overflow-y-scroll   ${styles.hideScrollbar}`}>
                        
                            <div className="h-[70px] w-full  flex mb-3">
                                <div className="w-full h-full  flex items-center px-2">
                                    <img src={beard} alt="" className="h-[50px] w-[50px] object-cover rounded-full"/>
                                    <div className="ml-2 text-white">
                                        <p className="font-bold sm:text-base text-sm ">Abdelkarim hajji</p>
                                        <p className="text-[10px] text-gray">3 days a go</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-gray mb-3 px-6 sm:text-base text-sm"><p>hi this is my first post hello !!! hi this is my first post hello !!!hi this is my first </p></div>
                            <div className={`px-5 w-full  max-h-[500px] mb-5 flex justify-center `}>                
                                <img 
                                    src={beard} 
                                    alt="barber" 
                                    className="rounded-xl object-contain w-full h-full max-h-[500px] "
                                />
                            </div>

                            <div className="px-6 mb-3 flex">
                                <div className="flex items-center justify-start w-1/2 md:text-[15.5px] text-[13.5px]">
                                    <FaHeart className=" cursor-pointer text-red-800"/>
                                    <p className="text-white ml-2">30.000</p>
                                </div>
                                <div className="flex items-center justify-end w-1/2 md:text-[15.5px] text-[13.5px]">
                                    <p className="text-white">193 comments</p>
                                </div>
                            </div>

                            <div className="text-white sm:px-[70px] px-6 flex mb-5 sm:text-[17.5px] text-[15px]">
                                <div className="flex items-center justify-center text-gray w-1/2 rounded-xl cursor-pointer transition-all hover:bg-customBlue">
                                    <FaHeart className=" cursor-pointer"/>
                                    <p className="ml-2">Like</p>
                                </div>
                                <div onClick={clickComment} className="flex items-center justify-center  py-2 cursor-pointer rounded-xl text-gray w-1/2 transition-all hover:bg-customBlue">
                                    <FaComment className=" cursor-pointer"/>
                                    <p className="ml-2">Comment</p>
                                </div>
                            </div>

                                

                            <div className='text-white  min-h-[200px] sm:px-6 px-3 '>


                                <div className='flex  w-full min-h-[50px] mb-10 sm:text-md text-sm  '>
                                   
                                    <div className='sm:w-auto w-[37px]   flex flex-col '>
                                        <div className='sm:h-[50px] bg-red-100 flex justify center '>
                                            <img src={beard} alt="barber" className='sm:w-[50px] sm:h-[50px] w-[37px] h-[37px] object-cover rounded-full' />
                                        </div>
                                        <div className=' h-[100%] relative '>
                                            <div className='absolute w-9 h-[100%] sm:left-[25px] left-[19px] rounded-bl-xl border-l-2 border-b-2 border-network z-10'></div>
                                        </div>
                                        
                                    </div>

                                    <div className='sm:w-[70%] w-[90%] ml-3 mt-3 '>
                                        <div className='w-[100%]  text-white flex items-center sm:pl-3 sm:py-3 py-2 px-2 bg-searchBar rounded-xl relative'>
                                            <p>this is my comment ok bro this is my comment ok bro
                                            this is my comment ok brothis is my comment ok brothis is my comment ok bro
                                            this is my comment ok brothis is my comment ok brothis is my comment ok bro ok  
                                            </p>
                                            <div className='absolute right-0 bottom-[-15px] bg-customBlue min-w-10 rounded-xl p-1  flex justify-center  '>
                                                <FaHeart className=" cursor-pointer text-red-800"/>
                                                <p className='text-[10px]'>+20K</p>
                                            </div>
                                        </div>
                                        <div className='flex px-3 text-gray sm:pt-1 sm:text-sm text-[12px] mb-3'>
                                            <p>22d </p>
                                            <p className='ml-4 cursor-pointer hover:underline' >Like</p>
                                            <p className='ml-4 cursor-pointer hover:underline'>Reply</p> 
                                        </div>
                                        <div className=" relative mb-10 h-[200px]">
                                        <div className="relative mb-10 h-[200px]">
                                            {/* <div className='bg-red-500 w-full z-50'> */}
                                                <p className='z-50'>see all reply</p>
                                            {/* </div> */}
                                            <div className='absolute sm:h-5 sm:w-9 h-5 w-[30px] border-l-2 border-b-2 border-network rounded-bl-xl top-[-5px] sm:left-[-37px] left-[-30px] z-10'></div>
                                        </div>
                                        </div>
                                       <div className='h-[60px] w-full  flex items-end  justify-end pr-3 pt-2 relative z-10'>
                                            <input type="text" placeholder='Write a comment ...' className='w-full h-9 rounded-xl bg-searchBar pl-5 absolute top-[40px] left-0 ' />
                                            <IoSend className="absolute top-12 right-4 text-gray  text-[19px] cursor-pointer" />
                                       </div>
                                    </div>
                                    
                                </div>






                                <div className='flex  w-full min-h-[50px] mb-5 sm:text-md text-sm'>
                                    <div className='w-auto min-h-[50px]'><img src={beard} alt='barber' className='sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] object-cover rounded-full' /></div>
                                    <div className='w-[70%] ml-5 text-white flex items-center sm:pl-3 sm:py-3 py-2 px-2 bg-searchBar rounded-xl'>
                                        <p>this is my comment ok bro this is my comment ok bro
                                        this is my comment ok brothis is my comment ok brothis is my comment ok bro
                                        this is my comment ok brothis is my comment ok brothis is my comment ok bro
                                        </p>
                                    </div>
                                </div>
                                <div className='flex  w-full min-h-[50px] mb-5 sm:text-md text-sm'>
                                    <div className='w-auto min-h-[50px]'><img src={beard} alt='barber' className='sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] object-cover rounded-full' /></div>
                                    <div className='w-[70%] ml-5 text-white flex items-center sm:pl-3 sm:py-3 py-2 px-2 bg-searchBar rounded-xl'>
                                        <p>this is my comment ok bro this is my comment ok bro
                                        this is my comment ok brothis is my comment ok brothis is my comment ok bro
                                        this is my comment ok brothis is my comment ok brothis is my comment ok bro
                                        </p>
                                    </div>
                                </div>
                            
                            </div>

                        </div>
                    

                        <div className="bg-login px-5 mb-6 sm:w-[600px]  w-[100%] h-[80px] flex justify-center items-center rounded-b-xl ">
                            <div className="relative w-full  h-[80px] flex justify-center items-center">
                                <input type="text" placeholder="Write a comment ... " className="w-full h-[40px] text-white rounded-xl bg-searchBar box-border pl-5" />
                                <IoSend className="absolute top-8 right-4 text-gray  text-[19px] cursor-pointer" />
                            </div>
                        </div>
                        <div className='sm:h-[40px] h-[0px] '>

                        </div>
                    </div>
                

            </div>
            </>
    );
}

export default AllPosts;