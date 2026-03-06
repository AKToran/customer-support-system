import React from 'react';
import Ticket from './Ticket';

const Tickets = ({tickets, handleTicketClick}) => {
  return (
    <div>
      <h2 className='text-xl font-semibold mb-4'>Customer Tickets</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4'>
        {
          tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} handleTicketClick={handleTicketClick}/>)
        }
      </div>
    </div>
  );
};

export default Tickets;