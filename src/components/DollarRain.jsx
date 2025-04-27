import { useEffect, useState } from "react";
import '../css/DollarRain.css'

export default function DollarRain() {
  const [dollars, setDollars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDollar = {
        id: Math.random(),
        left: Math.random() * window.innerWidth,
        delay: Math.random() * 10,
        size: 20 + Math.random() * 15, // Random size between 20px and 50px
      };
      setDollars(prev => [...prev, newDollar]);
    }, 2000); // A new dollar every 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dollar-rain">
      {dollars.map(dollar => (
        <img
          key={dollar.id}
          src="/dollar.png" // public folder reference
          alt="dollar"
          className="dollar"
          style={{
            left: dollar.left,
            animationDelay: `${dollar.delay}s`,
            width: `${dollar.size}px`,
          }}
        />
      ))}
    </div>
  );
}
