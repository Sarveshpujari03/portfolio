import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        x: 300,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <div className="w-full bg-card h-20 flex items-center justify-between px-6 md:px-16 fixed z-50">
      {/* Logo */}
      <h5 className="text-2xl text-orange-light font-bold">Sarvesh Pujari</h5>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center text-md text-white gap-12">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-150}
          className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
        >
          About
        </Link>
        {/* ✅ New Experience Link */}
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-150}
          className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
        >
          Experience
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={500}
          offset={-70}
          className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
        >
          Education
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={500}
          offset={-70}
          className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="resume"
          smooth={true}
          duration={500}
          offset={-200}
          className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
        >
          Resume
        </Link>
        <Link
          to="footer"
          smooth={true}
          duration={500}
          offset={-70}
          className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
        >
          Contact Me
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* GSAP Animated Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-20 right-0 w-1/2 h-fit bg-card z-40 rounded-bl-xl shadow-lg py-6 px-4 flex flex-col gap-6 text-white text-lg"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
          >
            About
          </Link>
          {/* ✅ New Experience Link (Mobile) */}
          <Link
            to="experience"
            smooth={true}
            duration={500}
            offset={-70}
            className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            offset={-70}
            className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
          >
            Education
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            offset={-70}
            className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            offset={-70}
            className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
          >
            Resume
          </Link>
          <Link
            to="contactme"
            smooth={true}
            duration={500}
            offset={-70}
            className="border-card border-b-2 hover:border-white transition-500 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
