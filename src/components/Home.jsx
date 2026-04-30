import { forwardRef } from "react";

const Home = forwardRef((props, ref) => (
    <div id="home" ref={ref} className="relative" style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <div className="pt-16 flex flex-col md:flex-row">
            <div className="text-center mt-4">
                <h1 className="text-2xl font-semibold text-gray-800">Omolola Sodiq 
                    <span className="text-[#FE6F01]"> Temitope</span>
                </h1>
                <h2 className="text-lg text-[#FE6F01] mb-2">Frontend & Mobile Developer</h2>
                <p className="text-[20px] text-gray-600 mb-1 px-6">Fast, responsive web and mobile interfaces built for <span className="text-black">Performance </span>and great UX.
                </p>
                <div className="flex justify-center space-x-4 w-full mt-6">
                    <button 
                      className="px-6 py-2 rounded-3xl bg-[#FE6F01] text-white transition  duration-500" 
                      onClick={props.onContact}
                    >
                        Hire Me
                    </button>
                    <button 
                       className="px-6 py-2 border border-[#FE6F01] text-[#FE6F01] rounded-3xl hover:bg-[#FE6F01] hover:text-white transition  duration-500" 
                       onClick={props.onViewWork}
                    >
                        View My Work
                    </button>
                </div>
            </div>
            <div className="order-first md:order-last">
                <div className="flex justify-center items-center mt-4">
                    <img src="human.png" alt="human" />
                </div>
                <div className="flex justify-center items-center mt-4 space-x-4 mt-[-10px]">
                    <p className="text-md text-[#FE6F01]">3+ Years exp</p>
                    <p className="text-md text-[#FE6F01]">30+ Projects</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center mt-4 space-x-12 bg-black py-4 text-white w-full rounded-tl-4xl rounded-tr-4xl fixed bottom-0 left-0 right-0">
            <div>
                <p>30+</p>
                <p>Projects</p>
            </div>
            <div>
                <p>3+</p>
                <p>Years</p>
            </div>
            <div>
                <p>100%</p>
                <p>Clients sat</p>
            </div>
        </div>
    </div>
));

export default Home;