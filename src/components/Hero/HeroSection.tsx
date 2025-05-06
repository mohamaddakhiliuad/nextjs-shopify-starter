"use client";

import HeroSection from "./HeroSection";

export default function Hero() {
  return (
    <HeroSection
      headline="Illuminate Your Life"
      subHeadline="with Things That Bring Joy"
      subtitle="Discover items that inspire comfort, peace, and happiness in your daily life."
      backgroundImage="/hero.png"
      onShopClick={() => alert("Shop Now clicked")}
      onLearnMoreClick={() => alert("Learn More clicked")}
    />
  );
}
