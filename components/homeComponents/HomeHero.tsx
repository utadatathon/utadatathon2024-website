import { useRouter } from 'next/router';
import { buttonDatas } from '../../lib/data';
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function HomeHero() {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);
 

  

  return (
    <section className="min-h-screen p-4 bg-contain bg-black">
      <div
        style={{ maxHeight: 700 }}
        className="max-w-4xl mx-auto flex flex-wrap justify-center items-center"      >
<div className="video-container relative w-full flex justify-center items-center" >          
  <video width="920" height="340" autoPlay>
    <source src="/assets/my_first_vr_video.mp4" type="video/mp4" />
  </video>
</div>



        {/* <h1 className="text-center md:text-8xl text-6xl font-bold text-primaryDark h1-custom-font" >UTA Datathon</h1> */}
        {/* <h1 className="text-center md:text-8xl text-6xl font-bold text-primaryDark" >2024</h1>{' '} */}
        {/* !change */}
        {/* <p className="text-center my-4 font-semibold md:text-xl text-md text-primaryDark opacity-80 h1-custom-font"> */}
          {/* {' '} */}
          {/* !changePowered by UTA Libraries */}
        {/* </p> */}
      </div>
      {/* TODO: Programmatically show these based on configured times/organizer preference */}

      <div className="flex flex-col items-center md:flex-row md:justify-around px-44 md:space-y-0 space-y-3 > *">
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