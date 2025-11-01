import Search from './components/search';

export default async function Home() {

  return (
    // TODO: Prevent searching unless the user us signed in (see README )
    // TODO: Replace hard-coded username with actual signed-in user's name (see README)
    <Search username="James"/>
  );
}
