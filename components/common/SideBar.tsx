import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
const sidebarTabs = [
  {
    name: 'Home',
    Icon: HomeOutlinedIcon,
    href: '/',
  },
  {
    name: 'Inbox',
    Icon: AllInboxOutlinedIcon,
    href: '/inbox',
  },
  {
    name: 'Contacts',
    Icon: ContactsOutlinedIcon,
    href: '/contacts',
  },
  {
    name: 'Messages',
    Icon: MessageOutlinedIcon,
    href: '/messages',
  },
  {
    name: 'Saved',
    Icon: BookmarkBorderOutlinedIcon,
    href: '/saved',
  },
  {
    name: 'Analytics',
    Icon: BarChartOutlinedIcon,
    href: '/analytics',
  },
];

const bottomTabs = [
  {
    name: 'Exit',
    Icon: ExitToAppOutlinedIcon,
    href: '',
  },
];

const SideBar = () => {
  const router = useRouter();

  const handleBottomIconClick = (name: string, href: string) => {
    if (href) {
      return router.push(href);
    }
  };
  return (
    <div className="flex flex-col h-full items-center justify-between border-r border-solid border-gray-300 py-3">
      <ul className="space-y-3">
        {sidebarTabs.map(({ name, Icon, href }) => (
          <li className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100">
            <Link href={href}>
              <a>
                <Icon className="w-6 h-6 " />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col">
        {bottomTabs.map(({ Icon, href }) => (
          <li
            onClick={() => handleBottomIconClick(name, href)}
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100"
          >
            <Icon className="w-6 h-6 " />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
