export default function HomeAbout() {
  return (
    <section className="md:p-12 p-6 text-complementary">
      <h1 className="md:text-4xl text-2xl font-bold my-4 text-center">About UTA Datathon</h1> {/* !change */}
      <div className="md:text-base text-sm">
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
    </section>
  );
}
