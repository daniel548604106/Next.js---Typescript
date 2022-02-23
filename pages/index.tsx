import Head from 'next/head';
import { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { useState } from 'react';
import Header from '../components/home/Header';
import StatusCard from '../components/home/StatusCard';
import TopSellingCard from '../components/home/TopSellingCard';

import SalesOrderCard from '../components/home/SalesOrderCard';
import PurchaseOrderCard from '../components/home/PurchaseOrderCard';
import SalesOrderSummary from '../components/home/SalesOrderSummary';

import { SALES_ORDER_DATA } from '../mock/home';
import ItemTable from '../components/home/ItemTable';
import CardWrapper from '../components/common/CardWrapper';

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
      <div className="px-10 py-5 bg-gray-100 space-y-10">
        <Header />
        <section className="grid grid-cols-4 gap-10">
          {statusData.map(({ title, type, number }) => (
            <StatusCard title={title} type={type} number={number} />
          ))}
          {statusData.map(({ title, type, number }) => (
            <StatusCard title={title} type={type} number={number} />
          ))}
        </section>
        <section className="grid h-[500px] gap-10 grid-cols-4">
          <CardWrapper
            title="Latest Sales Orders - By sales channel"
            className="col-span-2 gap-10"
          >
            <SalesOrderCard />
          </CardWrapper>
          <CardWrapper suffix={<div />} title="Purchase orders">
            <PurchaseOrderCard />
          </CardWrapper>
          <CardWrapper suffix={<div />}>
            <TopSellingCard />
          </CardWrapper>
        </section>
        <section>
          <CardWrapper>
            <SalesOrderSummary />
          </CardWrapper>
        </section>
        <section className="grid grid-cols-2 gap-10">
          <CardWrapper>
            <ItemTable />
          </CardWrapper>
          <CardWrapper>
            <ItemTable />
          </CardWrapper>
        </section>
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
