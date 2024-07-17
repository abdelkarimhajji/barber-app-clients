import {useEffect} from "react";    
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";

function Profile(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full md:w-[100%] lg:w-[1000px] box-border relative ">
                <NavBar profile="profile"/>
                
                <BottomMenu location="profile"/>
            </div>
        </div>
    );
}

export default Profile;