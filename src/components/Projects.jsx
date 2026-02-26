
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import internshipImg from "../assets/internship.png";
import ticketgenImg from "../assets/ticketgen.png";
import portfolioImg from "../assets/portfolio.png";
import veltoraImg from "../assets/veltora.png";
import aarunyaImg from "../assets/aarunya.png";

const projects = [
    {
        title: "Veltora Studios",
        description: "A creative digital agency delivering premium web experiences and modern design solutions.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        image: veltoraImg,
        github: "https://github.com/VirajxGupta/VeltoraStudios",
        demo: "https://veltora-studios.vercel.app/"
    },
    {
        title: "AI-Based Internship Platform",
        description: "Full-stack platform recommending internships based on candidate profiles, skills, and location with rule-based recommendations.",
        tech: ["React.js", "Material UI", "Node.js", "Firebase"],
        image: internshipImg,
        github: "https://github.com/VirajxGupta/internfinder",
        demo: "https://internfinder-tbhs.vercel.app/"
    },
    {
        title: "Ticket Generation System",
        description: "Automated fault detection and ticket management platform for power systems with real-time visualization dashboards.",
        tech: ["React.js", "Express", "Node.js", "Firebase", "MUI"],
        image: ticketgenImg,
        github: "https://github.com/VirajxGupta/Ticket_generation_system",
        demo: "https://ticket-generation-system-pv6k.vercel.app/"
    },
    {
        title: "Personal Portfolio",
        description: "A premium, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        image: portfolioImg,
        github: "https://github.com/VirajxGupta",
        demo: "#"
    },
    {
        title: "Aarunya 2.0",
        description: "Aarunya 2.0 is an immersive, interactive 3D web experience built for the annual cultural fest of MITS Gwalior, featuring a vibrant \"KidCore-Retro\" theme. Developed using React, Three.js, and Tailwind CSS, the platform offers users a virtual campus explorer complete with seamless authentication, event registrations, and dynamic animations.",
        tech: ["Next.js", "Tailwind CSS", "Three.js"],
        image: aarunyaImg,
        github: "https://github.com/Naitikk-J/AarunyaMITS",
        demo: "https://aarunya.harshitvarshney.in/"
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
