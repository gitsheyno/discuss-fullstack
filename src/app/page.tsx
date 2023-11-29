import { Button } from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from "@/actions";
import Profile from "@/components/Profile";
export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign out</Button>
      </form>
      {session?.user ? <div>Signed in</div> : <div>Signed out</div>}
      <Profile />
    </div>
  );
}
