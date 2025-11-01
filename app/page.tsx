
import { auth, currentUser } from '@clerk/nextjs/server'
import Search from './components/search';


export default async function Home() {

  const { isAuthenticated } = await auth()
  const user = await currentUser()


  return (
    // TODO: Prevent searching unless the user us signed in
    // TODO: Replace hard-coded username with actual signed-in user's name
    <Search username={"James"}/>
  );
}
