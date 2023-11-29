"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div> User is signes in a client comp</div>;
  }
  return (
    <div>
      <h1>User is Not Signed in a client comp</h1>
    </div>
  );
}
