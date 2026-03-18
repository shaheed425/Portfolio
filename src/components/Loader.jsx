import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); 
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-primary-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div className="relative flex flex-col items-center w-full max-w-sm px-6">
        <motion.div 
          className="text-white font-mono text-6xl font-bold mb-8 tracking-tighter"
          animate={{ textShadow: ["0 0 10px #00f0ff", "0 0 30px #8a2be2", "0 0 10px #00f0ff"] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          {progress}%
        </motion.div>
        
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink shadow-[0_0_15px_rgba(0,240,255,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        <div className="mt-8 text-white/40 font-mono text-xs uppercase tracking-[0.3em]">
          Initializing WebGL Particles
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
