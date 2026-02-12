import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ScatterWordProps {
  word: string;
  scrollYProgress: MotionValue<number>;
  dirX: number;
  dirY: number;
  dirRotate: number;
}

const ScatterWord = ({ word, scrollYProgress, dirX, dirY, dirRotate }: ScatterWordProps) => {
  const x = useTransform(scrollYProgress, [0.15, 0.6], [0, dirX]);
  const y = useTransform(scrollYProgress, [0.15, 0.6], [0, dirY]);
  const rotate = useTransform(scrollYProgress, [0.15, 0.6], [0, dirRotate]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.5], [1, 0]);

  return (
    <motion.span
      style={{ x, y, rotate, opacity }}
      className="inline-block mr-[0.3em] last:mr-0"
    >
      {word}
    </motion.span>
  );
};

interface ScatterTextProps {
  children: string;
  className?: string;
}

const ScatterText = ({ children, className = "" }: ScatterTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const words = children.split(" ");

  const scatterDirections = words.map((_, i) => {
    const angle = ((i * 137.5) % 360) * (Math.PI / 180);
    const distance = 80 + (i % 3) * 40;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance * 0.5,
      rotate: (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8),
    };
  });

  return (
    <motion.span ref={ref} className={`inline ${className}`}>
      {words.map((word, i) => (
        <ScatterWord
          key={i}
          word={word}
          scrollYProgress={scrollYProgress}
          dirX={scatterDirections[i].x}
          dirY={scatterDirections[i].y}
          dirRotate={scatterDirections[i].rotate}
        />
      ))}
    </motion.span>
  );
};

export default ScatterText;
