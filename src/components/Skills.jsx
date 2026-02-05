import React from "react";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Frontend",
        items: ["React", "HTML5", "CSS3", "Bootstrap", "Material UI", "Tailwind CSS"]
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "Java", "REST APIs", "JWT Auth", "Redis"]
    },
    {
        category: "Databases & Tools",
        items: ["MongoDB", "MySQL", "Firebase", "Git", "GitHub", "Postman", "VS Code", "Supabase"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Technical Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolset for building modern web applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-primary/20 pb-4 inline-block">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-dark rounded-lg text-sm font-medium text-gray-300 border border-gray-800 hover:border-primary/50 hover:text-white transition-all cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
