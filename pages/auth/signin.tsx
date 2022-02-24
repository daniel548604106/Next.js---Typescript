import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}
export default function SignIn({ providers }) {
  const loginButtonInfo = (provider) => {
    switch (provider) {
      case 'github': {
        return {
          icon: '',
          customClass: 'bg-black text-white',
        };
        break;
      }
      case 'google':
        {
          return {
            icon: '',
            customClass: 'border-black border-solid border-[1px]',
          };
        }
        break;
      case 'email': {
        return {
          icon: '',
          customClass: 'border-black border-solid border-[1px]',
        };
        break;
      }
      default: {
        return {
          icon: '',
          customClass: 'bg-black text-white',
        };
        break;
      }
    }
  };
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-login-hero w-full bg-cover bg-no-repeat" />
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image src="/logo.png" alt="logo" width={300} height={300} />
        <h2 className="text-3xl font-bold text-center">Login</h2>
        <div className="space-y-4 w-[300px]">
          {Object.values(providers).map((provider: Provider) => {
            console.log(provider);
            return (
              <div key={provider.name}>
                <button
                  className={`${
                    loginButtonInfo(provider.id)?.customClass
                  } w-full rounded-lg p-4`}
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/
