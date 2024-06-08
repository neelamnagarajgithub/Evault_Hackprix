"use client";
import { ethers } from "ethers";
import { providers } from "ethers";
import { abi } from "./key";
import { useState } from "react";
import { toggleTypeOfView } from "@/app/_store/slice";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function VerifyDoc() {
  const dispatch = useDispatch();
  const [certificateid, setCertificateID] = useState("");
  const [onsuccessfulVerify, setOnSuccessfulVerify] = useState(false);
  const [txx, setTxx] = useState(null);

  const NFTViewOwner = async (e) => {
    try {
      e.preventDefault();
      await window.ethereum.request({ method: "eth_requestAccounts" });
      let provider = new providers.Web3Provider(window.ethereum);
      let signer = provider.getSigner();
      const contractABI = abi;
      const contractAddress = "0x69A9C4d84E14762DE925d3502aAC02Cf3a76230D";
      let contract = new ethers.Contract(contractAddress, contractABI, signer);
      const tx = await contract.viewOwner(certificateid);
      console.log(tx);
      toast.success("Verified the certificate!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTxx(tx);
      setOnSuccessfulVerify(true);
    } catch (e) {
      console.log("This is Not Belongs to you");
    }
  };

  return (
    <div className="flex gap-10 justify-center items-center">
      <div className=" bg-neutral-900 px-10 py-5 rounded-lg flex flex-col justify-center items-start gap-8">
        <button
          onClick={() => {
            dispatch(toggleTypeOfView());
          }}
        >
          <VscChromeClose className=" text-white text-3xl" />
        </button>
        <form className="flex justify-center flex-col items-center gap-8">
          <label
            htmlFor="certificateID"
            className="text-white text-2xl font-bold"
          >
            Certificate ID
          </label>
          <input
            type="text"
            name="certificateID"
            placeholder="Certificate ID: "
            required
            value={certificateid}
            onChange={(e) => {
              setCertificateID(e.target.value);
            }}
            className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
          />
          <button
            className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
            onClick={NFTViewOwner}
          >
            Verify Document
          </button>
        </form>
      </div>
      {onsuccessfulVerify && (
        <div className="bg-neutral-900 text-white px-5 py-3 rounded-lg flex flex-col gap-6 justify-center items-start">
          <p className="text-xl font-bold">
            Name:{" "}
            <span className=" text-xl font-bold text-blue-400">
              {txx.username}
            </span>
          </p>
          <p className="text-xl font-bold">
            Email:{" "}
            <span className=" text-xl font-bold text-blue-400">
              {txx.email}
            </span>
          </p>
          <p className="text-xl font-bold">
            Certificate ID:{" "}
            <span className=" text-xl font-bold text-blue-400">
              {txx._tokenId._hex}
            </span>
          </p>
          <p className="text-xl font-bold">
            User Address:{" "}
            <span className=" text-xl font-bold text-blue-400">
              {txx._useraddr}
            </span>
          </p>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
