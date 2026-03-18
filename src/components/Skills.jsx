import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiFramer 
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90 },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 85 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 80 },
  { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 85 },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 75 },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff', level: 75 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
  { name: 'Framer', icon: SiFramer, color: '#0055FF', level: 60 },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: 85 },
];

const SkillCard = ({ name, Icon, color, index }) => {
  return (
    <Tilt options={{ max: 45, scale: 1.05, speed: 450 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-white/5 hover:border-cyan-400/30 transition-colors h-full group cursor-pointer"
      >
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center bg-primary-dark/50 border border-white/10 group-hover:scale-110 transition-transform duration-300"
          style={{ boxShadow: `0 0 20px ${color}20` }}
        >
          <Icon className="text-3xl" style={{ color }} />
        </div>
        <h4 className="text-white font-mono text-sm uppercase tracking-wider group-hover:text-neon-blue transition-colors">{name}</h4>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 min-h-screen flex items-center">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-white flex items-center gap-4"
          >
            <span className="text-neon-pink font-mono text-xl">02.</span>
            Technical Arsenal
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} name={skill.name} Icon={skill.icon} color={skill.color} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
