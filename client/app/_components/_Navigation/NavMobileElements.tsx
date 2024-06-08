import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_store/store";

export default function NavMobileElements() {
  const isopen = useSelector((state: RootState) => state.user.showMenu);
  return (
    <div
      className={`md:hidden absolute top-[75px] w-80 h-auto flex flex-col gap-20 ml-auto justify-center items-center transition-all duration-500 ease-in ${
        isopen ? "right-0 opacity-100" : "right-[-500px] opacity-0"
      } text-white p-4  z-[99] rounded-xl backdrop-blur
  `}
    >
      <w3m-button />
      <Link
        href="/auth/google"
        className=" bg-blue-500 text-white px-4 py-2 mx-2 rounded-lg"
      >
        Login
      </Link>
    </div>
  );
}
