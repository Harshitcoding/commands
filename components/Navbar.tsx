import Link from "next/link";
import Image from "next/image";
import { SignIn } from "./auth/signin-button";
import { auth } from "@/lib/auth";
import { SignOut } from "./auth/signout-button";

const Navbar = async () => {
  const session = await auth();
  
  return (
    <div>
      <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
        <Link href="/" className="bg-gradient-to-b from-amber-50 to-slate-700 bg-clip-text text-3xl font-bold text-transparent">
          Commands
        </Link>
        <div className="flex items-center space-x-4 ">
        
          {session?.user ? (
            <>
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name || "Profile Picture"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              
              <SignOut />
              {session?.user?.email === process.env.ADMIN_ID && (
                <Link href="/create-post">
                  Create
                </Link>
              )}
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
