import React from "react";

const patterns = [
  {
    src: "/assets/images/pattern-squiggly-line-top.svg",
    alt: "Mobile squiggly top",
    className: "absolute top-10 right-5 w-20 md:hidden z-10",
  },
  {
    src: "/assets/images/pattern-squiggly-line-top.svg",
    alt: "Desktop squiggly top",
    className: "absolute top-20 right-0 w-1/3 hidden md:block z-10",
  },
  {
    src: "/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg",
    alt: "Mobile squiggly bottom",
    className: "absolute bottom-0 left-0 w-full md:hidden z-10",
  },
  {
    src: "/assets/images/pattern-squiggly-line-bottom-desktop.svg",
    alt: "Desktop squiggly bottom",
    className: "absolute bottom-0 left-0 w-90 hidden md:block z-10",
  },
  {
    src: "/assets/images/pattern-lines.svg",
    alt: "Pattern lines",
    className:
      "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[100vw] lg:w-3/4 z-10",
  },
  {
    src: "/assets/images/pattern-circle.svg",
    alt: "Circle top-left",
    className: "absolute top-0 left-0 w-16 md:w-60 md:-top-10 md:-left-0 z-10",
  },
  {
    src: "/assets/images/pattern-circle.svg",
    alt: "Circle bottom-right",
    className:
      "absolute right-0 bottom-0 w-16 md:w-60 lg:right-60 md:bottom-40 z-10",
  },
];

const Background = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-neutral-900">
      {/* Background images */}
      <img
        src="/assets/images/background-mobile.png"
        alt="Mobile background"
        className="absolute inset-0 w-full h-full object-cover md:hidden z-0"
      />
      <img
        src="/assets/images/background-desktop.png"
        alt="Desktop background"
        className="absolute inset-0 w-full h-full object-cover hidden md:block z-0"
      />

      {/* Patterns */}
      {patterns.map((pattern, i) => (
        <img
          key={i}
          src={pattern.src}
          alt={pattern.alt}
          className={pattern.className}
        />
      ))}

      {/* Render children like Title and Form */}
      <div className="relative z-20 flex flex-col items-center justify-start min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Background;
