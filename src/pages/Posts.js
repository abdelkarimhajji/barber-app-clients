import {useEffect} from "react";
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import AllPosts from "../components/AllPosts";

function Posts(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center overflow-hidden">
            <div className="bg-customBlue h-full flex flex-col items-center min-h-screen w-full md:w-[100%] lg:w-[1000px] box-border relative  overflow-hidden">
                <NavBar />
                <AllPosts/>
                
                <BottomMenu location="posts"/>
                <div className='mb-[120px]'>

                </div>
            </div>
        </div>
    );
}


export default Posts