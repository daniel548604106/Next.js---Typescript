import Head from 'next/head';
import { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { SessionProvider, signIn, useSession } from 'next-auth/react';

import { useState } from 'react';
import Header from '../components/common/Header';
import CardWrapper from '@/Components/common/CardWrapper';
import ItemTable from '@/Components/common/ItemTable';
import ProgressBar from '@/Components/common/ProgressBar';
import CreditCardsCard from '@/Components/home/CreditCardsCard';

const STATUS_DATA = [
  {
    title: 'To be fulfilled',
    type: 'fulfilled',
    number: 56,
  },
  {
    title: 'To be Invoiced',
    type: 'invoiced',
    number: 24,
  },
  {
    title: 'Completed',
    type: 'completed',
    number: 516,
  },
  {
    title: 'Assigned to me',
    type: 'assgigned',
    number: 3,
  },
];

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const [statusData, setStatusData] = useState(STATUS_DATA);
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="px-10 py-5 space-y-10">
        <button onClick={() => signIn()}>Sign in</button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex-1 space-y-10">
            <CardWrapper
              className="text-xl font-bold"
              title="Cards"
              suffix={<div />}
            >
              <CreditCardsCard />
            </CardWrapper>

            <CardWrapper
              className="text-xl font-bold"
              title="Transaction history"
              suffix={<div />}
            >
              <ItemTable />
            </CardWrapper>
          </div>
          <div className="">
            <div className="">
              <h2 className="text-2xl font-bold">Goals</h2>
              <div className="overflow-x-auto flex py-2 gap-2 flex-nowrap">
                {Array.from({ length: 12 }).map(() => (
                  <div className="card min-w-[180px] h-[250px]">
                    <h2 className="text-xl font-semibold">$550</h2>
                    <p className="text-xs text-gray-400">12/20/20</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Outcome Statistics</h2>
              {Array.from({ length: 3 }).map(() => (
                <ProgressBar percentage={92} color="red" />
              ))}
            </div>
          </div>
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
