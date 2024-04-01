import { Hero, NavBar } from '@/components';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session)
    return (
      <main>
        <NavBar />
        <Hero />
      </main>
    );

  return (
    <main>
      <NavBar />
    </main>
  );
}
