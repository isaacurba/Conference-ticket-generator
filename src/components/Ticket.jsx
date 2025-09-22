import React, { useEffect, useState, useMemo } from "react";
import Logo from "./Logo";
import TicketTitle from "./TicketTitle";

const Ticket = ({ avatar, name, email, userName }) => {
  const [city, setCity] = useState("Loading...");

  // Stable ticket ID (won’t change on re-renders)
  const ticketId = useMemo(() => "#" + Math.floor(Math.random() * 167786), []);

  function getDate() {
    const today = new Date();
    return today.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();

            const location =
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.state ||
              data.address.country ||
              "Global";

            setCity(location);
          } catch (err) {
            console.error("Error fetching location:", err);
            setCity("Global");
          }
        },
        () => setCity("Global")
      );
    } else {
      setCity("Global");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-12 sm:gap-16 min-h-screen">
      {/* Title Section */}
      <TicketTitle
        heading={`Congrats, ${name}! Your ticket is ready`}
        subheading={
          <>
            We've emailed your ticket to{" "}
            <span className="font-semibold bg-gradient-text">{email}</span>
            <br />
            and will send updates in the run up to the event
          </>
        }
      />

      {/* Ticket Image */}
      <div className="relative w-full max-w-md sm:max-w-xl lg:max-w-2xl mb-20 sm:mb-32 lg:mb-40 font-inconsolata">
        <img
          src="./assets/images/pattern-ticket.svg"
          alt="ticket background"
          className="w-full"
        />

        {/* Logo + Date + City */}
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 text-white">
          <Logo className="w-20 sm:w-28 lg:w-52" />
          <p className="text-xs sm:text-sm text-neutral-300 mt-3 sm:mt-5 ml-2">
            {getDate()} / {city === "Loading..." ? "Detecting..." : city}
          </p>
        </div>

        {/* Avatar + Name + GitHub */}
        <div className="flex gap-4 sm:gap-5 absolute bottom-6 sm:bottom-10 left-6 sm:left-10">
          <img
            src={avatar || "/assets/images/default-avatar.png"}
            alt={`${name}'s avatar`}
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg object-cover"
          />

          <div className="flex flex-col">
            <p className="text-lg sm:text-2xl text-neutral-100">{name}</p>
            <div className="flex items-center gap-2 text-neutral-400 mt-1">
              <img
                src="/assets/images/icon-github.svg"
                alt="GitHub"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="truncate text-sm sm:text-base lg:text-lg">
                {userName}
              </span>
            </div>
          </div>
        </div>

        {/* Ticket ID */}
        <div className="absolute right-2 sm:right-5 top-1/3 sm:top-2/4 rotate-90 text-lg sm:text-2xl lg:text-3xl text-neutral-500">
          <p>{ticketId}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
