export default function HomeAbout() {
  return (
    <section className="md:p-12 p-6 text-complementary">
      <div className="flex flex-col flex-grow rounded-3xl p-4 mx-auto w-full sm:w-4/5">
        <h1 className="md:text-4xl text-2xl font-bold my-4 text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent p-12 custom-font tracking-wide">About UTA Datathon</h1>

        <div className="text-justify md:text-base text-sm p-4 bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent">
          The UTA Datathon is one of the top annually run 24-hour data-based competitive events organized by the University of Texas at Arlington Libraries. With an engagement of more than 200 participants, the students will utilize their analytical skills along with data to address the given challenges. The event happening on April 13th -14th in the Nedderman Hall is open to all majors. The event will have participants from diverse majors, particularly those in Computer Science, Data Science, Information Systems, Math, and Statistics from all over the DFW area. Our goal is to foster interdisciplinary collaboration among students across various majors though the lens of data. 
          Check out our {' '}
          <a 
            href="https://www.youtube.com/watch?v=KmJYv2EQ2_8"
            className="underline text-white/50"
            target=" "
          >
            Teaser Video 
          </a> 
          {' '} and our {' '}
          <a
            href="https://github.com/utadatathon"
            className="underline text-white/50"
            target=" "
          >
            UTA Datathon Github
          </a>
          !
          <br />
          <br />
          <span className="text-bold bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">Successful projects will have the opportunity to submit their work as a publication through the UTA online repository.</span>
        </div>
      </div>
    </section>
  );
}
