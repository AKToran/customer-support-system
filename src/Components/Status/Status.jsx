import React from 'react';

const Status = ({inProgressTickets, handleResolvedTickets, resolvedTickets}) => {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <h2 className='text-xl font-semibold mb-4'>Ticket Status</h2>
        {
          inProgressTickets.length === 0 ? <p>Select a ticket to add to Task Status</p> : 
            inProgressTickets.map(ticket=> {
              return(
              <div key={ticket.id} className='bg-white my-2 rounded-md p-3 w-full shadow-md'>
                <h3 className='text-md font-bold mb-2'>{ticket.title}</h3>
                <button onClick={()=>{
                  handleResolvedTickets(ticket.id)
                }} className='w-full btn bg-green-600  font-bold text-white'>Complete</button>
              </div>)
            })
          
        }
      </div>

      <div>
        <h2 className='text-xl font-semibold my-4'>Resolved Tickets</h2>
        {
          resolvedTickets.length === 0 ? <p>No tickets resolved yet.</p> : 
            resolvedTickets.map(ticket=> {
              return(
              <div key={ticket.id} className='bg-gray-200 my-2 rounded-md p-3 shadow-sm'>
                <h3 className='text-md font-bold mb-2'>{ticket.title}</h3>
              </div>)
            })
          
        }
      </div>
    </div>
  );
};

export default Status;