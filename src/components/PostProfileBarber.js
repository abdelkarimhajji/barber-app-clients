import {useEffect, useRef} from 'react';
import PostsBarber from "../components/PostsBarber";
import beard from '../imgs/beard.jpg';
function PostProfileBarber(){
const movableDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        console.log("Current scroll position:", window.pageYOffset);
        console.log("Current window width:", window.innerWidth); // Log the window width
        if(window.pageYOffset >= 910 && window.innerWidth > 800)
            movableDivRef.current.style.top = `${window.pageYOffset - 910}px`;
        if(window.innerWidth < 800)
            movableDivRef.current.style.top = `0px`;
        else if(window.pageYOffset < 930)
            movableDivRef.current.style.top = `0px`;
    };

    // Add the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="800:flex w-full relative justify-center 499:px-9  px-3">
            <div ref={movableDivRef} className="800:w-[40%]  h-[450px] relative  w-full rounded-xl ">
                <div className='mb-3 px-4 py-2.5 bg-login rounded-xl '>
                    <p className='text-white font-bold text-xl'>Photos</p>
                </div>
                <div className='grid grid-cols-2 gap-4 w-full justify-around bg-login p-4 rounded-xl'>
                    <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'><img src={beard} alt="" className='w-full h-full object-cover rounded-xl' /></div>
                    <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'><img src={beard} alt="" className='w-full h-full object-cover rounded-xl' /></div>
                    {/* Uncomment if you want more divs */}
                    <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'><img src={beard} alt="" className='w-full h-full object-cover rounded-xl' /></div>
                    <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'><img src={beard} alt="" className='w-full h-full object-cover rounded-xl' /></div>
                    {/* <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'></div>
                    <div className='w-[100%] h-[160px] bg-green-800 rounded-xl'></div> */}
                </div>
            </div>
            <div className="800:w-[57%] w-full flex flex-col 800:items-end ">
                <div className='mb-3 px-4 py-2.5 bg-login rounded-xl 800:w-[90%] w-full'>
                    <p className='text-white font-bold text-xl'>Posts</p>
                </div>
                <PostsBarber/>
                <PostsBarber/>
            </div>
        </div>
    );
}
export default PostProfileBarber;