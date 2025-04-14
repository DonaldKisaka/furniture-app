'use client';

import Image from "next/image";
import { about } from "@/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useMemo } from "react";

const Counter = ({ number }: { number: string }) => {
    const [count, setCount] = useState(0);
    const finalNumber = parseInt(number);
    
    const { ref, inView } = useInView({
      threshold: 0.3,
      triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
          const end = finalNumber;
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = Math.floor(progress * end);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
    }, [inView, finalNumber]);

    return <span ref={ref}>{count}+</span>;
};


const About = () => {
  const renderAboutLinks = useMemo(() => {
    return about.map((item) => (
      <motion.div
        key={item.number}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-4 p-6"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          <Counter number={item.number.replace("+", "")} />
        </h1>
        <p className="text-lg text-[#a3704f] font-medium">{item.text}</p>
      </motion.div>
    ));
  }, []);

  return (
    
      <section id="about" className="flex flex-col md:flex-row justify-between items-center gap-10 w-full max-w-6xl mx-auto p-6">
        <div className="flex flex-1 flex-col text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-[#a3704f] font-medium leading-relaxed sm:leading-loose mb-4 sm:mb-6">
            At RenoTzy, we are not just a home renovation team, but space creators who understand the uniqueness and importance of home to each individual. With years of experience in the industry, we have built a strong foundation in providing high-quality renovation services that combine innovation, expertise & attention to detail.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-between">
            {renderAboutLinks}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/about (2).jpg"
            loading="lazy"
            alt="kitchen"
            width={490}
            height={522}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    
  );
};

export default About;
