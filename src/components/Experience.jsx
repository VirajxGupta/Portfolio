import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "B.Tech in Electronics and Telecommunication",
        company: "MITS-DU, Gwalior",
        period: "2023 - 2027",
        description: "Pursuing Bachelor's degree with a CGPA of 8.20. Focusing on Telecommunication networks and software systems."
    },
    {
        role: "Student Coordinator",
        company: "ISCMCTR 2024 & 2025",
        period: "2024 - 2025",
        description: "Managed logistics and media coordination for national-level technical conferences."
    },
    {
        role: "Core Team Member",
        company: "AARUNYA 2025",
        period: "2025",
        description: "Planned and executed an annual techno-cultural fest for 1000+ students."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Spacer for Desktop */}
                            <div className="hidden md:block w-1/2" />

                            {/* Dot on Timeline */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark transform -translate-x-1/2 z-10" />

                            {/* Content Card */}
                            <div className="ml-16 md:ml-0 md:px-8 w-full md:w-1/2">
                                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                                        <div className="flex items-center text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                                            <Calendar size={12} className="mr-1" /> {exp.period}
                                        </div>
                                    </div>
                                    <h4 className="text-purple-400 font-medium text-sm mb-3 flex items-center">
                                        <Briefcase size={14} className="mr-2" /> {exp.company}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
