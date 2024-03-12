import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { LinkedIn } from '@mui/icons-material';

export default function HomeFooter() {
  return (
    <section className=" mt-16 px-6 py-8 md:text-base text-xs">
      <hr className="my-4 bg-complementary" />
      <div className="flex flex-col items-center justify-center gap-2 text-complementary text-center">
      <div className="title-container"> {/* Flex container for titles */}
      <h1 className="title text-primaryDark ">&copy;</h1>
    <h1 className="title text-primaryDark h1-custom-font">UTA Datathon</h1>
    <h1 className="title text-primaryDark">2024</h1>
  </div>
        <div className="text-[0.6rem] md:text-sm ">
          Designed by <p className="font-black inline h1-custom-font">UTA Datathon Development Team | </p>
          {/* PLEASE DO NOT CHANGE <3 */}
          HackPortal developed with &lt;3 by <p className="font-black inline h1-custom-font">HackUTD</p> and{' '}
          <p className="font-black inline">ACM Development</p>
          {/* PLEASE DO NOT CHANGE <3 */}
        </div>

        
        <div className="flex flex-row justify-center items-center space-x-6 h1-custom-font">
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
            href="datathon@uta.edu"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:underline md:mr-8"
          >
            Contact Us
          </a>
          
          
        </div>
        {/* Social icons */} {/* !change */}
        <div className="space-x-8 > * + *">
          <a href="" rel="noopener noreferrer" target="_blank">
            <TwitterIcon className="footerIcon" />
          </a>
          <a
            href="https://www.instagram.com/utadatathon/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon className="footerIcon" />
          </a>
          <a href="" rel="noopener noreferrer" target="_blank">
            <FacebookIcon className="footerIcon" />
          </a>
          <a href="" rel="noopener noreferrer" target="_blank">
            <LinkedIn className="footerIcon" />
          </a>
        </div>
      </div>
    </section>
  );
}
