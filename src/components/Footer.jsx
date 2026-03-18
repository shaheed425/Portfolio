const Footer = () => {
  return (
    <footer className="relative w-full py-8 border-t border-white/5 bg-primary-dark/80 backdrop-blur-md z-10">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/50 text-sm font-mono">
          © {new Date().getFullYear()} <span className="text-neon-blue">Dev</span>. Built with React & Three.js.
        </p>
        
        <div className="flex space-x-6">
          {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-white/50 hover:text-neon-pink transition-colors text-sm font-mono interactive"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
