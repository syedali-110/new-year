import { useEffect } from "react";

export default function FloatingHearts() {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("span");
      heart.innerText = "💖";
      heart.className =
        "fixed bottom-0 text-xl animate-[floatUp_5s_linear]";
      heart.style.left = Math.random() * 100 + "vw";

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return null;
}
