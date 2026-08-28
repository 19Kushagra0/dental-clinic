"use client";

import React, { useState } from "react";
import styles from "@/styles/HomePage.module.css";
import { ArrowUpRightIcon } from "@/icons";
import { useBooking } from "@/context/BookingContext";

export interface TechnologyItem {
  id: string;
  name: string;
  badge: string;
  icon: React.ReactNode;
  desc: string;
  patientBenefit: string;
  specs: { k: string; v: string }[];
}

export default function TechShowcase({ technologies }: { technologies: TechnologyItem[] }) {
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const { openBooking } = useBooking();
  const activeTech = technologies[activeTechIndex] || technologies[0];

  return (
    <>
      {/* Tab buttons */}
      <div className={styles.techTabsNav}>
        {technologies.map((t, idx) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTechIndex(idx)}
            className={`${styles.techTabBtn} ${activeTechIndex === idx ? styles.techTabBtnActive : ""}`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Active tech card */}
      <div className={styles.techCardActive}>
        <div className={styles.techHeader}>
          <div className={styles.techHeaderLeft}>
            <div className={styles.techIconWrap}>{activeTech.icon}</div>
            <div>
              <h3 className={styles.techH3}>{activeTech.name}</h3>
            </div>
          </div>
          <span className={styles.techBadge}>{activeTech.badge}</span>
        </div>

        <div className={styles.techBody}>
          <p className={styles.techP}>{activeTech.desc}</p>
          <div className={styles.benefitBox}>
            <span className={styles.benefitTitle}>PATIENT ADVANTAGE</span>
            <span className={styles.benefitDesc}>{activeTech.patientBenefit}</span>
          </div>
        </div>

        <div className={styles.techSpecsBar}>
          <div className={styles.techSpecsItems}>
            {activeTech.specs.map((spec) => (
              <div key={spec.k} className={styles.techSpecCol}>
                <span className={styles.specK}>{spec.k}</span>
                <span className={styles.specV}>{spec.v}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => openBooking(activeTech.name)}
            className={styles.btnPrimary}
          >
            Book Diagnostic Scan <ArrowUpRightIcon size={14} style={{ display: "inline", verticalAlign: "middle", marginLeft: "4px" }} />
          </button>
        </div>
      </div>
    </>
  );
}
