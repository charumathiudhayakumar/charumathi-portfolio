import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
export function ThemeToggle() {
  const [light, setLight] = useState(
    () => localStorage.getItem("theme") === "light",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);
  return (
    <button
      className="icon-button"
      onClick={() => setLight((v) => !v)}
      aria-label={`Switch to ${light ? "dark" : "light"} theme`}
    >
      {light ? <FiMoon /> : <FiSun />}
    </button>
  );
}
