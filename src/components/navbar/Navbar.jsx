import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thomas Dev
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/thomasalemao.wav/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://wa.me/5547996235145">
            <img src="/whatsapp.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
