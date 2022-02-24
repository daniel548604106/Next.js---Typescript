import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import SideBar from './common/SideBar';
import Header from './common/Header';

const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        <div className=" fixed left-0 top-0 w-16 bottom-0 border-1 border-solid border-black">
          <SideBar />
        </div>
        <div className="left-16 h-[70px] z-50 border-b-[1px] border-solid border-gray-200 fixed top-0 right-0 bg-white">
          <Header />
        </div>
        <main className="fixed left-16 right-0 bottom-0 overflow-y-auto top-[70px]">
          {children}
        </main>
      </div>
    </div>
  );
}
