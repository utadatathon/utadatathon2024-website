import { useEffect, useState } from 'react';
import MemberCards from './MemberCards';

export default function HomeTeam(props: { members: TeamMember[] }) {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Organize members in order by rank given in firebase
    setMembers(props.members.sort((a, b) => (a.rank > b.rank ? 1 : -1)));
  }, []);

  return (
    members.length !== 0 && (
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
          {/* Add additional source elements for other video formats if needed */}
        </video>

        {/* Content Overlay */}
        <div className="flex flex-col flex-grow rounded-3xl lg:p-10 mx-auto w-full sm:w-4/5 bg-gradient-to-b from-indigo-900 via-violet-700 to-violet-200 relative z-9">
          <div className="my-2">
            <h4 className="font-bold p-6 md:text-4xl text-2xl my-4 text-complementary text-center bg-white bg-clip-text text-transparent custom-font">
              Meet the Team
            </h4>{' '}
            <div className="flex flex-wrap justify-center lg:p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {/* Member Cards */}
                {members.map(
                  ({ name, description, linkedin, github, personalSite, fileName }, idx) => (
                    <MemberCards
                      key={idx}
                      name={name}
                      description={description}
                      fileName={fileName}
                      linkedin={linkedin}
                      github={github}
                      personalSite={personalSite}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
