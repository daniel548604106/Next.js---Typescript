import '../styles/global.css';
import { AppProps } from 'next/app';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import Image from 'next/image';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      {session || !router.pathname.includes('signin') ? (
        <Auth>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }) {
  const { data: session, status } = useSession({ required: true });
  const isUser = !!session?.user;

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <Image src="/logo.png" alt="logo" width={500} height={500} />
      <div className="text-2xl font-semibold text-gray-400">Redirecting...</div>
    </div>
  );
}
