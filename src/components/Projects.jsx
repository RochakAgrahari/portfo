import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ccd6f6] mb-12">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#112240] rounded-lg shadow-lg p-6 hover:shadow-xl transition border border-[#233554]"
            >
              <h3 className="text-xl font-semibold text-[#64ffda]">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-sm bg-[#233554] text-[#64ffda] px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-[#64ffda] hover:underline">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;