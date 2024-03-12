import { useRouter } from 'next/router';
import { buttonDatas } from '../../lib/data';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HomeHero() {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);

  // Function to call to show the text
  const handleUserInteraction = () => {
    setShowVideo(false); // Ensure video is not displayed
    setShowText(true); // Trigger text display
  };

  useEffect(() => {
    // Add event listeners when component mounts
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('scroll', handleUserInteraction, { passive: true });

    // Cleanup event listeners when component unmounts
    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  return (
    <section className="min-h-screen p-4 bg-contain bg-black">
    <div
      style={{ maxHeight: 920 }}
      className="max-w-4xl mx-auto flex flex-wrap justify-center items-center"
    >
      <div className="relative w-full flex justify-center items-center">
        <Image
          src="/assets/my_first_vr_photo.png"
          alt="VR Image"
          width={920}
          height={510}
          onLoadingComplete={() => setShowText(false)}
        />
        {showText && (
          <>
            <p className="typewriter">&nbsp;&nbsp;UTA DATATHON</p>
            <p className="typewriter2">&nbsp;&nbsp;&nbsp;2024</p>
          </>
        )}
      </div>
    </div>
      <div className="flex flex-col items-center md:flex-row md:justify-around px-44 md:space-y-0 space-y-3">
        {buttonDatas.map((button) => (
          <button
            key={button.text}
            onClick={() => router.push(button.path)}
            className="max-w-[14rem] w-[14rem] md:max-w-full bg-black py-4 rounded-xl h-10 flex items-center justify-center font-semibold h1-custom-font text-xl text-primaryDark border-2 border-gray-300"
          >
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
}
