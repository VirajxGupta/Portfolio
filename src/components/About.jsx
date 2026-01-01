import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe } from "lucide-react";
import pfp from "../assets/pfp.jpg";

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-lighter">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src={pfp}
                                alt="Profile"
                                className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-6">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-bold text-xl">The Builder</p>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Always learning, always coding.</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative box */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white">
                            I'm a <span className="text-primary">Problem Solver</span> at Heart.
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            My journey in tech started with a curiosity about how things work under the hood.
                            Over the years, I've honed my skills in full-stack development, focusing on building scalable,
                            high-performance applications that deliver real value.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            I strive for code that is not just functional but also clean, maintainable, and efficient.
                            Whether it's optimizing database queries or crafting buttery-smooth frontend animations,
                            I love every part of the stack.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <Feature icon={<Code className="text-primary" />} title="Clean Code" desc="Readable & Maintainable" />
                            <Feature icon={<Cpu className="text-primary" />} title="Performance" desc="Optimized for Speed" />
                            <Feature icon={<Globe className="text-primary" />} title="Scalability" desc="Built to Grow" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Feature = ({ icon, title, desc }) => (
    <div className="flex items-start gap-3">
        <div className="p-2 bg-white/5 rounded-lg border border-white/5">{icon}</div>
        <div>
            <h4 className="text-white font-medium">{title}</h4>
            <p className="text-sm text-gray-500">{desc}</p>
        </div>
    </div>
);

export default About;
