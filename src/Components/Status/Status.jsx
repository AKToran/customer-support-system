import React from 'react';

const Status = () => {
  return (
    <div>
      <div>
        <h2 className='text-xl font-semibold'>Ticket Status</h2>
        <p>Select a ticket to add to Task Status</p>
      </div>

      <div>
        <h2 className='text-xl font-semibold'>Resolved Tickets</h2>
        <p>No tickets resolved yet.</p>
      </div>
    </div>
  );
};

export default Status;