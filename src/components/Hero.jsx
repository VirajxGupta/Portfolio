import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Terminal } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark pt-20">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] left-[20%] w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm text-gray-300 tracking-wide font-medium">Available for work</span>
                    </div>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                        className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight mb-6"
                    >
                        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="block">
                            Hi, I'm
                        </motion.span>
                        <motion.span
                            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pb-2"
                        >
                            Viraj Gupta
                        </motion.span>
                        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            <RoleCycler />
                        </motion.span>
                    </motion.h1>

                    <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
                        I'm a Software Development Engineer specializing in building full-stack platforms and AI-driven solutions.
                        Focused on creating scalable applications with React, Node.js, and Modern Web Technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(59,130,246,0.4)]"
                        >
                            View My Work <ArrowRight size={20} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/resume.pdf"
                            download="Viraj_Gupta_Resume.pdf"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                        >
                            Download CV <Download size={20} />
                        </motion.a>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <SocialIcon icon={<Github size={24} />} href="https://github.com/VirajxGupta" />
                        <SocialIcon icon={<Linkedin size={24} />} href="https://linkedin.com/in/viraj-gupta-ok" />
                        <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
                    </div>
                </motion.div>

                {/* Right Content / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Abstract Code/Tech Visual */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        {/* Main Card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-3 font-mono text-sm text-gray-400">
                                <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-300">{"{"}</span></div>
                                <div className="pl-4">name: <span className="text-green-400">'Viraj Gupta'</span>,</div>
                                <div className="pl-4">role: <span className="text-green-400">'SDE'</span>,</div>
                                <div className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node'</span>, <span className="text-green-400">'Firebase'</span>],</div>
                                <div className="pl-4">hardWorker: <span className="text-blue-400">true</span></div>
                                <div className="text-yellow-300">{"}"}</div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <FloatingBadge icon={<Terminal size={24} />} text="Clean Code" className="absolute -top-6 -right-6 bg-gray-800" delay={0.5} />
                        <FloatingBadge icon="🚀" text="Performance" className="absolute -bottom-8 -left-8 bg-gray-800" delay={0.7} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Helper Components
const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
    >
        {icon}
    </a>
);

const FloatingBadge = ({ icon, text, className, delay }) => (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        className={`flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 shadow-xl ${className}`}
    >
        <span className="text-xl">{icon}</span>
        <span className="font-semibold text-white">{text}</span>
    </motion.div>
);

// Text Cycle / Typewriter Effect
const Typewriter = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = React.useState("");
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return <span>{displayedText}</span>;
};

const RoleCycler = () => {
    const roles = ["Software Engineer.", "Full Stack Developer.", "Problem Solver."];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2500); // Change role every 2.5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="block h-[1.2em] overflow-hidden">
            <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="block text-4xl md:text-6xl text-gray-300"
            >
                {roles[index]}
            </motion.span>
        </span>
    );
};

export default Hero;
