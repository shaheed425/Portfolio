import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="relative py-32 px-6 min-h-[80vh] flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-neon-pink/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-3xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-10 md:p-14 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white flex justify-center items-baseline gap-4">
              <span className="text-neon-blue font-mono text-xl">05.</span>
              Get In Touch
            </h2>
            <p className="text-white/60 font-mono text-sm md:text-base leading-relaxed">
              Whether you have a question, an exciting project, or just want to say hi, 
              my inbox is always open. I'll try my best to get back to you!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group/input">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-mono focus:outline-none focus:border-neon-blue focus:bg-white/10 transition-all duration-300 peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-4 text-white/50 font-mono text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-blue peer-focus:bg-primary-dark peer-focus:px-2 peer-focus:-ml-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-blue peer-valid:bg-primary-dark peer-valid:px-2 peer-valid:-ml-2 pointer-events-none rounded-sm"
                >
                  Your Name
                </label>
              </div>
              <div className="relative group/input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-mono focus:outline-none focus:border-neon-purple focus:bg-white/10 transition-all duration-300 peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-4 text-white/50 font-mono text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-purple peer-focus:bg-primary-dark peer-focus:px-2 peer-focus:-ml-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-purple peer-valid:bg-primary-dark peer-valid:px-2 peer-valid:-ml-2 pointer-events-none rounded-sm"
                >
                  Email Address
                </label>
              </div>
            </div>

            <div className="relative group/input">
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-mono focus:outline-none focus:border-neon-pink focus:bg-white/10 transition-all duration-300 peer resize-none"
                placeholder=" "
              />
              <label 
                htmlFor="message" 
                className="absolute left-4 top-4 text-white/50 font-mono text-sm transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-neon-pink peer-focus:bg-primary-dark peer-focus:px-2 peer-focus:-ml-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-neon-pink peer-valid:bg-primary-dark peer-valid:px-2 peer-valid:-ml-2 pointer-events-none rounded-sm"
              >
                Your Message
              </label>
            </div>

            <div className="flex justify-center pt-4">
              <Button type="submit" variant="primary" className="w-full md:w-auto px-12">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
