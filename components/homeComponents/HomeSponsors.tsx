import { useEffect, useState } from 'react';
import SponsorCard from './SponsorCard';

export default function HomeSponsors(props: { sponsorCard: Sponsor[] }) {
  const [sponsor, setSponsor] = useState<Sponsor[]>([]);

  useEffect(() => {
    setSponsor(props.sponsorCard);
  });

  return (
    sponsor.length != 0 && (
      <section className="md:p-12 p-6">
        <div className="flex flex-col flex-grow rounded-3xl px-10 py-4 mx-auto w-full sm:w-4/5 bg-white">
          <h4 className="text-complementary font-bold md:text-4xl text-2xl p-10 my-4 text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">Sponsors & Partners</h4>
          {/* Sponsor Card */}
          <section className="flex flex-wrap justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
              {sponsor.map(({ link, reference }, idx) => (
                <SponsorCard key={idx} link={link} reference={reference} />
              ))}
            </div>
          </section>
          <h2 className="my-2 text-center">
            {' '}
            {/* !change */}
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
