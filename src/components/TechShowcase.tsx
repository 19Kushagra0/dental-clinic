"use client";

import React, { useState } from "react";
import styles from "@/styles/HomePage.module.css";
import { ArrowUpRightIcon } from "@/icons";
import { openBookingDialog } from "@/components/BookingModalPortal";

const technologies = [
  {
    id: "scanner",
    name: "3D Intraoral Optical Scanner",
    badge: "Planmeca® Emerald S",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="6" y="18" width="36" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M14 18V12a2 2 0 012-2h16a2 2 0 012 2v6" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M24 24v-4M24 32v4M20 28h-4M28 28h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    desc: "Captures 3D digital impressions of your entire mouth in under 60 seconds with sub-micron accuracy. Completely eliminates gooey impression trays and gagging.",
    patientBenefit: "Zero gag reflex, no silicone taste, instant 3D smile visualization.",
    specs: [
      { k: "Scan Speed", v: "< 60 Seconds" },
      { k: "Accuracy", v: "Sub-20 Microns" },
      { k: "Impression Method", v: "100% Optical (No Putty)" },
    ],
  },
  {
    id: "cbct",
    name: "3D Cone Beam CT (CBCT)",
    badge: "Planmeca® ProMax 3D",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.2" />
        <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15.5 15.5l3 3M29.5 29.5l3 3M15.5 32.5l3-3M29.5 18.5l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    desc: "Ultra-low dose 3D volumetric X-ray providing cross-sectional views of bone volume, density, and nerve proximity for 100% predictable implant placement.",
    patientBenefit: "Computer-guided keyhole surgery without guesswork or exploratory incisions.",
    specs: [
      { k: "Resolution", v: "75 µm Isotropic Voxel" },
      { k: "Radiation Reduction", v: "Up to 90% vs Medical CT" },
      { k: "Surgical Guide", v: "CAD/CAM Custom Stent" },
    ],
  },
  {
    id: "cerec",
    name: "CAD/CAM 5-Axis Milling Unit",
    badge: "Dentsply Sirona CEREC®",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M18 28h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 18h32" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    desc: "In-house precision robotic milling that fabricates high-strength monolithic zirconia and E-max porcelain crowns right during your appointment.",
    patientBenefit: "Walk in with a damaged tooth, walk out with a permanent crown in 60 minutes.",
    specs: [
      { k: "Restoration Time", v: "Single Visit (60 Min)" },
      { k: "Material", v: "E-Max® / Multilayer Zirconia" },
      { k: "Temporary Tooth", v: "Never Needed" },
    ],
  },
  {
    id: "laser",
    name: "Biolase® Waterlase Laser",
    badge: "HydroPhotonics™ Dental Laser",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.2" />
        <path d="M13.5 13.5l4 4M30.5 30.5l4 4M13.5 34.5l4-4M30.5 17.5l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    desc: "Uses laser-energized water droplets to precisely cut hard and soft tissue without the heat, friction, or vibration of traditional drills.",
    patientBenefit: "Painless gum recontouring, cavity prep without needles in most cases, faster healing.",
    specs: [
      { k: "Wavelength", v: "2780 nm Er,Cr:YSGG" },
      { k: "Anesthesia Required", v: "Minimal / None" },
      { k: "Bleeding & Swelling", v: "Virtually Zero" },
    ],
  },
  {
    id: "wand",
    name: "The Wand® Computerized Anesthesia",
    badge: "Milestone Scientific STA",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M12 36L28 12l4 4L16 40z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M28 12l5-3 3 3-3 5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="36" r="2.5" fill="currentColor" />
        <path d="M22 18l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    desc: "Microprocessor-controlled single-tooth anesthesia delivering numbing solution below the patient's pain perception threshold.",
    patientBenefit: "No syringe sting, no heavy numb face or drooping lips after your visit.",
    specs: [
      { k: "Flow Rate Control", v: "Computer Dynamic Pressure" },
      { k: "Numbing Area", v: "Single Tooth Target" },
      { k: "Discomfort Level", v: "Pain-Free Delivery" },
    ],
  },
];

export default function TechShowcase() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);
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
            onClick={() => openBookingDialog(activeTech.name)}
            className={styles.btnPrimary}
          >
            Book Diagnostic Scan <ArrowUpRightIcon size={14} style={{ display: "inline", verticalAlign: "middle", marginLeft: "4px" }} />
          </button>
        </div>
      </div>
    </>
  );
}
