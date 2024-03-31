import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function HomeFooter() {
  return (
    <section className="px-6 py-8 md:text-base text-xs">
      <hr className="my-4 bg-complementary/90" />
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-2 lg:gap-32 lg:w-4/5 mx-auto text-complementary/75 lg:text-left text-center lg:p-6  p-2">
        <div className="lg:w-1/2 lg:ml-4">
          <div className="text-base md:text-lg">
            {" "}
            &copy; <span className="custom-font">UTA Datathon</span>
          </div>
          <br />
          <div className="text-[0.6rem] md:text-sm">
            Designed & Developed by{" "}
            <p className="font-black inline">UTA Datathon Development Team</p>{" "}
            <br />
            {/* PLEASE DO NOT CHANGE <3 */}
            HackPortal developed with &lt;3 by{" "}
            <p className="font-black inline">HackUTD</p> and{" "}
            <p className="font-black inline">ACM Development</p>
            {/* PLEASE DO NOT CHANGE <3 */}
          </div>
        </div>

        <div className=" lg:w-1/2 lg:ml-16 flex flex-col items-right">
          <a
            href="https://catalog.uta.edu/academicregulations/dishonesty/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline  whitespace-nowrap"
          >
            UTA Code of Conduct
          </a>
          <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:underline  whitespace-nowrap"
          >
            MLH Code of Conduct
          </a>
          <a
            href="https://docs.github.com/en/site-policy/github-terms/github-community-code-of-conduct"
            target="_blank"
            rel="noreferrer"
            className="hover:underline  whitespace-nowrap"
          >
            Github Code of Conduct
          </a>
          <a
            href="https://discord.com/guidelines"
            target="_blank"
            rel="noreferrer"
            className="hover:underline  whitespace-nowrap"
          >
            Discord Community Guidelines
          </a>
          <a
            href="mailto:datathon@uta.edu"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:underline md:mr-8 mb-2"
          >
            Contact Us
          </a>
          {/* Social icons */} {/* !change */}
          <div className="space-x-8 > * + *">
            {/* <a href="" rel="noopener noreferrer" target="_blank">
              {/* <TwitterIcon className="footerIcon" /> */}
            {/* </a> */}
            <a
              href="https://www.instagram.com/utadatathon/"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block"
            >
              <InstagramIcon
                className="footerIcon "
                style={{ height: "1rem", width: "1rem" }}
              />
            </a>
            <a
              href="https://github.com/utadatathon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubIcon
                className="footerIcon"
                style={{ height: "1rem", width: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
