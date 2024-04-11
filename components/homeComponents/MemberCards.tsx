import { useEffect, useState } from 'react';
import 'firebase/storage';
import firebase from 'firebase';
import Image from 'next/image';
import defaultPFP from '../../public/assets/defaultPFP.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';

/**
 * card for each member of the team
 */

export default function MemberCards(props) {
  const [imageLink, setImageLink] = useState();

  useEffect(() => {
    if (props.fileName !== undefined) {
      const storageRef = firebase.storage().ref();
      storageRef
        .child(`member_images/${props.fileName}`)
        .getDownloadURL()
        .then((url) => {
          setImageLink(url);
        })
        .catch((error) => {
          console.error('Could not find matching image file');
        });
    }
  }, []);

  return (
    <div className="lg:w-52 w-40 mb-5 md:mx-3 mx-1 flex flex-col items-center justify-center text-center">
      {/* Profile Image */}
      <div className="rounded-full">
        <Image
          className="rounded-full object-cover"
          src={props.fileName !== undefined && imageLink !== undefined ? imageLink : defaultPFP}
          height={120}
          width={120}
          alt="Team Member Profile Picture"
          layout="fixed"
        />
      </div>
      {/* Main Body */}

      <h1 className="text-md font-black text-center opacity-80 bg-gradient-to-tl from-fuchsia-300 to-fuchsia-500 bg-clip-text text-transparent  ">{props.name}</h1>
      <p className="text-xs font-semibold bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent">{props.description}</p>
      <div className=" text-complementary flex justify-left space-x-2 > * + *">
        {props.github !== undefined && (
          <a href={props.github} target="_blank" rel="noreferrer">
            <GitHubIcon style={{ fontSize: 'large' }} />
          </a>
        )}
        {props.linkedin !== undefined && (
          <a href={props.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon style={{ fontSize: 'x-large' }} />
          </a>
        )}
        {props.personalSite !== undefined && (
          <a href={props.personalSite} target="_blank" rel="noreferrer">
            <PersonIcon style={{ fontSize: 'x-large' }} />
          </a>
        )}
      </div>
    </div>
  );
}
