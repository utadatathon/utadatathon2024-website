import { useEffect, useState } from 'react';
import MemberCards from './MemberCards';

export default function HomeTeam(props: { members: TeamMember[] }) {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    //Organize members in order by rank given in firebase
    setMembers(props.members.sort((a, b) => (a.rank > b.rank ? 1 : -1)));
  }, []);

  return (
    members.length != 0 && (
      <section className="md:p-12  p-6">
        {/* Team Members */}
        <div className="flex flex-col flex-grow rounded-3xl p-10 mx-auto w-full sm:w-4/5 bg-gradient-to-br from-slate-900 to-indigo-900">
          <div className="my-2">
            <h4 className="font-bold p-6 md:text-4xl text-2xl my-4 text-complementary text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
              Meet the Team
            </h4>{' '}
            {/* !change */}
            <div className="flex flex-wrap justify-center p-4">
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
