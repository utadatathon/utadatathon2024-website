import { useRouter } from "next/router";
import { buttonDatas } from "../../lib/data";

export default function HomeHero() {
  const router = useRouter();

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
            className="relative max-w-4xl mx-auto lg:mt-[-6rem] flex flex-col justify-center items-center z-9 w-full"
          >
            <h1 className="text-center md:text-8xl text-5xl font-bold text-primaryDark custom-font">
              UTA Datathon <span className="custom-font-2">2024</span>
            </h1>{" "}
            {/* !change */}
            <p className="text-center my-4 font-semibold md:text-xl text-md text-primaryDark opacity-80">
              {" "}
              {/* !change */}Powered by UTA Libraries
            </p>
          </div>

          {/* TODO: Programmatically show these based on configured times/organizer preference */}

          <div className="relative flex flex-col items-center md:flex-row md:justify-around px-44 md:space-y-0 space-y-3 z-9 w-full">
            {buttonDatas.map((button) => (
              <button
                key={button.text}
                onClick={() => router.push(button.path)}
                className="max-w-[14rem] w-[14rem] md:max-w-full backdrop-blur-sm bg-customBackground/30 py-4 rounded-xl h-10 flex items-center justify-center font-semibold text-xl text-primaryDark border-2 border-gray-300"
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
