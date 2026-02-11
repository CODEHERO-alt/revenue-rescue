import { motion } from "framer-motion";

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 3,
}));

const GoldParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full"
        style={{
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size,
          background: `radial-gradient(circle, hsl(45 100% 60% / 0.8), hsl(45 100% 50% / 0))`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0, 0.8, 0],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
    {/* Central glow behind heading */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
      style={{
        background: "radial-gradient(ellipse, hsl(45 100% 50% / 0.08), transparent 70%)",
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default GoldParticles;
