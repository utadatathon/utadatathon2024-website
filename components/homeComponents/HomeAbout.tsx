export default function HomeAbout() {
  return (
    <section className="md:p-12 p-6 text-complementary">
      <div className="flex flex-col flex-grow rounded-3xl p-4 mx-auto w-full sm:w-4/5">
        <h1 className="md:text-4xl text-2xl font-bold my-4 text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent p-12">About UTA Datathon</h1>

        <div className="text-justify md:text-base text-sm p-4">
          The UTA Datathon is an annual 24-hour event organized by the University of Texas at Arlington, engaging more than 200 students. The students will utilize their analytical skills along with data to address challenges selected by the candidate and more. Scheduled for 200 students. The Students will utilize their analytical skills to address realworld data problems along with data to address challenges selected by the candidate and more. Scheduled for April 13th -14th at the University of Texas at Arlington, the event will have participants from diverse majors, particularly those in Computer Science, Data Science, Information Systems, Math, and Statistics majors from UTA and other universities such as UTD, UNT, and local community colleges. Our goal is to foster interdisciplinary collaboration among students across various majors through the lens of data. <br />
          <br />
          Check us out on Github{' '}
          <a
            href="https://github.com/utadatathon"
            className="underline"
            target=" "
          >
            UTA Datathon Github
          </a>
          !
        </div>
      </div>
    </section>
  );
}
