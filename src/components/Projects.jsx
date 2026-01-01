
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "AI-Based Internship Platform",
        description: "Full-stack platform recommending internships based on candidate profiles, skills, and location with rule-based recommendations.",
        tech: ["React.js", "Material UI", "Node.js", "Firebase"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "https://github.com/VirajxGupta/AI-based-internship-recommender",
        demo: "https://pm-ai-internship-scheme-platform.onrender.com/"
    },
    {
        title: "Ticket Generation System",
        description: "Automated fault detection and ticket management platform for power systems with real-time visualization dashboards.",
        tech: ["React.js", "Express", "Node.js", "Firebase", "MUI"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "https://github.com/VirajxGupta/Ticket_generation_system",
        demo: "https://ticket-generation-system-pv6k.vercel.app/"
    },
    {
        title: "Personal Portfolio",
        description: "A premium, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        github: "https://github.com/VirajxGupta",
        demo: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark-lighter">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-dark border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <a href={project.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center gap-2 text-sm text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full transition-colors">
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
