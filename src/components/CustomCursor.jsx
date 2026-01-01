import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === "BUTTON" ||
                e.target.tagName === "A" ||
                e.target.closest("button") ||
                e.target.closest("a")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 bg-gray-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                scale: isHovering ? 2.5 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 800,
                damping: 40,
                mass: 0.2
            }}
        />
    );
};

export default CustomCursor;
