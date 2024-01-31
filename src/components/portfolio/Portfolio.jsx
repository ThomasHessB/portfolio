import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "3D Product Landing Page",
    img: "/3dproductpage.png",
    desc: "Product Landing Page with 3D features and animations with Framer-Motion and DaisyUI Component Library.",
    href: "https://thomas-3d.netlify.app/",
  },
  {
    id: 2,
    title: "Animated Product Page",
    img: "/animatedproductpage.png",
    desc: "Animated Product Page with animations using Framer-Motion and DaisyUI Component Library.",
    href: "https://thomasproductpage.netlify.app/",
  },
  {
    id: 3,
    title: "Giphy Clone with API",
    img: "/giphyclone.png",
    desc: "Basic Giphy website clone using the Giphy API and DaisyUI Component Library.",
    href: "https://giphyclonealemao.netlify.app/",
  },
  {
    id: 4,
    title: "Dentist Landing Page",
    img: "/dentistpage.png",
    desc: "Dentist Landing Page Using DaisyUI Component Library and TailwindCSS.",
    href: "https://drgabrieltomio.netlify.app/",
  },
];

const openLink = (url) => {
  window.open(url, "_blank");
};

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => openLink(item.href)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
