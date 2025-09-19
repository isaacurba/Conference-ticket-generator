import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import TicketTitle from "./TicketTitle";

const Ticket = ({ avatar, name, email, userName }) => {
  const [city, setCity] = useState("Loading...");

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

            // Try multiple possible fields
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
        (error) => {
          console.warn("Geolocation error:", error);
          setCity("Global"); // fallback if denied
        }
      );
    } else {
      setCity("Global"); // fallback if geolocation not supported
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-16 min-h-screen">
      {/* Title Section */}
      <TicketTitle
        heading={`Congrats, ${name}! Your ticket is ready`}
        subheading={`We've emailed your ticket to \n${email} and will send the updates in \n the run up to the event`}
      />

      {/* Ticket Image */}
      <div className="relative w-4/5 lg:max-w-2xl mb-40 font-inconsolata">
        <img
          src="./assets/images/pattern-ticket.svg"
          alt="ticket"
          className="w-full"
        />

        <div className="absolute top-10 left-10 text-white">
          <Logo />
          <p className="text-sm text-neutral-300 mt-5 ml-10">
            {getDate()} / {city}
          </p>
        </div>

        <div className="flex gap-5 absolute bottom-10 left-10">
          <div>
            <img
              src={avatar}
              alt={`${name}'s avatar`}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-2xl text-neutral-100">{name}</p>

            <div className="flex items-center gap-2 text-neutral-400 mt-1">
              <img
                src="/assets/images/icon-github.svg"
                alt="GitHub"
                className="w-5 h-5"
              />
              <span className="truncate text-xl">{userName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
