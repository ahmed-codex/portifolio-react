import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/5363190/pexels-photo-5363190.jpeg')] bg-cover bg-center w-full h-screen ">
      <div className="pt-16 flex items-center  md:justify-between justify-center px-5 md:px-20 h-screen  ">
        <div className="w-full md:w-3/4 flex flex-col gap-7">
          <h2 className="bg-linear-to-r/oklch from-slate-900 to-purple-950 text-white text-lg sm:text-xl md:text-2xl font-semibold md:font-bold tracking-wide capitalize w-fit md:py-4 md:px-4 py-2 px-2 border border-gray-400 ">
            Welcome all in my portifolio
          </h2>
          <h1 className="text-white text-3xl sm:text-4xl h-48 md:h-fit md:text-5xl capitalize font-extrabold tracking-wide leading-[1.4]">
            hi! i'm <br /> Ahmed<br /> Mohamed <br />Hassan,
            <span>
              <ReactTyped
                strings={["Web Devolper", "FrontEnd devolper", "React JS"]}
                typeSpeed={150}
                backSpeed={80}
                backDelay={500}
                loop
              />
            </span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg  capitalize tracking-wide">
            hello everyone i have 1 year of experience in web developement{" "}
          </p>
        </div>
        <div className="relative w-1/2 lg:flex items-center justify-center hidden ">
            <div className="">
                <img src="/11383061.png" className="w-120 h-120  object-contain animate-[spin_80s_linear_infinite]  drop-shadow-[0_0_20px_rgba(0,150,255,0.7)]" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
