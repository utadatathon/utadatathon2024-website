import UserList from '../adminComponents/UserList';
import { Tab } from '@headlessui/react';
import { RegistrationState } from '../../lib/util';
import { CheckIcon, SearchIcon, XIcon } from '@heroicons/react/solid';

interface AllUsersAdminViewProps {
  users: UserIdentifier[];
  selectedUsers: string[];
  searchQuery: string;
  registrationState: RegistrationState;
  onUpdateRegistrationState: (newState: RegistrationState) => void;
  onUserClick: (id: string) => void;
  onUserSelect: (id: string) => void;
  onAcceptReject: (status: string) => void;
  onSearchQueryUpdate: (searchQuery: string) => void;
}

export default function AllUsersAdminView({
  users,
  selectedUsers,
  onUserClick,
  onUserSelect,
  onAcceptReject,
  searchQuery,
  onSearchQueryUpdate,
  registrationState,
  onUpdateRegistrationState,
}: AllUsersAdminViewProps) {
  return (
    <div className={`h-full px-14  text-sm md:text-bas mt-8`}>
      {/* Top Bar with Status, Search, and Filters */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-col lg:flex-row  justify-between items-center w-full">
          {/* Search User */}
          <div className="relative icon flex flex-row justify-center items-center w-full lg:w-1/2">
            <input
              type="text"
              className="absolute rounded-lg bg-secondary w-full border-none text-black placeholder:text-black/70"
              placeholder="Search Users"
              value={searchQuery}
              onChange={(e) => {
                onSearchQueryUpdate(e.target.value);
              }}
            />
            <div className="absolute right-4">
              <SearchIcon className="w-6 h-6 text-black/70" />
            </div>
          </div>

          {/* Status (Close Registration / Live Registration) */}
          {/* <div className="flex flex-row justify-center items-center w-5/12">
            <div>Close Registration</div>
            <div>Live Registration</div>
          </div> */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full mt-8 lg:mt-0">
            <Tab.Group
              selectedIndex={registrationState === RegistrationState.OPEN ? 1 : 0}
              // manual
              onChange={(idx) => {
                onUpdateRegistrationState(
                  idx === 0 ? RegistrationState.CLOSED : RegistrationState.OPEN,
                );
              }}
            >
              <Tab.List className="flex flex-row justify-center items-center w-full lg:mt-0 mt-6">
                <div className="bg-gradient-to-br from-purple-900 to-indigo-600 rounded-full text-primaryDark rounded-full">
                  <Tab
                    className={`rounded-full font-bold ${
                      registrationState === RegistrationState.CLOSED
                        ? 'text-secondary'
                        : 'hover:brightness-90 text-primaryDark'
                    } py-2 px-4`}
                  >
                    Close Registration
                  </Tab>
                  <Tab
                    className={`rounded-full font-bold${
                      registrationState === RegistrationState.OPEN
                        ? ' text-secondary'
                        : 'hover:brightness-90 text-primaryDark'
                    } py-2 px-4`}
                  >
                    Live Registration
                  </Tab>
                </div>
              </Tab.List>
            </Tab.Group>

            {/* Accept Reject buttons */}
            <div className="flex flex-row w-full justify-around max-w-xs mt-4 mt-8 lg:mt-0">
              <button
                className="flex flex-row bg-gradient-to-br from-orange-700 to-red-900 text-white text-lg font-bold py-2 px-8 rounded-md hover:brightness-90"
                onClick={() => onAcceptReject('Rejected')}
              >
                <XIcon className="w-6 h-6 mr-1 mt-0.5" /> Reject
              </button>
              <button
                className="flex flex-row bg-gradient-to-br from-green-600 to-emerald-900 text-white items-center text-lg font-bold py-2 px-8 rounded-md hover:brightness-90"
                onClick={() => onAcceptReject('Accepted')}
              >
                <CheckIcon className="w-6 h-6 mr-1 mt-0.5" />Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* User Table List */}
      <div
        className="rounded-lg border-1 border-gray mt-5 mb-10 overflow-y-scroll bg-white/90"
        style={{ height: 'calc(100% - 100px)' }}
      >
        {/* Header */}
        <div
          className={`flex flex-row border-b-2 border-gray px-6 py-3 bg-white justify-between sticky top-0`}
        >
          <div className="w-1/2 font-bold md:w-2/12">Name</div>
          <div className="w-1/2 font-bold md:w-2/12">Status</div>
          <div className="w-4/12 font-bold hidden md:block">University</div>
          <div className="w-2/12 font-bold hidden md:block">Major</div>
          <div className="w-2/12 font-bold hidden md:block">Year</div>
        </div>

        {/* User List */}
        <UserList
          users={users}
          selectedUsers={selectedUsers}
          onUserClick={(id) => onUserClick(id)}
          onUserSelect={(id) => onUserSelect(id)}
        />
      </div>
    </div>
  );
}
