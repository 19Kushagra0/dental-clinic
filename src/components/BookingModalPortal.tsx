"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("@/components/BookingModal"), {
  ssr: false,
});

export function openBookingDialog(tech?: string, doctor: string | null = null) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-booking-modal", {
        detail: { tech: tech || "3D Digital Oral Scan & Smile Simulation", doctor },
      })
    );
  }
}

export default function BookingModalPortal() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    tech: string;
    doctor: string | null;
  }>({
    isOpen: false,
    tech: "3D Digital Oral Scan & Smile Simulation",
    doctor: null,
  });

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      setModalState({
        isOpen: true,
        tech: detail.tech || "3D Digital Oral Scan & Smile Simulation",
        doctor: detail.doctor || null,
      });
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-book-trigger], [data-book-tech], [data-book-doc]"
      );
      if (target) {
        e.preventDefault();
        const tech = target.getAttribute("data-book-tech") || undefined;
        const doctor = target.getAttribute("data-book-doc") || null;
        openBookingDialog(tech, doctor);
      }
    };

    window.addEventListener("open-booking-modal", handleOpen);
    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("open-booking-modal", handleOpen);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!modalState.isOpen) return null;

  return (
    <BookingModal
      isOpen={modalState.isOpen}
      onClose={() => setModalState((s) => ({ ...s, isOpen: false }))}
      selectedTech={modalState.tech}
      setSelectedTech={(tech) => setModalState((s) => ({ ...s, tech }))}
      selectedDoctor={modalState.doctor}
    />
  );
}
