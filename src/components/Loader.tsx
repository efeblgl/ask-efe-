"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`loader ${done ? "loaded" : ""}`} aria-hidden="true">
      <div className="loader-mark">
        <div className="loader-letters">
          <span className="loader-letter e">E</span>
          <span className="loader-letter f">F</span>
        </div>
        <div className="loader-ask">ASK</div>
      </div>
    </div>
  );
}
