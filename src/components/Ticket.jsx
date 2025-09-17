import React from "react";
import TicketTitle from "./TicketTitle";

const Ticket = ({ heading, subheading, name, email }) => {
  return (
    <div className="flex flex-col justify-center">
      <TicketTitle
        heading={`Congrats ${name}! Your ticket is ready`}
        subheading={`We've emailed your ticket to \n${email} and will send the updates in \n the run up to the event`}
      />

      <img 
        src="./assets/images/pattern-ticket.svg" 
        alt="ticket" 
        className="w-[60%]"
      />
    </div>
  );
};

export default Ticket;
