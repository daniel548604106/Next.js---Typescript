import React from 'react';
import InboxIcon from '../public/images/svg/inbox.svg';
import ContactIcon from '../images/svg/contact.svg';
import MessageIcon from '../images/svg/message.svg';
import SavedIcon from '../images/svg/saved.svg';
import AnalyticIcon from '../images/svg/analytics.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

const sidebarTabs = [
  {
    name: 'Home',
    icon: InboxIcon,
    href: '/',
  },
  {
    name: 'Inbox',
    icon: InboxIcon,
    href: '/inbox',
  },
  {
    name: 'Contacts',
    icon: ContactIcon,
    href: '/contacts',
  },
  {
    name: 'Messages',
    icon: MessageIcon,
    href: '/messages',
  },
  {
    name: 'Saved',
    icon: SavedIcon,
    href: '/saved',
  },
  {
    name: 'Analytics',
    icon: AnalyticIcon,
    href: '/analytics',
  },
];

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-between">
      <ul>
        {sidebarTabs.map(({ name, icon, href }) => (
          <li>
            <Link href={href}>
              <a>
                <Image
                  width={40}
                  height={40}
                  alt={name}
                  src={icon}
                  className="w-10 h-10 text-white"
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col"></div>
    </div>
  );
};

export default SideBar;
