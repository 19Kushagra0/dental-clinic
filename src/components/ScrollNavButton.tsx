"use client";

import React, { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@/icons";
import styles from "@/styles/ScrollNavButton.module.css";

export default function ScrollNavButton() {
  const [isTopHalf, setIsTopHalf] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setIsTopHalf(window.scrollY < totalHeight / 2);
      }
    };

    // Calculate initial state and attach scroll event listener
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    if (isTopHalf) {
      // User is in the top half -> Scroll Down to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else {
      // User is in the bottom half -> Scroll Up to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.scrollNavContainer}>
      <button
        type="button"
        onClick={handleNavClick}
        className={styles.scrollNavBtn}
        aria-label={isTopHalf ? "Scroll to Bottom" : "Scroll to Top"}
      >
        <div className={styles.iconWrapper}>
          {isTopHalf ? (
            <ChevronDownIcon size={22} color="currentColor" />
          ) : (
            <ChevronUpIcon size={22} color="currentColor" />
          )}
        </div>
      </button>
    </div>
  );
}
