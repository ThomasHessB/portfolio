import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on web development to bring <br />
          the best visual and functionality.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/pc1.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Application.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>React.JS</h2>
          <p>
            As a React.js web developer, I excel in creating interactive,
            dynamic user interfaces for web applications, focusing on responsive
            design and efficient, maintainable code for top-notch single-page
            applications (SPAs). My passion for coding and design, coupled with
            a commitment to modern web technologies, enables me to deliver
            intuitive, user-centric solutions that keep pace with evolving
            digital trends.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>CSS3</h2>
          <p>
            I create visually stunning and responsive designs, utilizing
            advanced CSS3 techniques to ensure websites are both aesthetically
            pleasing and highly functional across various devices and platforms.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Libraries</h2>
          <p>
            As a web developer proficient in DaisyUI, I excel in crafting
            modern, visually appealing interfaces with this UI library, while my
            adaptability and eagerness to learn enable me to quickly master new
            libraries and technologies to meet diverse project needs.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Adobe Photoshop</h2>
          <p>
            As a web developer with proficiency in Photoshop, I skillfully blend
            design and development, creating visually compelling websites. My
            continuous learning journey in both design and coding is elevating
            my ability to deliver more innovative and integrated web solutions.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
