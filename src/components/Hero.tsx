"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { MouseEventHandler } from "react";

/**
 * Hero section with animated heading, subtitle, and two call-to-action buttons.
 * Designed with Tailwind CSS best practices and performance in mind.
 */
export default function Hero() {
  return (
    <HeroSection
    
      title="Illuminate Your Life with Things That Bring Joy"
      subtitle="Discover items that inspire comfort, peace, and happiness in your daily life."
      backgroundImage="/hero.png"
      altImage=" light fot life"
    />
  );
}

/** HeroSection Props */
type HeroSectionProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  altImage?: string;
};

function HeroSection({ title, subtitle, backgroundImage ,altImage}: HeroSectionProps) {
  return (
    <main
      className="relative min-h-screen bg-[#fef6e4] flex items-center justify-start px-6 py-24 overflow-hidden"
    >
      <Image
        src={backgroundImage}
        alt={altImage}
        fill
        priority
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#fef6e4] via-[#fef6e4]/60 to-transparent z-10 backdrop-blur-sm md:backdrop-blur-none" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-2xl text-center md:text-left text-[#5e4033]"
      >
        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 drop-shadow-md">
          {title.split(" with ")[0]} <br />
          {title.split(" with ")[1]}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[#5e4033cc] md:text-[#0d0d0c] text-lg mb-8 font-semibold drop-shadow-md"
        >
          {subtitle}
        </motion.p>

        <div className="flex gap-4 mt-4 justify-center md:justify-start flex-wrap">
          <CTAButton text="Shop Now" primary onClick={() => alert("Shop Now clicked")} />
          <CTAButton text="Learn More" onClick={() => alert("Learn More clicked")} />
        </div>
      </motion.div>
    </main>
  );
}

/** Call-to-Action Button */
function CTAButton({
  text,
  primary = false,
  onClick,
}: {
  text: string;
  primary?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 font-medium
        ${primary
          ? "bg-[#e76f00] text-white hover:bg-[#e76f00]"
          : "border border-[#e76f00] text-[#e76f00] bg-white hover:bg-[#e76f00] hover:text-white"
        }`}
    >
      {text}
      <FiArrowRight className="text-lg" />
    </button>
  );
}
