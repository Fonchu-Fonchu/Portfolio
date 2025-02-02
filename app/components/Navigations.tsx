"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Service", href: "#service" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navigations() {
  const [activeTab, setActiveTab] = useState("ALL");
  return (
    <nav className="bg-transparent fixed bottom-0  w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:flex items-center space-x-8">
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className=" bg-transparent backdrop-blur-sm z-50 border-b rounded-full items-center"
            >
              <div className="container mx-auto px-4">
                <div className="flex justify-center items-center h-10">
                  <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveTab(item.name)}
                        className={`relative px-2 py-3 text-sm uppercase tracking-wider transition-colors
                  ${
                    activeTab === item.name
                      ? "text-primary font-semibold"
                      : "text-gray-800 dark:text-white hover:text-white"
                  }`}
                      >
                        {item.name}
                        {activeTab === item.name && (
                          <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
