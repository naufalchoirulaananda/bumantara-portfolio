"use client";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface ProjectProps {
  project: {
    title1: string;
    title2: string;
    src: string;
  };
}

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const Index: React.FC<ProjectProps> = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src } = project;

  return (
    <>
      <div
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className={styles.project}
      >
        <p>{title1}</p>
        <motion.div
          variants={anim}
          animate={isActive ? "open" : "closed"}
          className={styles.imgContainer}
        >
          <Image
            src={`/img/${src}`}
            alt="picture"
            width={1920}
            height={1080}
          />
        </motion.div>
        <p>{title2}</p>
      </div>
    </>
  );
};

export default Index;
