import React from "react";
import TicketTitle from "./TicketTitle";

const Ticket = ({ heading, subheading, name, email }) => {
  return (
    <div className="flex border border-solid flex-col justify-center items-center">
      <TicketTitle
        heading={`Congrats ${name}! Your ticket is ready`}
        subheading={`We've emailed your ticket to \n${email} and will send the updates in \n the run up to the event`}
      />

      <div className="relative ">
        <img
          src="./assets/images/pattern-ticket.svg"
          alt="ticket"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Ticket;
