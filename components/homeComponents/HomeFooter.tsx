import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { LinkedIn } from '@mui/icons-material';

export default function HomeFooter() {
  return (
    <footer className="mt-16 px-6 py-8 md:text-base text-xs bg-black text-white">
      <hr className="my-4 bg-complementary" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Event Info */}
        <div className="flex flex-col items-center md:items-start justify-center gap-2 text-complementary text-center md:text-left">
          <div className="title-container"> {/* Flex container for titles */}
            <h1 className="title text-primaryDark">&copy;</h1>
            <h1 className="title text-primaryDark h1-custom-font">UTA Datathon</h1>
            <h1 className="title text-primaryDark">2024</h1>
          </div>
        </div>

        {/* Column 2: Designed By */}
        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <div className="text-[0.6rem] md:text-sm">
            Designed by <p className="font-black inline h1-custom-font">UTA Datathon Development Team |</p>
            HackPortal developed with &lt;3 by <p className="font-black inline h1-custom-font">HackUTD</p> and{' '}
            <p className="font-black inline">ACM Development</p>
          </div>
        </div>

        {/* Column 3: Conduct Links */}
        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <a
            href="https://catalog.uta.edu/academicregulations/dishonesty/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline whitespace-nowrap h1-custom-font"
          >
            UTA Code of Conduct
          </a>
          <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:underline whitespace-nowrap h1-custom-font"
          >
            MLH Code of Conduct
          </a>
          <a
            href="https://docs.github.com/en/site-policy/github-terms/github-community-code-of-conduct"
            target="_blank"
            rel="noreferrer"
            className="hover:underline whitespace-nowrap h1-custom-font"
          >
            Github Code of Conduct
          </a>
          <a
            href="https://discord.com/guidelines"
            target="_blank"
            rel="noreferrer"
            className="hover:underline whitespace-nowrap h1-custom-font"
          >
            Discord Community Guidelines
          </a>
          <a
            href="datathon@uta.edu"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:underline h1-custom-font"
          >
            Contact Us
          </a>
        </div>

        {/* Column 4: Social Media Icons */}
        <div className="flex flex-row justify-center md:justify-start items-center space-x-6 ml-24">
          <p className="h1-custom-font">Follow us</p>
          <a
            href="https://www.instagram.com/utadatathon/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon className="footerIcon" />
          </a>
          
        </div>

      </div>
    </footer>
  );
}
