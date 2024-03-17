import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { buttonDatas } from '../../lib/data';

export default function HomeHero() {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleUserInteraction = () => {
    setShowVideo(false);
    setShowText(true);
  };

  useEffect(() => {
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('scroll', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date('04/10/2024') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
<section className="relative min-h-screen p-4 bg-cover bg-custom-image">
      {/* Video Background */}
      
      {/* <video */}
        {/* autoPlay */}
        {/* loop */}
        {/* muted */}

        {/* className="absolute inset-0 w-full h-screen object-cover" */}
        {/*  */}
      {/* > */}
        {/* <source src="/videos/bg.mp4" type="video/mp4" /> */}
        Add additional source elements for other video formats if needed
      {/* </video> */}

      <div  className="relative max-w-4xl mx-auto flex flex-wrap justify-center items-center z-9">
        <div className="relative w-full flex justify-center items-center">
          <Image
            src="/assets/my_first_vr_photo.png"
            alt="VR Image"
            width={1440}
            height={830}
            onLoadingComplete={() => setShowText(false)}
          />
          {showText && (
            <>
              <p className="typewriter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UTA DATATHON</p>
              <p className="typewriter2" style={{marginLeft:"46%"}}>2024</p>
            </>
          )}
        </div>
      </div>
      {/* Countdown Timer */}
      <div className="countdown-timer text-primaryDark" style={{ textAlign: 'center', margin: '100px 0' }}>
          <h2 className="h1-custom-font">Countdown to the Datathon</h2>
  <div className="time-left text-primaryDark " style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop:'50px', flexWrap: 'wrap' }}>
    {Object.keys(timeLeft).map((interval) => (
      <div key={interval} className="countdown-box">
        <span className="countdown-number">{timeLeft[interval]}</span>
        <p className="countdown-label h1-custom-font">{interval.toUpperCase()}</p>
      </div>
    ))}
  </div>
</div>
<div className="flex flex-col items-center md:flex-row md:justify-around px-24">
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
