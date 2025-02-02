"use client";
import { motion } from "framer-motion";
import SpecialityCard from "./SpecialityCard";

export default function Specialities() {
  const specialities: [
    { key: string; title: string; description: string },
    { key: string; title: string; description: string },
    { key: string; title: string; description: string }
  ] = [
    {
      key: "fast",
      title: "Fast Transaction",
      description: "Provides faster transaction in realtime",
    },
    {
      key: "secure",
      title: "Secure",
      description: "Provides faster transaction in realtime",
    },
    {
      key: "reliable",
      title: "Reliable",
      description: "Provides faster transaction in realtime",
    },
  ];
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary">services</p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="items-center flex flex-col lg:flex-row justify-between mb-7"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl z-20 md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          My Specialities
        </motion.h3>
        <p className="absolute h-[50px] w-[50px] bg-primary rounded-full"></p>
        <p className="text-black w-[50%] dark:text-white font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga minima et dolor ea. Repellendus beatae corrupti consequuntur quaerat modi.</p>
      </motion.div>
      <div className="flex gap-4 justify-cente container flex-col lg:flex-row">
        <div>
          <div>
            <div className="flex gap-4 flex-col sm:flex-row">
              {specialities.map((speciality) => {
                return (
                  <SpecialityCard
                    key={speciality.key}
                    title={speciality.title}
                    description={speciality.description}
                  />
                );
              })}
            </div>
            <div className="flex gap-4 mt-4 flex-col sm:flex-row">
              {specialities.map((speciality) => {
                return (
                  <SpecialityCard
                    key={speciality.key}
                    title={speciality.title}
                    description={speciality.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[100%] sm:w-[30%] border bg-gray-500 rounded-2xl"></div>
      </div>
    </div>
  );
}
