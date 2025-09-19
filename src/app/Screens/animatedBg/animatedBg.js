import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBg() {
    const animations = [
        // Pulsating + floating
        {
            animate: {
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.5, 1],
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0]
            },
            transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        },
        // Rotating blob
        // {
        //     animate: {
        //         rotate: [0, 360],
        //         scale: [1, 1.3, 1],
        //         opacity: [0.15, 0.25, 0.15]
        //     },
        //     transition: { duration: 12, repeat: Infinity, ease: "linear" }
        // },
        // Color shifting + drift
        // {
        //     animate: {
        //         backgroundColor: ["#a855f7", "#ec4899", "#fbbf24", "#a855f7"],
        //         x: [0, 30, -30, 0],
        //         y: [0, -30, 30, 0],
        //         opacity: [0.15, 0.3, 0.15]
        //     },
        //     transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        // }
    ];

    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            {[...Array(15)].map((_, i) => {
                const anim = animations[Math.floor(Math.random() * animations.length)];
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={anim.animate}
                        transition={{ ...anim.transition, delay: i * 0.4 }}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            backgroundColor: "#a855f7",
                            width: `${Math.random() * 300 + 100}px`,
                            height: `${Math.random() * 300 + 100}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                );
            })}
        </div>
    );
}
