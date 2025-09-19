import React from "react";
import Logo from "./Logo";

const Title = () => {
  return (
    <section className="w-full px-4 py-8">
      <div className="m-auto text-center text-neutral-0 font-inconsolata">
        {/* OFICIAL LOGO */}
        <div className="mb-16">
          <Logo />
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 w-10/12 m-auto capitalize lg:w-[70%] lg:font-extrabold bg-gradient-text bg-clip-text text-transparent">
            Your Journey to Coding Conf 2025 Starts Here!
          </h2>
          <p className="text-neutral-300 mt-2 text-lg lg:w-full w-9/12 m-auto font-medium">
            Secure your spot at next year's biggest coding conference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Title;
