import { motion } from "framer-motion";
import React from "react";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
    
  return (
    <section className="h-screen bg-gradient-to-b text-8xl from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden ">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-4xl md:text-[200px] font-bold text-white leading-tight"
        >
          BUILDING FAST
          
         
          
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="md:text-6xl text-6xl font-bold text-white leading-tight"
        >
          
          
          RELIABLE SOLUTION
          <span className="inline-block animate-bounce text-violet-900">
            
            S
          </span>
        </motion.h1>
  

<motion.p
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
    delay: 0.2,
  }}
  viewport={{ once: true }}
  className="
    mt-6
    text-xl
    text-white
    
    w-1/2
    leading-relaxed
  "
>
  I build beautiful, fast, and reliable websites using modern technologies,
  clean UI principles, and smooth animations to create engaging and
  user-friendly digital experiences.
</motion.p>

      </div>
       <Spline className="h-24" scene="https://prod.spline.design/etGqKJytizTd6zEs/scene.splinecode" />
    </section>
  );
};

export default HeroSection;
