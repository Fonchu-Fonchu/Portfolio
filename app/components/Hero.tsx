// // "use client"
// // import { useEffect, useState } from 'react';

// // export default function Hero() {
// //   const [randomNumber, setRandomNumber] = useState<number | null>(null);

// //   useEffect(() => {
// //     setRandomNumber(Math.random()); // ✅ Only runs on the client
// //   }, []);

// //   return (
// //     <section id="hero" className="h-screen flex items-center justify-center bg-gray-800">
// //       <div className="text-center">
// //         <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
// //         <p className="text-xl mb-8">Random Number: {randomNumber}</p>
// //       </div>
// //     </section>
// //   );
// // }

// // components/Hero.tsx
// 'use client';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <section className="min-h-screen relative pt-24 pb-32 px-6 md:px-12">
//       {/* Top Labels */}
//       <div className="fixed top-6 left-6 right-6 flex justify-between text-lg">
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="font-medium"
//         >
//           PEREZ
//         </motion.span>
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="underline underline-offset-4"
//         >
//           <Link href="#contact">Let's Talk 71</Link>
//         </motion.span>
//       </div>

//       {/* Main Content */}
//       <div className="h-full flex flex-col items-center justify-center text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="space-y-8"
//         >
//           <h1 className="text-5xl md:text-7xl font-light tracking-tight">
//             <span className="block">Hello, I'm</span>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="block mt-4"
//             >
//               <span className="font-bold">Mark</span>
//               <span className="ml-4 font-thin">Henry</span>
//             </motion.span>
//           </h1>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-xl md:text-2xl font-light text-gray-500"
//           >
//             Product Designer | Based in Germany
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Bottom Buttons */}
//       <div className="fixed bottom-6 left-6 right-6 flex justify-between text-lg">
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="underline underline-offset-4"
//         >
//           <Link href="#contact">Let's Talk 71</Link>
//         </motion.span>
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="underline underline-offset-4"
//         >
//           <Link href="#work">My Work 71</Link>
//         </motion.span>
//       </div>
//     </section>
//   );
// }

// // components/Hero.tsx
// 'use client';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="bg-gray-50 dark:bg-black">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl mx-auto h-[400px] flex flex-col items-center"
//         >
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             // transition={{ delay: 0.5 }}
//             transition={{
//               default: { ease: [0, 0.71, 0.2, 1.01] },
//               layout: { duration: 0.3 }
//             }}
//             className="text-4xl text-center sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 "
//           >
//             Hello I'M A <span className="text-primary dark:text-accent">UI & UX Designer.</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//             className="text-lg md:text-xl text-left text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
//           >
//             Hi I'm Noyem Mir, a passionate UI/UX designer based in Bangladesh, 
//             Welcome to portfolio world.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="flex justify-center space-x-4"
//           >
//             <button className="bg-primary dark:bg-accent text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary">
//               View Portfolio
//             </button>
//             <button className="border-2 border-primary dark:border-accent text-primary dark:text-accent px-8 py-2 rounded-full hover:bg-opacity-100 transition hover:text-white hover:bg-primary hover:border-0">
//               Contact Me
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* <div className='flex items-center mx-auto'>
//         <div className='h h-[200px] w-[200px] rounded-full bg-primary'>
//           {/* <motion.img
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//             translate={{ x: 0, y: -20 }}
//             ></motion.img> *
//         </div>
//         <div className='h h-[200px] w-[200px] rounded-full bg-primary ml-20'>
//           {/* <motion.img
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//             translate={{ x: 0, y: -20 }}
//             ></motion.img> *
//         </div>
//       </div> */}
//     </section>
//   );
// }


// components/Hero.tsx
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl  text-centerk"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="text-left">Hello! </span><br/> I'M A <span className="text-primary">Software Developer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Lorem, ipsum dolor.<br />
            Welcome to portfolio world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-start space-x-4"
          >
            <button className="border-2 hover:bg-primary hover:text-white hover:border-none border-primary dark:border-primary text-primary dark:text-accent px-8 py-3 rounded-full hover:bg-opacity-90 transition hover:dark:text-black">
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}