import Head from 'next/head';
import { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import Header from '../components/home/Header';
import StatusCard from '../components/home/StatusCard';
import TopSellingCard from '../components/home/TopSellingCard';
import PurchaseOrderCard from '../components/home/PurchaseOrderCard';
import SalesOrderCard from '../components/home/SalesOrderCard';

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
      <div className="px-10 py-5 bg-gray-100">
        <Header />
        <div className="grid grid-cols-4 gap-10">
          {statusData.map(({ title, type, number }) => (
            <StatusCard title={title} type={type} number={number} />
          ))}
          {statusData.map(({ title, type, number }) => (
            <StatusCard title={title} type={type} number={number} />
          ))}
          <div className="col-span-2 gap-10">
            <SalesOrderCard />
          </div>
          <PurchaseOrderCard />
          <TopSellingCard />
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
