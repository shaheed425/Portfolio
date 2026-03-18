import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Jobsy',
    category: 'MERN Stack',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    description: 'A comprehensive job portal web application connecting job seekers with recruiters. Features real-time data handling and secure authentication.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Food Delivery Dashboard',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop',
    description: 'Delivery partner dashboard with real-time order tracking, distance calculation, and interactive maps integration.',
    tech: ['Django', 'React', 'MySQL', 'Framer Motion'],
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'AI Image Generator',
    category: 'AI Tools',
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2032&auto=format&fit=crop',
    description: 'Award-winning AI hackathon project. A fast, responsive interface for generating images using stable diffusion APIs.',
    tech: ['React', 'Tailwind CSS', 'OpenAI'],
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'MERN Stack', 'Full Stack', 'AI Tools'];
  
  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white flex items-baseline gap-4">
              <span className="text-neon-blue font-mono text-xl">03.</span>
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full" />
          </div>
          
          <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full no-scrollbar relative z-20">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-mono text-sm transition-all whitespace-nowrap interactive outline-none ${filter === cat ? 'bg-white/15 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'text-white/50 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Tilt options={{ max: 15, scale: 1.02, speed: 400 }} className="h-full">
                  <div className="glass h-full rounded-2xl overflow-hidden border border-white/5 group hover:border-neon-purple/30 transition-all duration-500 flex flex-col shadow-lg">
                    
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-primary-dark/60 group-hover:bg-transparent transition-all duration-500 z-10 mix-blend-multiply" />
                      <div 
                        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-primary-dark/60 backdrop-blur-sm">
                        <a href={project.github} className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all interactive scale-0 group-hover:scale-100 delay-100 duration-300">
                          <FaGithub size={22} />
                        </a>
                        <a href={project.live} className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-all interactive scale-0 group-hover:scale-100 delay-200 duration-300">
                          <FaExternalLinkAlt size={16} />
                        </a>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-transparent to-primary-dark/50">
                      <div className="text-neon-pink font-mono text-xs mb-2 tracking-wider">{project.category}</div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                      <p className="text-white/60 text-sm mb-6 flex-1 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map(t => (
                          <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] text-white/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;
