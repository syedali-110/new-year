import { useEffect, useState } from "react";
import LoveNavbar from "./components/LoveNavbar";


const lines = ["Hey Baby girl!", "This Page", "is About", "You"];

export default function Hero() {
  const [displayText, setDisplayText] = useState(Array(lines.length).fill(""));
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    let timer;

    // ✅ When all lines are finished
    if (currentLine === lines.length) {
      timer = setTimeout(() => {
        setDisplayText(Array(lines.length).fill(""));
        setCurrentLine(0);
        setCurrentChar(0);
      }, 1500); // pause before restart
      return () => clearTimeout(timer);
    }

    // ✅ Typing characters
    if (currentChar < lines[currentLine].length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => {
          const newText = [...prev];
          newText[currentLine] += lines[currentLine][currentChar];
          return newText;
        });
        setCurrentChar((prev) => prev + 1);
      }, 100);
    }
    // ✅ Move to next line
    else {
      timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 200);
    }

    return () => clearTimeout(timer);
  }, [currentChar, currentLine]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white overflow-x-hidden">
      <LoveNavbar />
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-[1200px] mx-auto px-16 pt-32 flex gap-20 items-end-safe relative">
        <img
          src="/saba2.jpeg"
          alt="hero"
          className="w-[340px] h-[440px] object-cover rounded-xl shadow-xl"
        />

        <h1 className="text-[80px] font-extrabold leading-[1.05] text-gray-300 whitespace-pre-wrap">
          {displayText.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
          <span className="border-r-4 border-pink-600 animate-blink ml-1" />
        </h1>

        <span className="text-pink-600 text-[150px] absolute top-13 left-115">
          “
        </span>
      </section>

      {/* ================= QUOTE + IMAGE ================= */}
      <section className="max-w-[1300px] mx-auto px-16 mt-40 flex gap-20 items-center relative">
        <div>
          {" "}
          <h2 className="text-[70px] text-gray-300 font-extrabold mb-6">
            Your Gestures
          </h2>
          <p className="flex-1 text-gray-400 text-lg leading-relaxed">
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
          className="w-[420px] h-[340px] object-cover rounded-xl shadow-2xl"
        />
      </section>

      {/* ================= YOUR EYES SECTION ================= */}
      <section className="max-w-[1400px] mx-auto px-16 mt-48 flex gap-24 items-center">
        <img
          src="/saba5.jpeg"
          alt="eyes"
          className="w-full h-[420px] object-cover rounded-xl shadow-xl"
        />

        <div>
          <h2 className="text-[70px] text-gray-300 font-extrabold mb-6 flex items-center gap-4">
            Your Eyes 👁️
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
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
      <section className="max-w-[1300px] mx-auto px-16 mt-48 mb-32 flex gap-24 items-center">
        <div>
          <h2 className="text-[70px] text-gray-300 font-extrabold mb-6 flex items-center gap-4">
            Your Beauty ❤️
          </h2>

          <p className="flex-1 text-lg text-gray-400 leading-relaxed">
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
          className="h-[600px] object-center rounded-xl shadow-xl"
        />
      </section>

      {/* ================= YOUR SMILE SECTION ================= */}
      <section className="max-w-[1400px] mx-auto px-16 mt-48 flex gap-24 items-center pb-[90px]">
        <img
          src="/saba4.jpeg"
          alt="smile"
          className="h-[720px] w-full rounded-xl shadow-xl object-cover"
        />

        <div>
          <h2 className="text-[70px] text-gray-300 font-extrabold mb-6 flex items-center gap-4">
            Your Smile 😄
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
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
    </div>
  );
}
