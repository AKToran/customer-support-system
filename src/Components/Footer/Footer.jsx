import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-black px-8 lg:px-18 pt-8 lg:pt-18">
      <footer className="footer sm:footer-horizontal bg-black text-gray-400 pb-8 lg:pb-12">
        <aside className="w-full md:w-80">
          <h2 className="text-xl lg:text-2xl text-white font-bold">
            CS — Ticket System
          </h2>
          <p>
            Customer support is the team of people who provide help when
            customers have trouble with a company's products or services. It's
            ultimately about making sure customers are successful in solving
            whatever issues they came to your business to help solve.
          </p>
        </aside>
        <nav>
          <h6 className="font-semibold text-lg text-white">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-lg text-white">Services</h6>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download App</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-lg text-white">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-lg text-white">Social Links</h6>
          <a className="link link-hover flex items-center gap-1">
            <FaFacebook className="text-white" /> @CS — Ticket System
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaTwitter className="text-white" />
            @CS — Ticket System
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaInstagram className="text-white" />
            @CS — Ticket System
          </a>
          <a className="link link-hover flex items-center gap-1">
            <IoMail className="text-white" />
            support@cst.com
          </a>
        </nav>
      </footer>
      <hr className="text-gray-600" />
      <footer className="footer sm:footer-horizontal footer-center bg-black text-white p-8">
        <aside>
          <p>
            © {new Date().getFullYear()} CS — Ticket System. All right reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
