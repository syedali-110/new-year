import { useEffect, useState } from "react";

const UskiAankh = ({ size = 100 }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <>
      <svg
        width={size * 2}
        height={size}
        viewBox="0 0 200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="eyeWhite" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e6e6e6" />
          </radialGradient>

          <radialGradient id="iris" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#ffd27a" />
            <stop offset="60%" stopColor="#a35b00" />
            <stop offset="100%" stopColor="#4a2a00" />
          </radialGradient>
        </defs>

        {/* LEFT EYE */}
        <ellipse cx="60" cy="50" rx="35" ry="45" fill="url(#eyeWhite)" />
        <circle cx={46 + pos.x} cy={55 + pos.y} r="20" fill="url(#iris)" />
        <circle cx={46 + pos.x} cy={55 + pos.y} r="9" fill="#1a0f00" />

        <circle cx="40" cy="45" r="4" fill="white" opacity="0.9" />

        {/* RIGHT EYE */}
        <ellipse cx="140" cy="50" rx="35" ry="45" fill="url(#eyeWhite)" />
        <circle cx="126" cy="55" r="20" fill="url(#iris)" />
        <circle cx="126" cy="55" r="9" fill="#1a0f00" />
        <circle cx="120" cy="45" r="4" fill="white" opacity="0.9" />
      </svg>
    </>
  );
};

export default UskiAankh;
