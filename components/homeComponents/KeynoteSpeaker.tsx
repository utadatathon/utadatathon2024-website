import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'firebase/storage';
import firebase from 'firebase';

/**
 * Keynote Speaker card for landing page.
 */
export default function KeynoteSpeaker(props) {
  const [imageLink, setImageLink] = useState();

  useEffect(() => {
    if (props.imageLink !== undefined) {
      const storageRef = firebase.storage().ref();
      storageRef
        .child(`speaker_images/${props.imageLink}`)
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
    <div className="group flex flex-col items-center w-72 h-72 sm:h-80 rounded-xl shadow-xl relative transition duration-500 ease-in-out overflow-hidden bg-secondary text-white">
      <div className="rounded-t-sm">
        {props.imageLink !== undefined && imageLink !== undefined && (
          <Image
            src={imageLink}
            // make sure width and height matches width and height of parent div
            width={350}
            height={350}
            objectFit="cover"
            alt=""
          />
        )}
      </div>
      <div className="flex-col items-center justify-center w-full h-72 sm:h-80 absolute">
        <div className="rounded-b-sm bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-800 p-2 font-semibold">
          <h1 className="text-lg font-extrabold p-2 text-center text-complementary bg-gradient-to-br from-fuchsia-300 to-purple-200 bg-clip-text text-transparent">{props.name}</h1>
          <h1 className="text-base mt-2 p-2">{props.subtitle}</h1>
          {/* show description on hover by sliding up */}
          <div className="sm:h-72 h-80 text-justify font-normal overflow-y-scroll p-2">
            <p className="text-[13px] pt-2 pb-24 sm:pb-10">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
