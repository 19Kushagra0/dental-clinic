"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { openBookingDialog } from "@/components/BookingModalPortal";

export default function SmileSimulator() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingSlider) handleSliderMove(e.clientX);
  };

  return (
    <div className={styles.simCard}>
      {/* Simulation Header Telemetry */}
      <div className={styles.simHeader}>
        <div className={styles.simCaseTag}>
          <span className={styles.pulseCyan} />
          <span>Clinical Study #SC-8420 · Porcelain Veneers & Whitening</span>
        </div>
        <div className={styles.simQuickPresets}>
          <button
            type="button"
            onClick={() => setSliderPosition(0)}
            className={`${styles.simPresetBtn} ${sliderPosition === 0 ? styles.simPresetBtnActive : ""}`}
          >
            Before Only
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(50)}
            className={`${styles.simPresetBtn} ${sliderPosition === 50 ? styles.simPresetBtnActive : ""}`}
          >
            50% Split
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(100)}
            className={`${styles.simPresetBtn} ${sliderPosition === 100 ? styles.simPresetBtnActive : ""}`}
          >
            After Only
          </button>
        </div>
      </div>

      {/* Interactive Before/After Visual Frame */}
      <div
        className={styles.sliderContainer}
        ref={sliderContainerRef}
        onMouseDown={() => setIsDraggingSlider(true)}
        onMouseUp={() => setIsDraggingSlider(false)}
        onMouseLeave={() => setIsDraggingSlider(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full Background) */}
        <div className={styles.sliderImgWrap} style={{ position: "absolute" }}>
          <Image
            src="/smile-after.jpg"
            alt="After smile restoration: aligned luminous teeth with porcelain veneers"
            fill
            quality={70}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            style={{ objectFit: "cover" }}
          />
          <div className={`${styles.sliderBadge} ${styles.badgeAfter}`}>
            After · Digital Smile Design
          </div>
        </div>

        {/* Before Image (Clipped Foreground) */}
        <div
          className={styles.sliderClippedWrap}
          style={{ width: `${sliderPosition}%` }}
        >
          <div className={styles.sliderClippedImg} style={{ position: "absolute" }}>
            <Image
              src="/smile-before.jpg"
              alt="Before treatment: natural dental baseline with mild misalignment"
              fill
              quality={70}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={`${styles.sliderBadge} ${styles.badgeBefore}`}>
            Before · Baseline
          </div>
        </div>

        {/* Vertical Draggable Divider Line */}
        <div
          className={styles.sliderDivider}
          style={{ left: `${sliderPosition}%` }}
        >
          <div className={styles.sliderHandle}>
            <div className={styles.handleArrow}>◀</div>
            <div className={styles.handleArrow}>▶</div>
          </div>
        </div>
      </div>

      {/* Simulation Metrics Footer */}
      <div className={styles.simFooter}>
        <div className={styles.simMetric}>
          <span className={styles.simMetricVal}>99.4%</span>
          <span className={styles.simMetricLbl}>CAD Facial Symmetry</span>
        </div>
        <div className={styles.simMetric}>
          <span className={styles.simMetricVal}>BL1</span>
          <span className={styles.simMetricLbl}>Natural Vita Shade</span>
        </div>
        <div className={styles.simMetric}>
          <span className={styles.simMetricVal}>0.3 mm</span>
          <span className={styles.simMetricLbl}>Micro-Prep Thickness</span>
        </div>
        <div className={styles.simCtaWrap}>
          <button
            type="button"
            onClick={() => openBookingDialog("3D Digital Oral Scan & Smile Simulation")}
            className={styles.btnPrimary}
          >
            Simulate My Smile in 3D ↗
          </button>
        </div>
      </div>
    </div>
  );
}
