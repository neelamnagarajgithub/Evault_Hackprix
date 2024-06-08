"use client";
import { ethers } from "ethers";
import { providers } from "ethers";
import { abi } from "./key";
import { useDispatch } from "react-redux";
import { toggleTypeOfView } from "@/app/_store/slice";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShareDocument() {
  const dispatch = useDispatch();
  const [certificateid, setCertificateid] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [succesfullTransfer, setSuccesfullTransfer] = useState(false);
  const NFT_Transfer = async (e) => {
    e.preventDefault();
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      let provider = new providers.Web3Provider(window.ethereum);
      let signer = provider.getSigner();
      const contractABI = abi;
      const contractAddress = "0x69A9C4d84E14762DE925d3502aAC02Cf3a76230D";
      let contract = new ethers.Contract(contractAddress, contractABI, signer);
      const tx = await contract.transferDoc(
        walletAddress,
        parseInt(certificateid)
      );
      console.log(tx);
      setSuccesfullTransfer(true);
      toast.success("Your certificate has been transfered!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (e) {
      if (
        e.reason ===
          "execution reverted: ERC721: caller is not token owner or approved" ||
        e.reason ===
          "execution reverted: ERC721: transfer caller is not owner nor approved"
      ) {
        toast.error("You are not the owner of the certificate.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="flex justify-center items-center gap-10">
      <div className=" bg-neutral-900 px-10 py-5 rounded-lg flex flex-col justify-center items-start gap-8">
        <button
          onClick={() => {
            dispatch(toggleTypeOfView());
          }}
        >
          <VscChromeClose className=" text-white text-3xl" />
        </button>
        <form className="flex flex-col gap-8 justify-center items-center">
          <label
            htmlFor="certificateID"
            className="text-white text-xl font-bold"
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
              setCertificateid(e.target.value);
            }}
            className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
          />
          <label
            htmlFor="certificateID"
            className="text-white text-xl font-bold"
          >
            Wallet Address
          </label>
          <input
            type="text"
            name="certificateID"
            placeholder="Wallet Address: "
            required
            value={walletAddress}
            onChange={(e) => {
              setWalletAddress(e.target.value);
            }}
            className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
          />
          <button
            className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
            onClick={NFT_Transfer}
          >
            Transfer Certificate
          </button>
        </form>
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
      {succesfullTransfer && <div className="bg-red-500">afasf</div>}
    </div>
  );
}
