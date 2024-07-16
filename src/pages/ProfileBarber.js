import {useEffect} from 'react';
import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu";
import BgProfileBarber from "../components/BgProfileBarber";
import InfoBarber from "../components/InfoBarber";
import PostProfileBarber from "../components/PostProfileBarber";

function ProfileBarber(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
    <div className="bg-login w-full min-h-screen h-auto flex justify-center overflow-y-auto">
        <div className="bg-customBlue h-full min-h-screen flex flex-col items-center w-full md:w-[100%] lg:w-[1000px] box-border relative">
            <NavBar />
            <BgProfileBarber />
            <InfoBarber />
            <PostProfileBarber />
            <BottomMenu location="posts" />
            <div className='mb-[120px]'></div>
        </div>
    </div>

    );
}

export default ProfileBarber;