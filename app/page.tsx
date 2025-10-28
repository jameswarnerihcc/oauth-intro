'use client'

import {
  useUser
} from '@clerk/nextjs'

export default function Home() {

  const { user } = useUser();

  return (
    <div>
      <h1>{user ? "Hello,  " + user.firstName + "!" : "Please sign-in"}</h1>
    
    </div>
  );
}
