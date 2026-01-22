import { useEffect, useState } from "react";
import "../index";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Create spark
      const spark = {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 6 + 4,
        life: 1,
        id: Date.now(),
      };
      setParticles((prev) => [...prev.slice(-20), spark]); // keep last 20 particles
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({ ...p, life: p.life - 0.05 })).filter((p) => p.life > 0)
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{ left: pos.x, top: pos.y }}
      />
      {particles.map((p) => (
        <div
          key={p.id}
          className="spark"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.life,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
