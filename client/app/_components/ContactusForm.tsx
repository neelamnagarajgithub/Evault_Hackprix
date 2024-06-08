"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../_store/store";
import { toggleContactForm } from "../_store/slice";

export default function ContactusForm() {
  const isopen = useSelector((state: RootState) => state.user.showContactForm);
  const dispatch = useDispatch();
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      console.log(form.current);
      emailjs
        .sendForm("service_b5xlxs5", "template_x4r0u0w", form.current, {
          publicKey: "VtJk5G7bgbHiWSaxi",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            (e.target as HTMLFormElement).reset();
            dispatch(toggleContactForm());
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div className="flex justify-center items-center flex-col gap-8">
      <h1 className="text-white">Contact us</h1>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex justify-center items-center flex-col gap-8"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="text-xl p-2 bg-blue-100 rounded-lg "
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="user_email"
          className="text-xl p-2 bg-blue-100 rounded-lg "
          required
        />
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          placeholder="Message"
          className="text-xl p-2 bg-blue-100 rounded-lg "
          required
        ></textarea>
        <button
          type="submit"
          className=" bg-blue-500 font-mono text-xl px-4 py-2 rounded-lg hover:bg-blue-950 hover:text-white transition-all duration-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
