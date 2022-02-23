import Head from 'next/head';
import { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import { useState } from 'react';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const [isTabDrawerOpen, setIsTabDrawerOpen] = useState(true);

  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex">
        <div
          className={`${
            isTabDrawerOpen ? 'w-64' : 'w-0'
          } transform transition-all duration-500  overflow-hidden`}
        >
          <div>sfsdf</div>
        </div>
        <div className="flex-auto bg-green-200 overflow-y-auto flex">
          <div className="bg-red-300 min-w-[250px] flex-1">
            <button onClick={() => setIsTabDrawerOpen(!isTabDrawerOpen)}>
              click
            </button>
          </div>
          <div className="bg-yellow-300 flex-[2] h-screen flex flex-col">
            <div className="bg-white flex items-center p-3">
              <div>
                <h2>Ikola</h2>
                <p>Add conversation title</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {Array.from({ length: 100 }).map(() => (
                <div>sdfsdfd</div>
              ))}
            </div>
            <div className="h-[200px] bg-white"></div>
          </div>
          <div className="bg-green-300 min-w-[250px] flex-1">sdffd</div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
