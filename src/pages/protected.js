import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function ProtectedPage() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) signIn();
  }, [session]);

  if (!session) return <div>Loading...</div>;
  return <div>Welcome, {session.user.name}!</div>;
}