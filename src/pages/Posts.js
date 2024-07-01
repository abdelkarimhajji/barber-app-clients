import NavBar from "../components/NavBar";
import BottomMenu from "../components/BottomMenu"


function Posts(){
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full lg:w-[70%] 2xl:w-[1000px] box-border relative ">
                <NavBar />
                <div className="mt-[163px] 324:mt-[165px] 480:mt-[200px]"></div>

                <div className="w-full flex items-center justify-center flex-col " >
                    <div className="sm:w-[600px] sm:h-[650px] w-[87%] h-[500px] mb-10 bg-login rounded-xl   " >
                        {/* start top of post */}
                        <div className="h-[70px] w-full bg-red-500 flex">
                            <div className="w-1/2 h-full bg-green-50">

                            </div>
                            <div className="w-1/2 h-full bg-green-200">

                            </div>
                        </div>
                        {/* end top of post */}
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