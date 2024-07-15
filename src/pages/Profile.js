

function Profile(){
    return (
        <div className="bg-login w-full  min-h-screen h-auto flex justify-center">
            <div className="bg-customBlue h-full min-h-screen w-full md:w-[100%] lg:w-[1000px] box-border relative ">
                <NavBar />
                
                <BottomMenu location="home"/>
            </div>
        </div>
    );
}