import Image from "next/image";

export default function AudioPlayer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 p-2 flex items-center space-x-4">
      <Image src="/radio-10.jpg" alt="Current" width={48} height={48} className="w-12 h-12" />
      <div>
        <h4>Radio Rwanda - Urubuga rw&apos;imikino</h4>
        <div className="w-full bg-gray-700 rounded-full h-1">
          <div className="bg-accent h-1 rounded-full w-1/2"></div>
        </div>
      </div>
      <button>⏮️</button>
      <button className="text-2xl">⏸️</button>
      <button>⏭️</button>
      <button>🔊</button>
      <button>-</button>
    </footer>
  );
}