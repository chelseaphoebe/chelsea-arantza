import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/custom.css";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
  }, []);

  const highlightVariantsIn = {
    rest: { width: 0 },
    hover: { width: "100%" },
  };

  const highlightVariantsOut = {
    rest: { width: "100%" },
    hover: { width: 0 },
  };

  const textToFill = {
    rest: {
      color: "transparent",
      WebkitTextStroke: "1px black",
    },
    hover: {
      color: "#000000",
      WebkitTextStroke: "0px",
    },
  };

  const textToOutline = {
    rest: {
      color: "#000000",
      WebkitTextStroke: "0px",
    },
    hover: {
      color: "transparent",
      WebkitTextStroke: "1px black",
    },
  };

  const HoverWord = ({ children, highlightColor }) => {
    const [tapped, setTapped] = useState(false);

    const handleClick = () => {
      if (isTouchDevice) {
        setTapped(true);
        setTimeout(() => setTapped(false), 1500); // Reset after 1.5s
      }
    };

    return (
      <motion.span
        className="highlight-text"
        initial="rest"
        whileHover="hover"
        animate={tapped ? "hover" : "rest"}
        variants={textToFill}
        onClick={handleClick}
      >
        {children}
        <motion.span
          className="highlight"
          style={{ backgroundColor: highlightColor }}
          variants={highlightVariantsIn}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
    );
  };

  return (
    <div className="flex flex-col max-w-4xl w-full text-left pt-32 space-y-6 mx-auto px-4 sm:px-8">
      <div className="text text-lg sm:text-xl md:text-2xl font-normal leading-relaxed">
        <h1 className="text">Hi, I'm </h1>
        <motion.h1
          className="highlight-text"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={textToOutline}
        >
          Chelsea Arantza
          <motion.span
            className="highlight"
            variants={highlightVariantsOut}
            transition={{ duration: 0.3 }}
          />
        </motion.h1>
      </div>

      <div className="justify-left">
        <h2 className="text text-lg sm:text-xl md:text-2xl font-normal leading-relaxed">
          I <HoverWord highlightColor="#ccffaa">code</HoverWord>
          <span className="text">, </span>
          <HoverWord highlightColor="#c4fcef">design</HoverWord>
          <span className="text"> & </span>
          <HoverWord highlightColor="#ffc8dd">play music</HoverWord>
          <span className="text">.</span>
        </h2>
      </div>

      <div className="justify-left">
        <p className="text-base font-light leading-relaxed tracking-wide text-gray-800">
          I'm a Computer Science student based in Tangerang, Indonesia, with
          experience in event organizing, building user-friendly web apps, and
          crafting seamless UI/UX experiences. Outside of tech, I enjoy making
          music and exploring graphic design.
        </p>
      </div>
      <h1 className="text-md font-medium tracking-wider mt-34 text-gray-400">
        MY RECENT WORK
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <ProjectCard
          title="Melali"
          description="A website developed as the final project for my Intro to Internet Technology course.
It promotes tourism and local experiences in Bali. My team and I focused on creating a responsive, user-friendly platform. I led the full-stack development, handled API integration, and deployed the site via Vercel while optimizing performance across devices.
"
          imagePath="/assets/img/melali.png"
          link="https://melali-in-bali.vercel.app/"
        />
        <ProjectCard
          title="LiveWell - Mobile Application"
          description="LiveWell is a health and lifestyle companion app designed to help users build healthier habits. It tracks daily activities, analyzes lifestyle patterns, and provides personalized insights along with health insurance cost predictions based on users’ habits. With an intuitive and interactive interface, LiveWell encourages consistent, sustainable improvements toward a healthier life."
          imagePath="/assets/img/livewell.png"
          link="https://drive.google.com/drive/folders/1CJG2Jen436JtJBUK8hhpqAIoAaltITjz?usp=sharing"
        />
        <ProjectCard
          title="Isyara"
          description="This prototype showcases ISYARA, an innovative application designed to facilitate communication using sign language.
The app serves as an inclusive bridge between sign language users and the broader community, making interactions more accessible and supportive for all."
          imagePath="/assets/img/isyara.png"
          link="https://www.figma.com/proto/lRVxUT0tk1L0wmZJ5FwVyi/Untitled?node-id=34-198&t=aOzUhtv6ZWlZqEZX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=34%3A198&show-proto-sidebar=1"
        />
        <ProjectCard
          title="Aero"
          description="Aero is a website I developed with my team as the final project for our Web Programming course.
It’s a system designed to help UMKM manage their operations, including product inventory and pricing. Sellers can easily update product details, track stock, and streamline daily tasks through the platform."
          imagePath="/assets/img/aero.png"
          link="https://aerogalon.kuna1.my.id/#!"
        />
        <ProjectCard
          title="Website Revamp"
          description="This prototype is a revamp of an existing website, created for my Human-Computer Interaction course.
The goal was to improve its usability and interface by applying HCI principles. I focused on simplifying navigation, refining layout structure, and enhancing the overall user experience."
          imagePath="/assets/img/revampndc.png"
          link="https://www.figma.com/proto/de6UkSz12NG5wV4fRp2Ev1/re-vamp-design-NDC?node-id=52-302&t=9bvHsSvZhU2z5Zcq-1&scaling=contain&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=1%3A3"
        />
      </div>
    </div>
  );
}
