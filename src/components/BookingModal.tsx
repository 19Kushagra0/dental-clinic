"use client";

import "@/styles/BookingModal.css";
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
        <div className="sc-console-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          {/* Backdrop */}
          <motion.div
            className="sc-console-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            className="sc-console-window"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Clean Clinic Header */}
            <div className="sc-modal-header">
              <div className="sc-header-branding">
                <span className="sc-header-dot" />
                <div>
                  <h2 id="modal-headline" className="sc-header-title">Reserve Clinical Consultation</h2>
                  <p className="sc-header-sub">SmileCraft Digital Dental Studio · Banjara Hills, Hyderabad</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="sc-header-close"
                aria-label="Close modal"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            {!isSubmitted ? (
              /* ─── Two-Column Split Layout ─── */
              <div className="sc-modal-body">
                {/* Left Column: Patient Summary & Transparency */}
                <aside className="sc-sidebar-panel">
                  {/* Selected Procedure Highlight */}
                  <div className="sc-summary-card">
                    <div className="sc-summary-badge">Selected Procedure</div>
                    <h3 className="sc-summary-title">{currentProtocol.name}</h3>
                    <p className="sc-summary-suite">{currentProtocol.suite} · {currentProtocol.duration}</p>
                    <div className="sc-summary-pill">{currentProtocol.advantage}</div>
                  </div>

                  {/* Specialist Banner (if chosen) */}
                  {selectedDoctor && (
                    <div className="sc-doctor-banner">
                      <div className="sc-doctor-avatar">
                        <DoctorIcon size={16} />
                      </div>
                      <div>
                        <div className="sc-doctor-name">{selectedDoctor}</div>
                        <div className="sc-doctor-role">Attending Specialist</div>
                      </div>
                    </div>
                  )}

                  {/* Transparent Fee Schedule */}
                  <div className="sc-fee-card">
                    <div className="sc-fee-title">Consultation & Diagnostics</div>
                    <div className="sc-fee-list">
                      <div className="sc-fee-item">
                        <span>3D Optical Digital Scan</span>
                        <span className="sc-fee-val">₹500</span>
                      </div>
                      <div className="sc-fee-item">
                        <span>AI Smile Design Simulation</span>
                        <span className="sc-fee-included">INCLUDED</span>
                      </div>
                      <div className="sc-fee-item">
                        <span>Doctor Examination & Plan</span>
                        <span className="sc-fee-included">INCLUDED</span>
                      </div>
                      <div className="sc-fee-total">
                        <span>Payable at Clinic</span>
                        <span className="sc-fee-price">₹500</span>
                      </div>
                    </div>
                  </div>

                  {/* Location & Zero Advance Guarantee */}
                  <div className="sc-location-block">
                    <div className="sc-location-line">
                      <LocationPinIcon size={14} />
                      <span>Road No. 12, Banjara Hills</span>
                    </div>
                    <p className="sc-guarantee-text">
                      ✓ No advance payment required · Pay at front desk after scan
                    </p>
                  </div>
                </aside>

                {/* Right Column: Streamlined Selection & Booking Form */}
                <main className="sc-form-panel">
                  <form onSubmit={handleSubmit} className="sc-booking-form">
                    {/* 1. Select Treatment */}
                    <div className="sc-form-section">
                      <label className="sc-section-label">1. Select Dental Care Protocol</label>
                      <div className="sc-treatment-matrix">
                        {CLINICAL_PROTOCOLS.map((protocol) => {
                          const isSelected = selectedTech === protocol.value;
                          return (
                            <button
                              key={protocol.id}
                              type="button"
                              onClick={() => setSelectedTech(protocol.value)}
                              className={`sc-treatment-btn ${isSelected ? "sc-treatment-btn--active" : ""}`}
                            >
                              <span className="sc-treatment-icon">{protocol.icon}</span>
                              <div className="sc-treatment-info">
                                <span className="sc-treatment-btn-name">{protocol.name}</span>
                                <span className="sc-treatment-btn-meta">{protocol.duration}</span>
                              </div>
                              {isSelected && <CheckIcon size={14} className="sc-check-active" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Select Date & Time */}
                    <div className="sc-form-section">
                      <label className="sc-section-label">2. Select Preferred Date & Window</label>
                      
                      {/* Date Ribbon */}
                      <div className="sc-calendar-row">
                        {availableDates.map((d, idx) => {
                          const isSelected = selectedDateIndex === idx;
                          return (
                            <button
                              key={d.fullDateStr}
                              type="button"
                              onClick={() => setSelectedDateIndex(idx)}
                              className={`sc-calendar-pill ${isSelected ? "sc-calendar-pill--active" : ""}`}
                            >
                              <span className="sc-cal-weekday">{d.weekday}</span>
                              <span className="sc-cal-date">{d.dayMonth}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Time Window Pills */}
                      <div className="sc-slot-row">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = selectedSlot === slot.id;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => setSelectedSlot(slot.id)}
                              className={`sc-slot-pill ${isSelected ? "sc-slot-pill--active" : ""}`}
                            >
                              <span className="sc-slot-label">{slot.label}</span>
                              <span className="sc-slot-time">{slot.time}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Patient Contact */}
                    <div className="sc-form-section">
                      <label className="sc-section-label">3. Patient Details</label>
                      <div className="sc-inputs-grid">
                        <div className="sc-input-wrapper">
                          <label className="sc-field-label">Full Name</label>
                          <input
                            type="text"
                            required
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            placeholder="Enter your name"
                            className="sc-text-input"
                          />
                        </div>
                        <div className="sc-input-wrapper">
                          <label className="sc-field-label">WhatsApp Mobile</label>
                          <div className="sc-phone-input-group">
                            <span className="sc-country-code">+91</span>
                            <input
                              type="tel"
                              required
                              value={patientPhone}
                              onChange={handlePhoneChange}
                              placeholder="98765 43210"
                              maxLength={10}
                              className="sc-phone-input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Bar (Always Anchored) */}
                    <div className="sc-action-bar">
                      <button
                        type="submit"
                        disabled={isSubmitting || !patientName.trim() || patientPhone.length < 10}
                        className="sc-submit-btn"
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

                      <div className="sc-action-sublinks">
                        <a
                          href={getWhatsAppBookingUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sc-whatsapp-link"
                        >
                          <WhatsAppIcon size={15} />
                          <span>Reserve via WhatsApp Concierge</span>
                        </a>
                        <span className="sc-divider-dot">•</span>
                        <a href="tel:+914023456789" className="sc-call-link">
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
              <div className="sc-confirmation-view">
                <div className="sc-confirmation-card">
                  <div className="sc-confirm-badge">
                    <CheckIcon size={24} />
                  </div>
                  <h3 className="sc-confirm-headline">Consultation Confirmed</h3>
                  <p className="sc-confirm-sub">
                    We look forward to welcoming you, <strong style={{ color: "#FFFFFF" }}>{patientName}</strong>.
                  </p>

                  <div className="sc-pass-code-tag">
                    CONFIRMATION CODE: {bookingRef}
                  </div>

                  <div className="sc-ticket-summary">
                    <div className="sc-ticket-item">
                      <span className="sc-ticket-key">Procedure</span>
                      <span className="sc-ticket-val">{currentProtocol.name}</span>
                    </div>
                    {selectedDoctor && (
                      <div className="sc-ticket-item">
                        <span className="sc-ticket-key">Specialist</span>
                        <span className="sc-ticket-val">{selectedDoctor}</span>
                      </div>
                    )}
                    <div className="sc-ticket-item">
                      <span className="sc-ticket-key">Date & Time</span>
                      <span className="sc-ticket-val">{currentDateObj.fullDateStr} · {currentSlotObj.label}</span>
                    </div>
                    <div className="sc-ticket-item">
                      <span className="sc-ticket-key">Location</span>
                      <span className="sc-ticket-val">Road No. 12, Banjara Hills, Hyderabad</span>
                    </div>
                    <div className="sc-ticket-item sc-ticket-item--total">
                      <span className="sc-ticket-key">Consultation Fee</span>
                      <span className="sc-ticket-val" style={{ color: "#10B981" }}>₹500 (Pay at Clinic)</span>
                    </div>
                  </div>

                  <div className="sc-confirm-actions">
                    <a
                      href={getGoogleCalendarUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sc-confirm-secondary-btn"
                    >
                      <span>Add to Calendar</span>
                      <ArrowUpRightIcon size={14} />
                    </a>
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sc-confirm-secondary-btn sc-confirm-whatsapp-btn"
                    >
                      <WhatsAppIcon size={15} />
                      <span>WhatsApp Support</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="sc-submit-btn"
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
