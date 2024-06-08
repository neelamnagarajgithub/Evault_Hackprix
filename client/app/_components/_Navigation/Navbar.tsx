import Link from "next/link";
import NavElements from "./NavElements";

export default function Navbar() {
  return (
    <div className="flex fixed w-full h-[10vh] backdrop-blur md:justify-between justify-center items-center text-center z-[100] left-0 top-0 flex-wrap px-40">
      <Link
        className=" text-3xl text-white ml-2 font-mono font-semibold"
        href="/"
      >
        EVault
      </Link>
      <NavElements />
      {/* <NavMobileElements /> */}
    </div>
  );
}
