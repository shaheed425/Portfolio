import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    role: "Front-End Developer Trainee",
    company: "Zecser, Kollam",
    duration: "January 2026 - Present",
    points: [
      "Working on real-world front-end development projects using HTML, CSS, JavaScript, and React.js to build responsive and user-friendly web applications.",
      "Converting design mockups into functional interfaces.",
      "Integrating REST APIs for dynamic content."
    ]
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Softroniics, Calicut",
    duration: "May 2025 - 2026",
    points: [
      "Working on full-stack web development using MongoDB, Express.js, React, and Node.js (MERN Stack).",
      "Completed multiple live projects, focusing on responsive web applications.",
      "Collaborating with the development team to design, build, and test new features.",
      "Applying new technologies and AI tools to improve development efficiency."
    ]
  }
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`relative w-full md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:items-end md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'} mb-16`}
    >
      {/* Timeline dot */}
      <div className={`absolute top-0 ${index % 2 === 0 ? 'md:-right-3 md:translate-x-0 right-auto left-0 -ml-3' : 'left-0 -ml-3'} w-6 h-6 rounded-full bg-primary-dark border-4 border-neon-blue z-20 shadow-[0_0_15px_rgba(0,240,255,0.6)]`} />
      
      <div className={`glass p-8 rounded-2xl border border-white/5 w-full hover:border-neon-blue/30 transition-all duration-300 ml-6 md:ml-0 group`}>
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neon-pink transition-colors">{exp.role}</h3>
        <span className="text-neon-blue font-mono text-sm block mb-4">{exp.company} | {exp.duration}</span>
        
        <ul className={`space-y-3 text-white/70 text-sm ${index % 2 === 0 ? 'md:pr-0' : ''}`}>
          {exp.points.map((point, i) => (
            <li key={i} className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} gap-3`}>
              <span className={`text-neon-purple mt-1 ${index % 2 === 0 ? 'md:-order-1' : ''}`}>▹</span>
              <span className="flex-1 text-left">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0.5"]
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white flex items-baseline gap-4">
            <span className="text-neon-purple font-mono text-xl">04.</span>
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full" />
        </div>

        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-[2px] bg-white/10 md:-translate-x-1/2 ml-3 md:ml-0" />
          
          {/* Animated active line */}
          <motion.div 
            style={{ height }}
            className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink md:-translate-x-1/2 ml-3 md:ml-0 shadow-[0_0_15px_rgba(138,43,226,0.6)] z-10" 
          />

          <div className="flex flex-col relative z-20">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
