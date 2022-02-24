import { useRef, useState } from 'react';

import { useSession } from 'next-auth/react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Image from 'next/image';
import useClickOutside from '@/Hooks/useClickOutside';

const dropdownOptions = [
  { label: 'hihihih', icon: '', onClick: () => console.log('hhihih') },
  { label: 'hihihih', icon: '', onClick: () => console.log('hhihih') },
  { label: 'hihihih', icon: '', onClick: () => console.log('hhihih') },
  { label: 'hihihih', icon: '', onClick: () => console.log('hhihih') },
  { label: 'hihihih', icon: '', onClick: () => console.log('hhihih') },
  { label: 'hihihih', icon: '', onClick: () => console.log('hhihih') },
];

const Header = () => {
  const { data: session, status } = useSession();

  const { name, image, email } = session.user;
  const dropDownRef = useRef(null);

  const [isDropDownVisible, setDropDownVisible] = useState(false);
  useClickOutside(
    dropDownRef,
    () => isDropDownVisible && setDropDownVisible(false)
  );

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Weekley Sumup</h1>
        <p className="text-xs text-gray-400 mt-1">
          With all of the styling tool options available in today’s market
        </p>
      </div>
      <div className="flex items-center space-x-5">
        <SearchOutlinedIcon className="cursor-pointer" />
        <WavesOutlinedIcon className="cursor-pointer" />
        <div className="bg-red-500 text-white cursor-pointer rounded-full px-2 py-1 flex items-center space-x-1">
          <NotificationsNoneOutlinedIcon />
          <p>51</p>
        </div>
        <div
          onClick={() => setDropDownVisible(true)}
          ref={dropDownRef}
          className="relative flex rounded-lg border-[1px] cursor-pointer p-2 w-[200px] border-solid border-gray-600 space-x-4 items-center"
        >
          <p className="mr-5 truncate text-lg">{name}</p>
          <Image
            className="rounded-full"
            src={image}
            alt="user-image"
            width={30}
            height={30}
          />
          {isDropDownVisible && (
            <div className="absolute w-[200px]  -bottom-10 left-0 border-[1px] border-solid border-gray-400">
              {dropdownOptions.map(({ label, icon, onClick }) => (
                <div className="" onClick={onClick}>
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
