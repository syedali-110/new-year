import { useEffect, useState } from "react";
import UskiAankh from "./components/UskiAankh.jsx";
import Navbar from "./components/Navbar.jsx";

const lines = ["Hey Baby girl!", "This Page", "is About", "You"];

export default function Hero() {
  const [displayText, setDisplayText] = useState(Array(lines.length).fill(""));
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    let timer;

    if (currentLine === lines.length) {
      timer = setTimeout(() => {
        setDisplayText(Array(lines.length).fill(""));
        setCurrentLine(0);
        setCurrentChar(0);
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (currentChar < lines[currentLine].length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => {
          const newText = [...prev];
          newText[currentLine] += lines[currentLine][currentChar];
          return newText;
        });
        setCurrentChar((prev) => prev + 1);
      }, 100);
    } else {
      timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [currentChar, currentLine]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white overflow-x-hidden transition-transform duration-300">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 pt-20 md:pt-19 flex flex-col md:flex-row gap-10 md:gap-20 items-center relative">
        {/* IMAGE - LEFT */}
        <div className="flex-shrink-0">
          <img
            src="/saba2.jpeg"
            alt="hero"
            className="rounded-xl w-[300] h-screen transition-transform duration-700 hover:scale-[1.04] hover:rotate-1"
          />
        </div>

        {/* TEXT - RIGHT */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-[80px] font-extrabold leading-snug md:leading-[1.05] text-gray-300 whitespace-pre-wrap">
            {displayText.map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
            <span className="border-r-4 border-pink-600 animate-blink ml-1" />
          </h1>
        </div>

        <span className="text-pink-600 text-[80px] sm:text-[100px] md:text-[190px] absolute top-[2rem] sm:top-[2.5rem] md:top-[7.1rem] left-[4rem] sm:left-[6rem] md:left-[32.75rem]">
          “
        </span>
      </section>

      {/* ================= QUOTE + IMAGE ================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 mt-20 md:mt-40 flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-[70px] text-gray-300 font-extrabold mb-4 md:mb-6">
            Your Gestures
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Your presence makes everything feel softer, brighter, and worth
            believing in. You have this magical way of turning ordinary moments
            into something extraordinary—just a glance from you warms my heart
            like sunlight breaking through clouds. With you, worries fade,
            laughter flows freely, and the world feels full of endless
            possibilities. You're my quiet strength, my spark of joy, the gentle
            rhythm that steadies my soul. Every day with you is a reminder of
            what true happiness looks like.
          </p>
        </div>

        <img
          src="/saba1.jpeg"
          alt="quote"
          className="rounded-xl w-[600] max-h-fit  transition-transform duration-700 hover:scale-[1.04] hover:rotate-1"
        />
      </section>

      {/* ================= YOUR EYES SECTION ================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 mt-20 md:mt-48 flex flex-col md:flex-row gap-10 md:gap-24 items-center">
        <img
          src="/saba5.jpeg"
          alt="eyes"
          className="rounded-xl max-w-7xl max-h-dvh transition-transform duration-700 hover:scale-[1.04] hover:rotate-1"
        />

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="relative">
            <UskiAankh />
            <span className="absolute inset-0 rounded-full blur-xl bg-pink-500/30 -z-10" />
          </div>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Your eyes are my favorite color—the deepest, warmest shade that
            pulls me in like a secret sunset. They hold stories I never get
            tired of reading, every glance revealing new chapters of your soul,
            sparkling with mischief, dreams, and quiet strength. In those
            windows to your heart, I see galaxies of emotions: the soft glow of
            your laughter, the storm clouds of your worries that vanish with a
            smile, and the endless ocean of your kindness.
          </p>
        </div>
      </section>

      {/* ================= FINAL IMAGE + TEXT ================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 mt-20 md:mt-48 mb-20 md:mb-32 flex flex-col md:flex-row gap-10 md:gap-24 items-center">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-[70px] text-gray-300 font-extrabold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
            Your Beauty ❤️
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Your beauty is a quiet symphony that captivates every sense—soft
            curves like sculpted poetry, skin glowing with the warmth of
            dawn-kissed petals. Your smile blooms like wildflowers in spring,
            lighting rooms with effortless grace, while your hair cascades in
            waves that beg to be touched by gentle winds. There's elegance in
            your poised movements, strength in your tender gaze, and a magnetic
            allure that draws hearts closer without trying. Every feature tells
            a story of natural perfection: high cheekbones framing laughter
            lines, lips curved in knowing sweetness, and eyes that sparkle with
            inner fire. You're not just beautiful; you're a living masterpiece,
            timeless and breathtaking, making the world infinitely more vibrant
            just by existing.
          </p>
        </div>

        <img
          src="/saba8.jpeg"
          alt="final"
          className="rounded-xl max-w-7xl max-h-dvh transition-transform duration-700 hover:scale-[1.04] hover:rotate-1"
        />
      </section>

      {/* ================= YOUR SMILE SECTION ================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-16 mt-20 md:mt-48 flex flex-col md:flex-row gap-10 md:gap-24 items-center pb-24">
        <img
          src="/saba4.jpeg"
          alt="smile"
          className="rounded-xl max-w-7xl max-h-dvh transition-transform duration-700 hover:scale-[1.04] hover:rotate-1"
        />

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-[70px] text-gray-300 font-extrabold mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
            Your Smile 😄
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Your smile is like a sunrise after the darkest night—it warms
            hearts, brightens moods, and spreads a quiet joy everywhere you go.
            Every curve of your lips holds laughter, hope, and a gentle reminder
            that happiness is found in simple moments shared with you. It
            disarms my worries with effortless magic, turning ordinary days into
            treasures I'll cherish forever. When you smile, the world pauses to
            witness pure light—sparkles dancing in your eyes, dimples like
            secret invitations to joy. It's my favorite melody, the curve that
            pulls me closer, promising endless warmth. Your smile isn't just
            beautiful; it's my daily dose of heaven, making every heartbeat
            grateful for you. That radiant glow chases away shadows, ignites
            butterflies in my soul, and whispers that with you, every tomorrow
            shines brighter. It's the spark that fuels my dreams, the warmth
            that wraps around my coldest thoughts, turning them into poetry. I
            live for those moments when your smile meets mine, creating our own
            little universe of bliss.
          </p>
        </div>
      </section>
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
        <p className="text-center text-pink-500 text-lg mb-3 animate-pulse">
          Made with ❤️ just for you
        </p>
      </div>
      <div
        className="fixed w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"
        style={{
          left: mouse.x * 3,
          top: mouse.y * 3,
        }}
      />
    </div>
  );
}
