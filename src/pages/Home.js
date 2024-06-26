import NavBar from "../components/NavBar";

function Home(){
    return(
        <div className="bg-login w-full  h-[2000px] flex justify-center">
            <div className="bg-customBlue h-full w-full lg:w-1/2 2xl:w-[800px] box-border">
                <NavBar />
                <div className="w-full h-auto overflow-y-scroll text-white">
                    eeeee
                </div>
            </div>
        </div>
    );
}

export default Home;