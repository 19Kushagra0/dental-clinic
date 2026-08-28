"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("@/components/BookingModal"), {
  ssr: false,
});

interface BookingContextType {
  openBooking: (tech?: string, doctor?: string | null) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  openBooking: () => {},
  closeBooking: () => {},
});

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState("3D Digital Oral Scan & Smile Simulation");
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  const openBooking = (tech?: string, doctor: string | null = null) => {
    if (tech) setSelectedTech(tech);
    setSelectedDoctor(doctor);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      {isOpen && (
        <BookingModal
          isOpen={isOpen}
          onClose={closeBooking}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
          selectedDoctor={selectedDoctor}
        />
      )}
    </BookingContext.Provider>
  );
}
