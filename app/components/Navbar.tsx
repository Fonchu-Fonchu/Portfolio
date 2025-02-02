// // 'use client'; // Mark this as a Client Component

// // import { useState } from 'react';
// // import Link from 'next/link';

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50">
// //       <div className="container mx-auto flex justify-between max-w-screen-xlfd items-center">
// //         {/* Logo */}
// //         <div className="text-xl font-bold">My Portfolio</div>

// //         {/* Hamburger Menu (Mobile) */}
// //         <button
// //           className="md:hidden text-white focus:outline-none"
// //           onClick={toggleMenu}
// //         >
// //           <svg
// //             className="w-6 h-6"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             {isOpen ? (
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M6 18L18 6M6 6l12 12"
// //               />
// //             ) : (
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M4 6h16M4 12h16m-7 6h7"
// //               />
// //             )}
// //           </svg>
// //         </button>

// //         {/* Desktop Menu */}
// //         <ul className="hidden md:flex space-x-4">
// //           <li>
// //             <Link href="#about" className="hover:text-gray-400">
// //               About
// //             </Link>
// //           </li>
// //           <li>
// //             <Link href="#projects" className="hover:text-gray-400">
// //               Projects
// //             </Link>
// //           </li>
// //           <li>
// //             <Link href="#contact" className="hover:text-gray-400">
// //               Contact
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div
// //         className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 transition-all duration-300 ease-in-out`}
// //       >
// //         <ul className="flex flex-col space-y-2">
// //           <li>
// //             <Link href="#about" className="block hover:text-gray-400" onClick={toggleMenu}>
// //               About
// //             </Link>
// //           </li>
// //           <li>
// //             <Link href="#projects" className="block hover:text-gray-400" onClick={toggleMenu}>
// //               Projects
// //             </Link>
// //           </li>
// //           <li>
// //             <Link href="#contact" className="block hover:text-gray-400" onClick={toggleMenu}>
// //               Contact
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }

// // components/Navbar.tsx
// 'use client';
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function Navbar() {
//   const [activeTab, setActiveTab] = useState('ALL');
//   const categories = ['ALL', 'DESIGN', 'PHOTO', 'VIDEO'];

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-center items-center h-16">
//           <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveTab(category)}
//                 className={`relative px-2 py-4 text-sm uppercase tracking-wider transition-colors
//                   ${
//                     activeTab === category
//                       ? 'text-black font-semibold'
//                       : 'text-gray-500 hover:text-gray-700'
//                   }`}
//               >
//                 {category}
//                 {activeTab === category && (
//                   <motion.div
//                     layoutId="underline"
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
//                     transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

// components/Navbar.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "react-feather";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Service", href: "#service" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];
// const categories = ["ALL", "DESIGN", "PHOTO", "VIDEO"];

export default function Navbar() {
  // const [activeTab, setActiveTab] = useState("ALL");
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-transparent z-50 backdrop-blur-sm fixed top-0 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary dark:text-accent"
          >
            foven
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
              >
                {item.name}
                
              </Link>
            ))} */}
            {/* <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className=" bg-white/90 backdrop-blur-sm z-50 border-b rounded-full items-center"
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
                      ? "text-black font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                        // className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
                      >
                        {item.name}
                        {activeTab === item.name && (
                          <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
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
            </motion.nav> */}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary dark:text-accent" />
              ) : (
                <Menu className="w-6 h-6 text-primary dark:text-accent" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden pb-4"
          >
            <div className="px-2 pt-2 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
