import { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-8 h-8 rounded-full transition-all duration-200 ${
            isPointer ? 'bg-[#2c1810] scale-150' : 'bg-white scale-100'
          }`}
        />
      </div>

      {/* Cursor trail */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-[#2c1810]/20"
              style={{
                transform: `translate(-50%, -50%) scale(${1 - i * 0.2})`,
                animation: `cursorTrail ${0.5 + i * 0.1}s ease-out infinite`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Cursor highlight effect */}
      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-64 h-64 rounded-full bg-gradient-to-r from-[#2c1810]/10 to-[#1a120b]/10 blur-2xl transition-all duration-300 ${
            isPointer ? 'scale-150 opacity-50' : 'scale-100 opacity-30'
          }`}
        />
      </div>

      <style jsx global>{`
        @keyframes cursorTrail {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.2);
            opacity: 0;
          }
        }

        /* Hide default cursor */
        * {
          cursor: none !important;
        }

        /* Show default cursor for touch devices */
        @media (hover: none) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CursorEffect; 