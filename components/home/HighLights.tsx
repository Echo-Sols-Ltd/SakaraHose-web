"use client";

const highlights = [
  {
    title: "Kiss FM — Kiss Hit 30",
    description:
      "Get ready, Rwanda! This Saturday at 10 AM, Kiss FM brings you the Kiss Hit 30 — counting down the biggest hits you love. Don’t miss the show that keeps your weekend moving with the hottest tracks in the country. Tune in and feel the vibe with Kiss FM!",
    image: "/images/radio-10.jpg", // replace with your image
  },
  {
    title: "Radio 10 — Urubuga rw’Imikino",
    description:
      "Stay ahead of the game! Every Saturday from 10 AM to 1 PM, join Radio 10 for Urubuga rw'Imikino — your ultimate sports destination. From football to local updates, we’ve got the action, analysis, and excitement covered. Don’t just watch the game, live it with Radio 10!",
    image: "/images/radio-10.jpg",
  },
  {
    title: "Flash FM — Weekend Vibes",
    description:
      "Your weekends just got better with Flash FM’s Weekend Vibes. Non-stop hits, interviews, and entertainment to keep you energized and connected all weekend long.",
    image: "/images/radio-10.jpg",
  },
];

export default function Highlights() {
  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white relative">
          Highlights for you
          <span className="block w-16 h-[2px] bg-yellow-500 mt-2 relative">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow" />
          </span>
        </h2>
        <button className="text-sm text-yellow-500 hover:underline">See all</button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="relative h-56 rounded-xl overflow-hidden border border-[#2B3044]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Text */}
            <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
