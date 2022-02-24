import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
  return (
    <div>
      Login
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default Login;