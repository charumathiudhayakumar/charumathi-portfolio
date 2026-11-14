import { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navigation } from "../../constants/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
export function Header() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  const ids = useMemo(() => navigation.map((n) => n.href.slice(1)), []);
  const active = useActiveSection(ids);
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 20);
    addEventListener("scroll", onScroll);
    return () => removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="nav-wrap">
        <a className="logo" href="#home" aria-label="Charu home">
          C<span>/</span>
        </a>
        <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              className={active === item.href.slice(1) ? "active" : ""}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Let’s talk
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
