import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function LoginandProfile() {
  const session = await auth();
  console.log(session?.user);
  if (session) {
    return (
      <Link
        href="/account"
        className=" text-white px-4 py-2 mx-2 rounded-lg text-xl font-semibold transition-all duration-300 ease-in-out flex justify-center items-center"
      >
        <img
          src={session?.user?.image}
          alt="profile image"
          //   width={20}
          //   height={20}
          referrerPolicy="no-referrer"
          className="  w-[20px] h-[20px] rounded-full object-cover mx-2"
        />
        {session?.user?.name}
      </Link>
    );
  }
  return (
    <Link
      href="/login"
      className=" bg-blue-900 text-white px-4 py-2 mx-2 rounded-lg text-xl font-semibold hover:bg-blue-950 transition-all duration-300 ease-in-out"
    >
      Login
    </Link>
  );
}
