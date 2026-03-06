import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Status from "./Components/Status/Status";
import Tickets from "./Components/Tickets/Tickets";
import { toast, ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => alert(err));
  }, []);

  const handleTicketClick = (ticket) => {
    // if(ticket.status === "in-progress") return;
    ticket.status = "in-progress"
    toast.success(`Ticket "${ticket.title}" progress started.`)
    setProgressCount(progressCount + 1);
    const newInProgressTickets = [...inProgressTickets, ticket];
    setInProgressTickets(newInProgressTickets);
  };

  const handleResolvedTickets = (id) => {
    setResolvedCount(resolvedCount + 1);
    setProgressCount(progressCount - 1);
    const newInProgressTickets = inProgressTickets.filter(
      (ticket) => ticket.id !== id,
    );
    setInProgressTickets(newInProgressTickets);

    const newResolvedTicket = tickets.find(ticket => ticket.id === id);
    // const newResolvedTickets = [...resolvedTickets, newResolvedTicket]
    setResolvedTickets([...resolvedTickets, newResolvedTicket]);

    toast.success(`Ticket "${newResolvedTicket.title}" is resolved successfully.` )

    const newTickets = tickets.filter(ticket => ticket.id !== id);
    setTickets(newTickets);
  };

  return (
    <>
      <Navbar />
      <main className="p-8 lg:p-18 bg-slate-100">
        <Banner resolvedCount={resolvedCount} progressCount={progressCount} />

        <section className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 pt-4 lg:pt-12">
          <section className="col-span-1 lg:col-span-3">
            <Tickets tickets={tickets} handleTicketClick={handleTicketClick} />
          </section>

          <section>
            <Status
              inProgressTickets={inProgressTickets}
              handleResolvedTickets={handleResolvedTickets}
              resolvedTickets={resolvedTickets}
            />
          </section>
        </section>
      </main>
      <Footer/>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
