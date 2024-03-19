import { useEffect, useState } from 'react';
import SponsorCard from './SponsorCard';

export default function HomeSponsors(props: { sponsorCard: Sponsor[] }) {
  const [sponsor, setSponsor] = useState<Sponsor[]>([]);

  useEffect(() => {
    setSponsor(props.sponsorCard);
  });

  return (
    sponsor.length !== 0 && (
      <section className="md:p-12 p-6 relative">
        {/* Video Background */}
        <video 
        autoPlay 
        loop 
        muted 
        playsInline // Add playsInline attribute
        controls={false} // Hide playback controls
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/videos/bg2.mp4" type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="flex flex-col flex-grow rounded-3xl px-10 py-4 mx-auto w-full sm:w-4/5 bg-white relative z-9">
          <h4 className="text-complementary font-bold md:text-4xl text-2xl p-10 my-4 text-center bg-gradient-to-br from-violet-800 via-violet-500 to-violet-50 bg-clip-text text-transparent">Sponsors & Partners</h4>
          
          {/* Sponsor Card */}
          <section className="flex flex-wrap justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-4">
              {sponsor.map(({ link, reference }, idx) => (
                <SponsorCard key={idx} link={link} reference={reference} />
              ))}
            </div>
          </section>

          <h2 className="my-2 text-center">
            If you would like to sponsor UTA Datathon, please reach out to us at&nbsp;
            <a
              href="mailto:datathon@uta.edu"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              datathon@uta.edu
            </a>
          </h2>
        </div>
      </section>
    )
  );
}
