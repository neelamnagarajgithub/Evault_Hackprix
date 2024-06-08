"use client";
import {
  setFile,
  setFileUrl,
  setUploadLoading,
  setUploaded,
  setUserEmail,
  setUserName,
  setUserWalletAddress,
  toggleTypeOfView,
} from "@/app/_store/slice";
import { RootState } from "@/app/_store/store";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ethers } from "ethers";
import { providers } from "ethers";
import { abi } from "./key";
import { ToastContainer, toast } from "react-toastify";

export default function UploadForm() {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);
  const email = useSelector((state: RootState) => state.user.email);
  const walletaddress = useSelector(
    (state: RootState) => state.user.walletaddress
  );
  const file = useSelector((state: RootState) => state.user.file);
  const fileUrl = useSelector((state: RootState) => state.user.fileUrl);
  const uploaded = useSelector((state: RootState) => state.user.uploaded);
  const uploadLoading = useSelector(
    (state: RootState) => state.user.uploadLoading
  );

  async function uploadFiles(e) {
    try {
      e.preventDefault();
      dispatch(setUploadLoading());

      const fileData = new FormData();
      fileData.append("file", file);

      const responseData = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: fileData,
        headers: {
          pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
          "Content-Type": "multipart/form-data",
        },
      });

      const fileURL = "https://ipfs.io/ipfs/" + responseData.data.IpfsHash;
      console.log(fileURL);
      dispatch(setFileUrl(fileURL));
      NFTmint(fileURL);
      dispatch(setUploadLoading());
      dispatch(setUploaded());
      toast.success("File uploaded succesfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err: any) {
      console.log(err.message);
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  const NFTmint = async (fileUrl) => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    let provider = new providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    const contractABI = abi;
    const contractAddress = "0x69A9C4d84E14762DE925d3502aAC02Cf3a76230D";
    let contract = new ethers.Contract(contractAddress, contractABI, signer);
    const tx = await contract.awardDoc(walletaddress, username, email, fileUrl);
    const receipt = await tx.wait();
    const tokenId = receipt.events ? receipt.events[0].args.tokenId : null;
    console.log(tokenId);
    toast.success(`File Token ID: ${tokenId._hex}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className=" bg-neutral-900 px-10 py-5 rounded-lg flex flex-col justify-center items-start gap-8">
      <button
        onClick={() => {
          dispatch(toggleTypeOfView());
        }}
      >
        <VscChromeClose className=" text-white text-3xl" />
      </button>
      <form
        onSubmit={uploadFiles}
        className="flex flex-col gap-8 justify-center items-center"
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          value={username}
          onChange={(e) => {
            dispatch(setUserName(e.target.value));
            console.log(username);
          }}
          className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          required
          onChange={(e) => {
            dispatch(setUserEmail(e.target.value));
            console.log(email);
          }}
          className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
        />
        <input
          type="text"
          name="walletaddress"
          placeholder="Wallet address"
          value={walletaddress}
          required
          onChange={(e) => {
            dispatch(setUserWalletAddress(e.target.value));
            console.log(walletaddress);
          }}
          className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
        />
        <input
          type="file"
          name="file"
          id="file"
          required
          className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
          onChange={(e) => {
            if (e.target.files.length > 0) {
              dispatch(setFile(e.target.files[0]));
            }
          }}
        />

        {uploadLoading == true ? (
          <button
            disabled
            className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
          >
            Uploading Files... Please Wait
          </button>
        ) : uploaded == false ? (
          <button
            type="submit"
            className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
          >
            Upload Files to IPFS
          </button>
        ) : (
          <button className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out">
            Files uploaded Successfully.
          </button>
        )}
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
  );
}
