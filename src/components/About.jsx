import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0.5"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ y, opacity }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-3xl rounded-full mix-blend-screen" />
            <div className="relative glass p-8 rounded-3xl border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative bg-primary-dark border border-white/10 flex items-center justify-center">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent opacity-80" />
              </div>
              
              <h3 className="text-3xl font-bold mb-2 text-white">Shaheed Rahman</h3>
              <p className="text-neon-blue font-mono mb-6 text-sm">Full Stack Developer | BCA</p>
              
              <div className="flex gap-6">
                <div className="flex-1 glass p-4 rounded-xl border border-white/5 text-center transition-all hover:border-neon-blue/30 hover:bg-white/10">
                  <div className="text-2xl font-black text-white mb-1">10+</div>
                  <div className="text-[10px] text-white/50 font-mono uppercase tracking-widest">Projects</div>
                </div>
                <div className="flex-1 glass p-4 rounded-xl border border-white/5 text-center transition-all hover:border-neon-purple/30 hover:bg-white/10">
                  <div className="text-2xl font-black text-white mb-1">1+</div>
                  <div className="text-[10px] text-white/50 font-mono uppercase tracking-widest">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white flex items-baseline gap-4">
              <span className="text-neon-purple font-mono text-2xl">01.</span>
              About Me
            </h2>
            
            <div className="space-y-6 text-white/60 font-mono text-base md:text-lg leading-relaxed">
              <p>
                Hello! I'm a passionate MERN Stack Developer from Calicut. I enjoy creating 
                things that live on the internet, whether that be websites, applications, 
                or anything in between.
              </p>
              <p className="pl-4 border-l-2 border-neon-blue">
                My interest in web development started back in my BCA days, and since then I've 
                been diving deep into the modern JavaScript ecosystem. My goal is always to build 
                responsive, pixel-perfect, and user-friendly digital experiences.
              </p>
              <p>
                I recently won a prize in an AI Hackathon by developing a fully functional website 
                in just 8 hours. I thrive in challenging environments and love applying new AI tools 
                to improve development efficiency.
              </p>
              
              <div className="pt-6">
                <p className="text-white font-bold mb-4">Here are a few technologies I've been working with recently:</p>
                <ul className="grid grid-cols-2 gap-3 text-sm">
                  {['React.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express.js', 'Framer Motion'].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-neon-pink text-xs">▹</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
