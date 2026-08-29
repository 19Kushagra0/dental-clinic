"use client";

import dynamic from "next/dynamic";
import styles from "@/styles/HomePage.module.css";

const SmileSimulatorLazy = dynamic(() => import("./SmileSimulator"), {
  ssr: false,
  loading: () => <div className={styles.simSkeletonCard} aria-hidden="true" />,
});

export default function SmileSimulatorIsland() {
  return <SmileSimulatorLazy />;
}
