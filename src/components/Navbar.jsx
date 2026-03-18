import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass shadow-lg shadow-neon-blue/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-mono text-white tracking-widest interactive group">
          <span className="text-neon-blue group-hover:text-neon-pink transition-colors">{'<'}</span>
          Dev
          <span className="text-neon-purple group-hover:text-neon-blue transition-colors">{' />'}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center font-mono text-sm">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white/70 hover:text-neon-blue transition-colors interactive">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-6 py-2 border border-neon-purple text-neon-purple rounded-full hover:bg-neon-purple/10 hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] transition-all duration-300 interactive">
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white interactive p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <motion.span animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-full h-[2px] bg-white block origin-left" />
            <motion.span animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-[2px] bg-white block" />
            <motion.span animate={mobileMenuOpen ? { rotate: -45, y: -8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }} className="h-[2px] bg-white block origin-left" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mx-4 mt-4 overflow-hidden border border-white/10"
          >
            <div className="flex flex-col items-center py-6 space-y-4 font-mono">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-neon-blue w-full text-center py-2 interactive">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-2 border border-neon-purple text-neon-purple rounded-full hover:bg-neon-purple/10 hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] transition-all duration-300 interactive">
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
