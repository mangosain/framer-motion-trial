"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const gridItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const svgVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 211, 77, 1)",
  },
};

export default function Home() {
  const { scrollYProgress: completionProgress } = useScroll();

  const containerRef = useRef(null);

  const inView = useInView(containerRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    } else {
      mainControls.start("invisible");
    }
  }, [inView]);

  return (
    <main className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* Fade in */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="w-20 h-20 bg-stone-100 rounded-lg"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
            className="w-20 h-20 bg-stone-100 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Shape shifting */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 shadow-md bg-rose-400"
            animate={{
              scale: [1, 2, 1, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
        </motion.div>

        {/* Button hover */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              color: "black",
              backgroundColor: "#d1d5db",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-semibold tracking-wide"
          >
            Hover me
          </motion.button>
        </motion.div>

        {/* Drag & drop */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            drag
            dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grabbing"
          ></motion.div>
        </motion.div>

        {/* Scroll Progess Indicator */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              style={{ scaleY: completionProgress }}
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
            />
          </motion.div>
        </motion.div>

        {/* Animate SVG */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>

      <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
        <motion.h1
          className="text-5xl tracking-wide text-slate-100 text-center"
          animate={mainControls}
          initial="invisible"
          variants={{
            invisible: { opacity: 0, y: -60 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        >
          Keep Scrolling
        </motion.h1>
        <p className="text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et
          praesentium vel quo, asperiores placeat illum quos optio. Vero non
          saepe consequatur, corporis nemo voluptatem quisquam temporibus
          veritatis. Velit impedit doloribus, eveniet, vero exercitationem omnis
          quia tempore eum in ratione ab veritatis. Consequuntur rerum id
          dignissimos quasi commodi aperiam nisi.
        </p>
        <p className="text-slate-100 font-thin text-4xl w-1/2 mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          nihil magnam distinctio eligendi dolorem quam molestias similique
          adipisci praesentium sed saepe odit sint velit esse voluptatibus
          impedit, dolor enim ipsam?
        </p>
      </section>
    </main>
  );
}
