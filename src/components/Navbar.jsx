import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const redirectionTag = "border-b-2 hover:border-white border-card duration-200";

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to(menuRef.current, {
        x: 300,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [menuOpen]);

  return (
    <div className='w-full bg-card h-20 flex items-center justify-between px-6 md:px-16 fixed z-50'>
      
      {/* Logo */}
      <h5 className='text-2xl text-orange-light font-bold'>Sanket P.</h5>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center text-md text-white gap-12'>
        <a href="#home" className={redirectionTag}>Home</a>
        <a href="#about" className={redirectionTag}>About Me</a>
        <a href="#resume" className={redirectionTag}>Education</a>
        <a href="#resume" className={redirectionTag}>Projects</a>
        <a href="#contact" className={redirectionTag}>Contact Me</a>
      </div>

      {/* Hamburger */}
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-white focus:outline-none'>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* GSAP Animated Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-20 right-0 w-1/2 h-fit bg-card z-40 rounded-bl-xl shadow-lg py-6 px-4 flex flex-col gap-6 text-white text-lg"
        >
          <a href="#home" onClick={() => setMenuOpen(false)} className={redirectionTag}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className={redirectionTag}>About Me</a>
          <a href="#resume" className={redirectionTag}>Education</a>
          <a href="#resume" className={redirectionTag}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={redirectionTag}>Contact Me</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
