"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "@/styles/HomePage.module.css";
import { CheckIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@/icons";

export interface ComparisonRow {
  feature: string;
  legacy: string;
  smilecraft: string;
}

interface ComparisonTableProps {
  data: ComparisonRow[];
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = tableWrapperRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    
    setCanScrollLeft(scrollLeft > 25);
    setCanScrollRight(scrollLeft < maxScroll - 30);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    const el = tableWrapperRef.current;
    if (!el) return;
    const target = direction === "right" ? el.scrollWidth : 0;
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <div className={styles.compareContainer}>

      {/* ─── Table with Interactive Peek Gradient Shadows ─── */}
      <div className={styles.compareTableFrame}>
        {/* Left Gradient Fade (visible when scrolled to the right) */}
        <button
          type="button"
          onClick={() => scrollTo("left")}
          className={`${styles.compareGradientEdge} ${styles.compareGradientLeft} ${canScrollLeft ? styles.gradientVisible : ""}`}
          aria-label="Scroll back to Conventional Clinic"
        >
          <div className={styles.peekChevronLeftWrap}>
            <ChevronLeftIcon size={18} className={styles.peekChevron} />
          </div>
        </button>

        {/* Scrollable Table Viewport */}
        <div
          ref={tableWrapperRef}
          className={styles.compareTableWrapper}
          onScroll={checkScroll}
        >
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th className={styles.thFeature}>Procedure Phase</th>
                <th className={styles.thLegacy}>
                  <XMarkIcon size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px", opacity: 0.6 }} /> Conventional Dental Clinic
                </th>
                <th className={styles.thSmilecraft}>
                  <CheckIcon size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> SmileCraft Precision Studio
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.feature}>
                  <td className={styles.tdFeature}>{row.feature}</td>
                  <td className={styles.tdLegacy}>{row.legacy}</td>
                  <td className={styles.tdSmilecraft}>{row.smilecraft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Gradient Fade (visible when not scrolled to end) */}
        <button
          type="button"
          onClick={() => scrollTo("right")}
          className={`${styles.compareGradientEdge} ${styles.compareGradientRight} ${canScrollRight ? styles.gradientVisible : ""}`}
          aria-label="Scroll to see SmileCraft Digital Studio"
        >
          <div className={styles.peekChevronRightWrap}>
            <ChevronRightIcon size={18} className={styles.peekChevron} />
          </div>
        </button>
      </div>
    </div>
  );
}
