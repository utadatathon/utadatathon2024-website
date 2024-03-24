import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotesIcon from '@material-ui/icons/Notes';
import { useAuthContext } from '../lib/user/AuthContext';

/**
 * Component properties for a ProfileDialog.
 */
interface ProfileDialogProps {
  /**
   * A callback triggered when the dialog should be dismissed.
   */
  onDismiss: () => void;
}

const ROLE_MAPPINGS: Record<UserPermission, string> = {
  hacker: 'Hacker',
  admin: 'Event Administrator',
  sponsor: 'Event Sponsor',
  organizer: 'Event Organizer',
  super_admin: 'Super Admin',
  judge: 'Judge',
};

/**
 * A dialog that has quick links to actions in the app.
 *
 * It supports:
 * - Link to profile
 * - Sign in/Sign out
 */
export default function ProfileDialog({ onDismiss }: ProfileDialogProps) {
  const { user, isSignedIn, hasProfile } = useAuthContext();
  let name: string;
  let role: string;
  if (user != null) {
    const { firstName, lastName, permissions } = user;

    name = firstName !== null ? `${firstName} ${lastName}` : '';
    // TODO: Come up with more robust way of implementing this
    role = permissions && permissions.length > 0 ? ROLE_MAPPINGS[permissions[0]] : 'Hacker';
  } else {
    name = 'Guest';
    role = 'User';
  }

  return (
    <div className="profileDialog absolute top-14 right-4 min-w-xl max-w-64 shadow-md rounded-xl backdrop-blur-sm bg-customBackground/80 text-white z-99">
      {/* TODO: Don't show specific UI unless signed in */}
      <div className="flex p-3">
        {/* TODO: Handle default undefined photo URL with default */}
        {user && user.photoUrl && (
          <Image
            className="rounded-full object-cover"
            src={user.photoUrl}
            height={64}
            width={64}
            alt="Your profile"
          />
        )}
        {(isSignedIn && (
          <div className="ml-4 py-2 mr-4">
            <div className="text-lg font-bold">{name}</div>
            <div className="text-md">{role}</div>
          </div>
        )) || (
          <div className="p-4 text-lg font-bold">
            Sign in to check in, see dashboard and more!
          </div>
        )}
      </div>
      {(isSignedIn && (
        <>
          <div onClick={onDismiss}>
            <Link href="/profile">
              <a className="block p-4 hover:bg-indigo-800">
                <NotesIcon />
                <span className="ml-4">{hasProfile ? 'Your profile' : 'Register'}</span>
              </a>
            </Link>
          </div>
          <div className="rounded-b-md" onClick={onDismiss}>
            <Link href="/auth/signOut">
              <a className="block p-4 hover:bg-indigo-800 rounded-b-md">
                <ExitToAppIcon />
                <span className="ml-4">Sign out</span>
              </a>
            </Link>
          </div>
        </>
      )) || (
        <div className="rounded-b-md" onClick={onDismiss}>
          <Link href="/auth">
            <a className="block p-4 hover:bg-indigo-800 rounded-b-md">
              {/* TODO: Swap with better icon */}
              <ExitToAppIcon />
              <span className="ml-4">Sign in</span>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
