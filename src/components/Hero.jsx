import { motion } from 'framer-motion';
import { Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Button from './Button';

const FloatingIcon = ({ position, rotation, scale = 1 }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh rotation={rotation} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#00f0ff" wireframe opacity={0.5} transparent />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Floating Elements Container */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <FloatingIcon position={[-5, 2, 0]} rotation={[0.5, 0.5, 0]} scale={0.8} />
          <FloatingIcon position={[4, 3, -2]} rotation={[-0.5, 0.8, 0]} scale={1.2} />
          <FloatingIcon position={[-4, -3, 1]} rotation={[0.2, -0.5, 0]} scale={0.6} />
          <FloatingIcon position={[5, -2, 0]} rotation={[0.8, 0.2, 0.5]} scale={1} />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue font-mono text-sm shadow-[0_0_10px_rgba(0,240,255,0.2)]"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-neon-blue animate-pulse mr-2" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]"
        >
          <span className="block text-white">BUILDING THE</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]">
            FUTURE OF WEB
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-white/70 text-lg md:text-xl font-mono mb-10"
        >
          I'm a Full Stack Developer specializing in highly interactive, 3D animated, and performant web applications. Let's create something extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
            View Projects
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/40 font-mono text-[10px] mb-3 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-neon-blue to-transparent absolute top-0"
            animate={{
              y: ['-100%', '200%']
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
