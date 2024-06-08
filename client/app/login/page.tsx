import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { LuArrowLeftSquare } from "react-icons/lu";
import { submitLogin, submitSigninEmailandPassword } from "../_lib/actions";
import { auth } from "../_lib/auth";

export default async function Page() {
  const session = await auth();
  if (session?.user) {
    redirect("/account");
  }
  return (
    <div className="h-screen w-full  flex justify-center items-center gap-4">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px]"></div>
      <div className=" flex flex-col justify-center items-start gap-4">
        <Link href="/" className="text-white">
          <LuArrowLeftSquare className="text-3xl" />
        </Link>
        <h1 className="text-white text-xl">Sign In</h1>
        <div className="gap-4 flex justify-normal items-center flex-col bg-zinc-900 px-8 py-4 rounded-lg">
          <form action={submitLogin}>
            <button className="flex justify-center items-center gap-8 border border-white px-8 py-2 rounded-lg hover:bg-blue-100 hover:text-black text-xl text-white transition-all duration-500">
              <span>
                <FaGoogle />
              </span>
              <span className="">Sign in with Google</span>
            </button>
          </form>
          <p className="text-white">or</p>
          <form
            action={submitSigninEmailandPassword}
            className="flex flex-col gap-2 bg-zinc-800 p-8 rounded-lg justify-center items-center"
          >
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              name="email"
              className="px-4 py-2 rounded-lg text-xl bg-zinc-700"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="px-4 py-2 rounded-lg text-xl bg-zinc-700"
            />
            <input
              type="submit"
              value="submit"
              className="bg-zinc-900 w-[100px] px-3 py-2 font-bold rounded-lg hover:bg-zinc-500 transition-all duration-500 text-white hover:text-black"
            />
          </form>

          <div className="flex gap-4">
            <p className="text-blue-100">{`dont't have an account ? `}</p>
            <Link className="text-white" href="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
