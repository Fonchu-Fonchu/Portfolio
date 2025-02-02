"use client";

import { useState, useEffect } from "react";

export default function Resume() {
    const [count, setCount] = useState(0);

    useEffect(() => {
    if (count >= 10) return;
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : 0));
      }, 50);
      
      return () => clearInterval(interval);
    }, [count]);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 my-12">

        <div className=" bg-[url(/fonchud.jpg)] flex justify-center items-center text-black dark:text-white">
            Image here
        </div>
        <div>
            <p className="text-primary text-xl font-bold">Hi! I&apos;m</p>
            <div className="flex flex-col">
                <h2 className="text-black z-20 dark:text-white text-4xl lg:text-6xl font-extrabold">Venyuy Fonchu, <br /> <span className="text-2xl lg:text-4xl">Software Developer</span></h2>
                <p className="text-xl lg:text-3xl text-black dark:text-white">Based in Douala, Cameroon</p>
                <p className="absolute h-[70px] w-[70px] bg-primary rounded-full mt-3"></p>
            </div>

            <div className="my-5">
                <p className="font-semibold text-black dark:text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium vel cumque eos nobis magni, omnis cupiditate consequuntur alias nam, id numquam minima, similique maxime? Odit earum reiciendis aut expedita quis odio ab cum at minima. Mollitia impedit dolore dolorem voluptates officiis, voluptate cupiditate facere atque asperiores non, ratione id pariatur!</p>
            </div>

            <div className="flex justify-start gap-12 mt-7">
                <div>
                    <p className="text-3xl font-bold text-primary">{count}</p>
                    <p className="text-black dark:text-white font-semibold">clients saved</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-primary">{count}</p>
                    <p className="text-black dark:text-white font-semibold">clients saved</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-primary">{count}</p>
                    <p className="text-black dark:text-white font-semibold">clients saved</p>
                </div>
            </div>
        </div>
        
    </div>
  );
}
