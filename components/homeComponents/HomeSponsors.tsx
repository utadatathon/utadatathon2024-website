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
        <div className="flex flex-col flex-grow bg-black">
          <h4 className="text-complementary font-bold md:text-4xl text-2xl my-4 text-center">Sponsors & Partners</h4>
          {/* Sponsor Card */}
          <section className="flex flex-wrap justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
