import React from "react";
import { GoDotFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";

const Ticket = ({ ticket }) => {
  return (
    <div className="bg-white p-3 rounded-md flex flex-col justify-between gap-1 cursor-pointer shadow-xl">
      <div className="flex justify-between gap-2">
        <h3 className="font-bold">{ticket.title}</h3>
        <div>
          {ticket.status === "open" ? (
            <div className="bg-green-400/60 pe-2 rounded-xl flex items-center gap-0.5 font-semibold">
              <GoDotFill className="text-green-700 text-2xl" /> Open
            </div>
          ) : (
            <div className="bg-yellow-400/60 pe-2 rounded-xl flex items-center gap-0.5 font-semibold">
              <GoDotFill className="text-yellow-500 text-2xl" /> In-Progress
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-700">{ticket.description}</p>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 lg:gap-4">
          <p>#{ticket.id}</p>
          <p>
            {
            ticket.priority === "high"? <span className="text-amber-500 font-semibold">HIGH</span> : ticket.priority === "urgent"? <span className="text-red-500 font-semibold">URGENT</span> : <span className="text-green-400 font-semibold">MEDIUM</span>
          }
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p>{ticket.customer}</p>
          <p className="flex items-center gap-1">
            <SlCalender /> {ticket.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
