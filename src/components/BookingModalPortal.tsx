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
  const [ready, setReady] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    tech: string;
    doctor: string | null;
  }>({
    isOpen: false,
    tech: "3D Digital Oral Scan & Smile Simulation",
    doctor: null,
  });

  /* ── Attach click listener immediately so book buttons work on first tap ── */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-book-trigger], [data-book-tech], [data-book-doc]"
      );
      if (target) {
        e.preventDefault();
        const tech = target.getAttribute("data-book-tech") || undefined;
        const doctor = target.getAttribute("data-book-doc") || null;
        // Mark as ready and open the modal in one tick
        setReady(true);
        setModalState({
          isOpen: true,
          tech: tech || "3D Digital Oral Scan & Smile Simulation",
          doctor,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  /* ── Delay hydrating the full portal until after the main thread is idle ── */
  useEffect(() => {
    const hydrate = () => setReady(true);

    if (typeof requestIdleCallback !== "undefined") {
      // Mount after browser's first idle period (max 4 s fallback)
      const id = requestIdleCallback(hydrate, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    } else {
      // Fallback for Safari / older browsers
      const id = setTimeout(hydrate, 2000);
      return () => clearTimeout(id);
    }
  }, []);

  /* ── Custom-event API still works for programmatic access ── */
  useEffect(() => {
    if (!ready) return;
    const handleOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      setModalState({
        isOpen: true,
        tech: detail.tech || "3D Digital Oral Scan & Smile Simulation",
        doctor: detail.doctor || null,
      });
    };
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, [ready]);

  if (!ready || !modalState.isOpen) return null;

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
