# Ancestor search OAuth demo app

This is a demo app allowing users to search the Library of Congress for newspaper articles about their ancestors. The purpose of the app is to demonstrate a basic OAuth implementation using Clerk.

## Before you start

1. Sign up for a Clerk account and make a starter app for this project
2. Select any OAuth providers you want, and include email/password as an option as well
3. With Next.js selected as the client library, copy the secret keys Clerk provides
4. Create a file called `.env` in the root of the project directory and paste those keys into the file

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## OAuth enhancement #1

In the `app/page.tsx` file, find the TODO and wrap the `<Search/>` component in Clerk's `<SignedIn>` React component. This will prevent the user for seeing the search feature until they make an account and are signed in.

Import the `SignedIn` component: 
```typescript
      import { SignedIn } from '@clerk/nextjs'
```

Wrap the `<Search>` component in the `<SignedIn>` component:
```typescript
      <SignedIn>
        <Search username={"James"}/>
      </SignedIn>
```

Sign out and verify the search functionality disappears. Sign back in and verify it reappears. 

What else might you restrict for signed-in users only?

[Signed in component docs](https://clerk.com/docs/nextjs/reference/components/control/signed-in)

## OAuth enhancement #2

We can also use Clerk's API to retrieve basic information about the signed in user. 

In the `app/page.tsx` file, import the following functions:
```typescript
   import { auth, currentUser } from '@clerk/nextjs/server'
```

Inside the `Home` function, access the current auth state and current user's information:
```typescript
  const { isAuthenticated } = await auth()
  const user = await currentUser()
```

You can replace the function to now include the authentication check, a personalized user message based on the curent user's first name, and an alternative message when no user is signed in:
```typescript
    <>
        {isAuthenticated && user ? (
            <Search username={user.firstName || "User"}/>
        ) : <h2 className='text-center font-serif text-4xl m-4'>Please sign in to unlock stories about your ancestors.</h2>}
    </>
```

The entire `app/page.tsx` should now look like:
```typescript
import { auth, currentUser } from '@clerk/nextjs/server'
import Search from './components/search';

export default async function Home() {

  const { isAuthenticated } = await auth()
  const user = await currentUser()

  return (
      <>
        {isAuthenticated && user ? (
          <Search username={user.firstName || "User"}/>
        ) : <h2 className='text-center font-serif text-4xl m-4'>Please sign in to unlock stories about your ancestors.</h2>}
      </>
  );
}
```

[Retrieving user information docs](https://clerk.com/docs/nextjs/guides/users/reading)

