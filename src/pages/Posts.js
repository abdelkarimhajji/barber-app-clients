import {useEffect} from "react";
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import AllPosts from "../components/AllPosts";

function Posts(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full flex flex-col items-center min-h-screen w-full lg:w-[70%] 2xl:w-[1000px] box-border relative ">
                <NavBar />
                <div className="mt-[163px] 324:mt-[165px] 480:mt-[200px]"></div>
                <AllPosts/>
                <BottomMenu location="posts"/>
                <div className='mb-[120px]'>

                </div>
            </div>
        </div>
    );
}


export default Posts