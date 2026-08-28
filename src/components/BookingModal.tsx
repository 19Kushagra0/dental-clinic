"use client";

import styles from "@/styles/BookingModal.module.css";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CloseIcon,
  DoctorIcon,
  CheckIcon,
  WhatsAppIcon,
  ScanBadgeIcon,
  MicroscopeIcon,
  LaserIcon,
  AlignerIcon,
  CrownIcon,
  DentalImplantIcon,
  LocationPinIcon,
  ArrowUpRightIcon,
  PhoneIcon,
} from "@/icons";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTech: string;
  setSelectedTech: (tech: string) => void;
  selectedDoctor: string | null;
}

interface ClinicalProtocol {
  id: string;
  value: string;
  name: string;
  suite: string;
  icon: React.ReactNode;
  duration: string;
  advantage: string;
}

const CLINICAL_PROTOCOLS: ClinicalProtocol[] = [
  {
    id: "scan",
    value: "3D Digital Oral Scan & Smile Simulation",
    name: "3D Optical Scan & Smile Design",
    suite: "Planmeca® Emerald S",
    icon: <ScanBadgeIcon size={16} />,
    duration: "15 mins",
    advantage: "Instant 3D Simulation",
  },
  {
    id: "cerec",
    value: "Same-Day CEREC CAD/CAM Crown Assessment",
    name: "Same-Day CEREC® Ceramic Crown",
    suite: "Dentsply Sirona",
    icon: <CrownIcon size={16} />,
    duration: "60 mins",
    advantage: "Single Visit Delivery",
  },
  {
    id: "cbct",
    value: "3D CBCT Guided Implant Consultation",
    name: "3D Computer-Guided Implant",
    suite: "Morita 3D CBCT",
    icon: <DentalImplantIcon size={16} />,
    duration: "30 mins",
    advantage: "Keyhole Precision",
  },
  {
    id: "invisalign",
    value: "Invisalign 3D Outcome Preview",
    name: "Invisalign® Clear Aligners",
    suite: "ClinCheck AI",
    icon: <AlignerIcon size={16} />,
    duration: "20 mins",
    advantage: "Pre-Treatment 3D Map",
  },
  {
    id: "laser",
    value: "Biolase Pain-Free Laser Therapy",
    name: "Biolase® Pain-Free Laser Care",
    suite: "Waterlase Laser",
    icon: <LaserIcon size={16} />,
    duration: "25 mins",
    advantage: "Needle & Suture-Free",
  },
  {
    id: "microscope",
    value: "Microscopic Root Canal Therapy",
    name: "Zeiss Microscopic Endodontics",
    suite: "Zeiss OPMI Optics",
    icon: <MicroscopeIcon size={16} />,
    duration: "45 mins",
    advantage: "20× Optical Zoom",
  },
];

const TIME_SLOTS = [
  { id: "morning", label: "Morning", time: "09:00 AM – 01:00 PM" },
  { id: "afternoon", label: "Afternoon", time: "01:00 PM – 05:00 PM" },
  { id: "evening", label: "Evening", time: "05:00 PM – 08:30 PM" },
];

export default function BookingModal({
  isOpen,
  onClose,
  selectedTech,
  setSelectedTech,
  selectedDoctor,
}: BookingModalProps) {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("morning");
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  // Dynamic 5-day calendar strip
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const isToday = i === 0;
      const isTomorrow = i === 1;
      const weekday = isToday ? "Today" : isTomorrow ? "Tomorrow" : d.toLocaleDateString("en-US", { weekday: "short" });
      const dayMonth = d.toLocaleDateString("en-US", { day: "numeric", month: "short" });
      const dayNum = d.getDate();
      const fullDateStr = d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", year: "numeric" });
      dates.push({ weekday, dayMonth, dayNum, fullDateStr });
    }
    return dates;
  }, []);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/[^\d]/g, "").slice(0, 10);
    setPatientPhone(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || patientPhone.length < 10) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `SC-${Math.floor(10000 + Math.random() * 90000)}`;
      setBookingRef(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setPatientName("");
    setPatientPhone("");
    onClose();
  };

  const currentProtocol =
    CLINICAL_PROTOCOLS.find((p) => p.value === selectedTech) || CLINICAL_PROTOCOLS[0];

  const currentSlotObj = TIME_SLOTS.find((s) => s.id === selectedSlot) || TIME_SLOTS[0];
  const currentDateObj = availableDates[selectedDateIndex] || availableDates[0];

  const getWhatsAppBookingUrl = () => {
    const docText = selectedDoctor ? ` with ${selectedDoctor}` : "";
    const msg = encodeURIComponent(
      `Hello SmileCraft Studio! I would like to schedule an appointment for ${currentProtocol.name}${docText} on ${currentDateObj.fullDateStr} (${currentSlotObj.label}). Patient: ${patientName || "New Patient"}, Phone: ${patientPhone}.`
    );
    return `https://wa.me/919876543210?text=${msg}`;
  };

  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`SmileCraft Dental: ${currentProtocol.name}`);
    const details = encodeURIComponent(
      `Appointment at SmileCraft Digital Studio.\n\nTreatment: ${currentProtocol.name}\nSpecialist: ${selectedDoctor || "Clinical Specialist"}\nSlot: ${currentSlotObj.label} (${currentSlotObj.time})\nBooking Code: ${bookingRef}\nLocation: Road No. 12, Banjara Hills, Hyderabad`
    );
    const loc = encodeURIComponent("SmileCraft Digital Dental Studio, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${loc}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            className={styles.window}
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Clean Clinic Header */}
            <div className={styles.modalHeader}>
              <div className={styles.headerBranding}>
                <div>
                  <h2 id="modal-headline" className={styles.headerTitle}>Reserve Clinical Consultation</h2>
                  <p className={styles.headerSub}>SmileCraft Digital Dental Studio · Banjara Hills, Hyderabad</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className={styles.headerClose}
                aria-label="Close modal"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            {!isSubmitted ? (
              /* ─── Two-Column Split Layout ─── */
              <div className={styles.modalBody}>
                {/* Left Column: Patient Summary & Transparency */}
                <aside className={styles.sidebarPanel}>
                  {/* Selected Procedure Highlight */}
                  <div className={styles.summaryCard}>
                    <div className={styles.summaryBadge}>Selected Treatment</div>
                    <h3 className={styles.summaryTitle}>{currentProtocol.name}</h3>
                    <p className={styles.summarySuite}>{currentProtocol.suite} · {currentProtocol.duration}</p>
                    <div className={styles.summaryPill}>{currentProtocol.advantage}</div>
                  </div>

                  {/* Specialist Banner (if chosen) */}
                  {selectedDoctor && (
                    <div className={styles.doctorBanner}>
                      <div className={styles.doctorAvatar}>
                        <DoctorIcon size={16} />
                      </div>
                      <div>
                        <div className={styles.doctorName}>{selectedDoctor}</div>
                        <div className={styles.doctorRole}>Attending Specialist</div>
                      </div>
                    </div>
                  )}

                  {/* Transparent Fee Schedule */}
                  <div className={styles.feeCard}>
                    <div className={styles.feeTitle}>Fee Breakdown</div>
                    <div className={styles.feeList}>
                      <div className={styles.feeItem}>
                        <span>3D Optical Digital Scan</span>
                        <span className={styles.feeVal}>₹500</span>
                      </div>
                      <div className={styles.feeItem}>
                        <span>AI Smile Design Simulation</span>
                        <span className={styles.feeIncluded}>Included</span>
                      </div>
                      <div className={styles.feeItem}>
                        <span>Doctor Consultation & Plan</span>
                        <span className={styles.feeIncluded}>Included</span>
                      </div>
                      <div className={styles.feeTotal}>
                        <span>Payable at clinic</span>
                        <span className={styles.feePrice}>₹500</span>
                      </div>
                    </div>
                  </div>

                  {/* Location & Zero Advance Guarantee */}
                  <div className={styles.locationBlock}>
                    <div className={styles.locationLine}>
                      <LocationPinIcon size={14} />
                      <span>Road No. 12, Banjara Hills</span>
                    </div>
                    <p className={styles.guaranteeText}>
                      ✓ No advance payment required · Pay at front desk after consultation
                    </p>
                  </div>
                </aside>

                {/* Right Column: Streamlined Selection & Booking Form */}
                <main className={styles.formPanel}>
                  <form onSubmit={handleSubmit} className={styles.bookingForm}>
                    {/* 1. Select Treatment */}
                    <div className={styles.formSection}>
                      <label className={styles.sectionLabel}>Select Treatment</label>
                      <div className={styles.treatmentMatrix}>
                        {CLINICAL_PROTOCOLS.map((protocol) => {
                          const isSelected = selectedTech === protocol.value;
                          return (
                            <button
                              key={protocol.id}
                              type="button"
                              onClick={() => setSelectedTech(protocol.value)}
                              className={`${styles.treatmentBtn} ${isSelected ? styles.treatmentBtnActive : ""}`}
                            >
                              <span className={styles.treatmentIcon}>{protocol.icon}</span>
                              <div className={styles.treatmentInfo}>
                                <span className={styles.treatmentBtnName}>{protocol.name}</span>
                                <span className={styles.treatmentBtnMeta}>{protocol.duration}</span>
                              </div>
                              {isSelected && <CheckIcon size={14} className={styles.checkActive} />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Select Date & Time */}
                    <div className={styles.formSection}>
                      <label className={styles.sectionLabel}>Select Date & Time</label>
                      
                      {/* Date Ribbon */}
                      <div className={styles.calendarRow}>
                        {availableDates.map((d, idx) => {
                          const isSelected = selectedDateIndex === idx;
                          return (
                            <button
                              key={d.fullDateStr}
                              type="button"
                              onClick={() => setSelectedDateIndex(idx)}
                              className={`${styles.calendarPill} ${isSelected ? styles.calendarPillActive : ""}`}
                            >
                              <span className={styles.calWeekday}>{d.weekday}</span>
                              <span className={styles.calDate}>{d.dayMonth}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Time Window Pills */}
                      <div className={styles.slotRow}>
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = selectedSlot === slot.id;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => setSelectedSlot(slot.id)}
                              className={`${styles.slotPill} ${isSelected ? styles.slotPillActive : ""}`}
                            >
                              <span className={styles.slotLabel}>{slot.label}</span>
                              <span className={styles.slotTime}>{slot.time}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Patient Contact */}
                    <div className={styles.formSection}>
                      <label className={styles.sectionLabel}>Your Details</label>
                      <div className={styles.inputsGrid}>
                        <div className={styles.inputWrapper}>
                          <label className={styles.fieldLabel}>Full Name</label>
                          <input
                            type="text"
                            required
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            placeholder="e.g. Ananya Rao"
                            className={styles.textInput}
                          />
                        </div>
                        <div className={styles.inputWrapper}>
                          <label className={styles.fieldLabel}>WhatsApp Mobile</label>
                          <div className={styles.phoneInputGroup}>
                            <span className={styles.countryCode}>+91</span>
                            <input
                              type="tel"
                              required
                              value={patientPhone}
                              onChange={handlePhoneChange}
                              placeholder="98765 43210"
                              maxLength={10}
                              className={styles.phoneInput}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Bar (Always Anchored) */}
                    <div className={styles.actionBar}>
                      <button
                        type="submit"
                        disabled={isSubmitting || !patientName.trim() || patientPhone.length < 10}
                        className={styles.submitBtn}
                      >
                        {isSubmitting ? (
                          <span>Reserving Appointment...</span>
                        ) : (
                          <>
                            <span>Confirm Appointment · ₹500</span>
                            <ArrowUpRightIcon size={16} />
                          </>
                        )}
                      </button>

                      <div className={styles.actionSublinks}>
                        <a
                          href={getWhatsAppBookingUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.whatsappLink}
                        >
                          <WhatsAppIcon size={15} />
                          <span>Reserve via WhatsApp Concierge</span>
                        </a>
                        <span className={styles.dividerDot}>•</span>
                        <a href="tel:+914023456789" className={styles.callLink}>
                          <PhoneIcon size={12} />
                          <span>Call Front Desk</span>
                        </a>
                      </div>
                    </div>
                  </form>
                </main>
              </div>
            ) : (
              /* ─── Confirmation Boarding Pass View ─── */
              <div className={styles.confirmationView}>
                <div className={styles.confirmationCard}>
                  <div className={styles.confirmBadge}>
                    <CheckIcon size={24} />
                  </div>
                  <h3 className={styles.confirmHeadline}>Consultation Confirmed</h3>
                  <p className={styles.confirmSub}>
                    We look forward to welcoming you, <strong style={{ color: "#0F172A" }}>{patientName}</strong>.
                  </p>

                  <div className={styles.passCodeTag}>
                    CONFIRMATION CODE: {bookingRef}
                  </div>

                  <div className={styles.ticketSummary}>
                    <div className={styles.ticketItem}>
                      <span className={styles.ticketKey}>Procedure</span>
                      <span className={styles.ticketVal}>{currentProtocol.name}</span>
                    </div>
                    {selectedDoctor && (
                      <div className={styles.ticketItem}>
                        <span className={styles.ticketKey}>Specialist</span>
                        <span className={styles.ticketVal}>{selectedDoctor}</span>
                      </div>
                    )}
                    <div className={styles.ticketItem}>
                      <span className={styles.ticketKey}>Date & Time</span>
                      <span className={styles.ticketVal}>{currentDateObj.fullDateStr} · {currentSlotObj.label}</span>
                    </div>
                    <div className={styles.ticketItem}>
                      <span className={styles.ticketKey}>Location</span>
                      <span className={styles.ticketVal}>Road No. 12, Banjara Hills, Hyderabad</span>
                    </div>
                    <div className={`${styles.ticketItem} ${styles.ticketItemTotal}`}>
                      <span className={styles.ticketKey}>Consultation Fee</span>
                      <span className={styles.ticketVal} style={{ color: "#10B981" }}>₹500 (Pay at Clinic)</span>
                    </div>
                  </div>

                  <div className={styles.confirmActions}>
                    <a
                      href={getGoogleCalendarUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.confirmSecondaryBtn}
                    >
                      <span>Add to Calendar</span>
                      <ArrowUpRightIcon size={14} />
                    </a>
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.confirmSecondaryBtn} ${styles.confirmWhatsappBtn}`}
                    >
                      <WhatsAppIcon size={15} />
                      <span>WhatsApp Support</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    className={styles.submitBtn}
                    style={{ marginTop: "0.5rem" }}
                  >
                    Done & Return to Studio
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
