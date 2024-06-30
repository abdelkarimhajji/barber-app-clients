import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu"


function Posts(){
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full lg:w-[70%] 2xl:w-[1000px] box-border relative ">
                <NavBar />
                
                <BottomMenu location="posts"/>
            </div>
        </div>
    );
}


export default Posts