"use client";
import { toggleTypeOfView } from "@/app/_store/slice";
import { RootState } from "@/app/_store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadForm from "./UploadForm";
import ViewDocument from "./ViewDocument";
import TransferDoc from "././TransferDoc";
import VerifyDoc from "./VerifyDoc";
import { IoCloudUploadSharp } from "react-icons/io5";
import { GrOverview } from "react-icons/gr";
import { RiFileTransferFill, RiVerifiedBadgeFill } from "react-icons/ri";

export default function DocumentsSection() {
  const [typeofView, setTypeOfView] = useState("");

  const isopen = useSelector((state: RootState) => state.user.showTypeOFView);

  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center h-[90vh] bg-neutral-950 w-full gap-8">
      {!isopen && (
        <div className="grid grid-cols-2 gap-8">
          <button
            className="bg-neutral-100 text-2xl px-10 py-5 rounded-lg font-bold font-mono hover:bg-neutral-900 hover:text-neutral-100 transition-colors duration-300 ease-in-out border hover:border-neutral-100 flex justify-center items-center gap-4 flex-col"
            onClick={() => {
              dispatch(toggleTypeOfView());
              setTypeOfView("upload");
            }}
          >
            <span className="p-5 rounded-lg border-2 border-neutral-900 ">
              <IoCloudUploadSharp className=" text-7xl " />
            </span>
            Upload Document
          </button>
          <button
            className="bg-neutral-100 text-2xl px-10 py-5 rounded-lg font-bold font-mono hover:bg-neutral-900 hover:text-neutral-100 transition-colors duration-300 ease-in-out border hover:border-neutral-100 flex justify-center items-center gap-4 flex-col"
            onClick={() => {
              dispatch(toggleTypeOfView());
              setTypeOfView("view");
            }}
          >
            <span className="p-5  rounded-lg border-2 border-neutral-900 ">
              <GrOverview className=" text-7xl " />
            </span>
            View Document
          </button>
          <button
            className="bg-neutral-100 text-2xl px-10 py-5 rounded-lg font-bold font-mono hover:bg-neutral-900 hover:text-neutral-100 transition-colors duration-300 ease-in-out border hover:border-neutral-100 flex justify-center items-center gap-4 flex-col"
            onClick={() => {
              dispatch(toggleTypeOfView());
              setTypeOfView("verify");
            }}
          >
            <span className="p-5  rounded-lg border-2 border-neutral-900 ">
              <RiVerifiedBadgeFill className=" text-7xl " />
            </span>
            Verify Document
          </button>
          <button
            className="bg-neutral-100 text-2xl px-10 py-5 rounded-lg font-bold font-mono hover:bg-neutral-900 hover:text-neutral-100 transition-colors duration-300 ease-in-out border hover:border-neutral-100 flex justify-center items-center gap-4 flex-col"
            onClick={() => {
              dispatch(toggleTypeOfView());
              setTypeOfView("transfer");
            }}
          >
            <span className="p-5  rounded-lg border-2 border-neutral-900 ">
              <RiFileTransferFill className=" text-7xl " />
            </span>
            Transfer Document
          </button>
        </div>
      )}
      {isopen && typeofView === "upload" && <UploadForm />}
      {isopen && typeofView === "view" && <ViewDocument />}
      {isopen && typeofView === "verify" && <VerifyDoc />}
      {isopen && typeofView === "transfer" && <TransferDoc />}
    </div>
  );
}
