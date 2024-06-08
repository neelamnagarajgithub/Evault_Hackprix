"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../_store/store";
import { toggleContactForm } from "../_store/slice";
import { GrContact } from "react-icons/gr";
import ContactusForm from "./ContactusForm";

export default function ContactUsButton() {
  const isopen = useSelector((state: RootState) => state.user.showContactForm);
  const dispatch = useDispatch();

  function handleMenu() {
    console.log(isopen);
    dispatch(toggleContactForm());
  }
  return (
    <>
      <div className=" fixed z-[100] right-0 bottom-0 m-12">
        <div className="bg-blue-400 px-4 py-2 rounded-lg text-2xl font-mono font-semibold hover:bg-blue-950 hover:text-white transition-all duration-500">
          <button onClick={handleMenu}>
            <GrContact />
          </button>
        </div>
      </div>
      <div
        className={`fixed z-[100] bottom-0 m-24 backdrop-blur w-[500px] h-[600px] ${
          isopen ? "right-0" : "right-[-600px]"
        } transition-all duration-500 flex justify-center items-center border border-[rgba(240,240,240,0.25)] rounded-lg`}
      >
        <ContactusForm />
      </div>
    </>
  );
}
