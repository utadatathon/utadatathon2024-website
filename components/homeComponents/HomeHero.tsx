import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function HomeHero() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date('04/10/2024') - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen p-4 bg-contain bg-customBackground mt-[-5rem]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        {/* Add additional source elements for other video formats if needed */}
      </video>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <div
            style={{ minHeight: 480 }}
            className="relative max-w-4xl mx-auto lg:mt-[0rem] flex flex-col justify-center items-center z-9 w-full"
          >
            <h1 className="text-center md:text-8xl text-5xl font-bold text-primaryDark custom-font">
              UTA Datathon <span className="custom-font-2">2024</span>
            </h1>{" "}
            {/* !change */}
            {/* <p className="text-center my-4 font-semibold md:text-xl text-md text-primaryDark opacity-80">
              {" "}
              // {/* !change */}
            {/* </p> */} 

          {/* Countdown Timer */}
          <div className="countdown-timer text-primaryDark" style={{ textAlign: 'center', margin: '1rem 0' }}>
            <h2 className="custom-font">Countdown to the Datathon</h2>
            <div className="time-left text-primaryDark" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop:'1rem', flexWrap: 'wrap' }}>
              {Object.keys(timeLeft).map((interval) => (
                <div key={interval} className="countdown-box backdrop-blur-sm bg-customBackground/30 border-2 border-gray-300 rounded-xl min-w-28" style={{ padding: '10px' }}>
                  <span className="countdown-number">{timeLeft[interval]}</span>
                 <p className="countdown-label custom-font">{interval.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>






          </div>

          {/* Buttons */}
          <div className="relative flex flex-col items-center md:flex-row md:justify-around px-44 md:space-y-0 space-y-3 z-9 w-full">
            {/* Button 1 */}
            <button
              onClick={() => router.push('/apply')}
              className="max-w-[14rem] w-[14rem] md:max-w-full backdrop-blur-sm bg-customBackground/30 py-4 rounded-xl h-10 flex items-center justify-center font-semibold text-xl text-primaryDark border-2 border-gray-300 custom-font"
            >
              Apply
            </button>
            {/* Button 2 */}
            <button
              onClick={() => router.push('/discord')}
              className="max-w-[14rem] w-[14rem] md:max-w-full backdrop-blur-sm bg-customBackground/30 py-4 rounded-xl h-10 flex items-center justify-center font-semibold text-xl text-primaryDark border-2 border-gray-300 custom-font"
            >
              Discord
            </button>
            {/* Button 3 */}
            <button
              onClick={() => router.push('/devpost')}
              className="max-w-[14rem] w-[14rem] md:max-w-full backdrop-blur-sm bg-customBackground/30 py-4 rounded-xl h-10 flex items-center justify-center font-semibold text-xl text-primaryDark border-2 border-gray-300 custom-font"
            >
              Dev Post
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
