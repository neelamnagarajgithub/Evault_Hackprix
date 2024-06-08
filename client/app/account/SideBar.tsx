import Link from "next/link";
import SignOutButton from "../_components/SignOutButton";
import {
  IoArrowBackOutline,
  IoDocuments,
  IoSettingsSharp,
} from "react-icons/io5";
import { MdPerson } from "react-icons/md";

export default function SideBar() {
  return (
    <div className="bg-neutral-950 h-[90vh] w-[20vw] flex justify-center items-center px-10 py-20">
      <ul className="flex flex-col gap-4 justify-center items-start">
        <li className="text-lg mt-4 text-white">
          <Link
            href="/account/documents"
            className="flex justify-between items-center gap-3 w-full"
          >
            <span>
              <IoDocuments className="text-white" />
            </span>
            Documents
          </Link>
        </li>
        <li className="text-lg mt-4 text-white">
          <Link
            href="/account/profile"
            className="flex justify-between items-center gap-3 w-full"
          >
            <span>
              <MdPerson className="text-white" />
            </span>
            Profile
          </Link>
        </li>

        <li className="text-lg mt-4 text-white">
          <Link
            href="/account/settings"
            className="flex justify-between items-center gap-3 w-full"
          >
            <span>
              <IoSettingsSharp className="text-white" />
            </span>
            Settings
          </Link>
        </li>
        <li className="text-lg mt-4 text-white flex justify-center items-center gap-2">
          <IoArrowBackOutline className="text-white" />
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
}
