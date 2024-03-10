export default function HomeAbout() {
  return (
    <section className="md:p-12 p-6 text-complementary">
      <div className="flex flex-col flex-grow rounded-3xl p-10 mx-auto w-full sm:w-4/5">
        <h1 className="md:text-4xl text-2xl font-bold my-4 text-center bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent p-12">About UTA Datathon</h1>

        <div className="md:text-base text-sm p-4">
          TO BE CHANGED. <br />
          <br />A few of its features include: A fully customizable front end, sign in with email/
          Google, hacker registration, images, challenges, sponsors, FAQ and more fetched from
          backend, push notifications, a spotlight carousel highlighting ongoing events, QR code check
          in and swag claims, report submission/ Ask a question, a built-in and easy to set up
          schedule, Hacker, Admin, and Super Admin roles, an Admin console to send announcements,
          update user roles, show number of check-ins, swag claims, and more!. <br />
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
