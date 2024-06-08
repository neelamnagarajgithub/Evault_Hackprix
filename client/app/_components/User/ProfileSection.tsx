"use client";

import { getUser } from "@/app/_lib/actions";
import { useEffect, useState } from "react";

export default function ProfileSection() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    image: string;
    password: string;
  }>({
    name: "",
    email: "",
    image: "",
    password: "",
  });
  useEffect(() => {
    async function getSession() {
      try {
        const session = await getUser();
        setUser({
          name: session?.name,
          email: session?.email,
          image: session?.image,
        });
        console.log(session);
      } catch (err) {
        console.log(err);
      }
    }
    getSession();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-neutral-950 w-full gap-8">
      <div className="flex flex-col items-center justify-center gap-8 bg-neutral-900 px-8 py-4 rounded-lg">
        <img
          src={user.image}
          alt="profile photo"
          className=" w-[120px] h-[120px] rounded-full flex justify-center items-center text-white"
        />
        <form className=" flex flex-col gap-4 justify-center items-center">
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor="name" className="text-white text-base">
              UserName:{" "}
            </label>
            <input
              name="name"
              type="text"
              value={user.name}
              className=" bg-white text-neutral-900 px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out w-full"
              required
              disabled
              readOnly
            />
          </div>
          <div className="flex gap-2 justify-between items-center w-full">
            <label htmlFor="name" className="text-white text-base">
              Email:{" "}
            </label>
            <input
              name="email"
              type="text"
              value={user.email}
              className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
              required
              disabled
              readOnly
            />
          </div>
          <div className="flex gap-2 justify-between items-center w-full">
            <label htmlFor="name" className="text-white text-base">
              Password:{" "}
            </label>
            <input
              name="password"
              type="password"
              value={user.password}
              className=" bg-white text-neutral-900 w-full px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-100 transition-colors duration-300 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className=" bg-neutral-800 text-white w-fit px-3 py-2 rounded-lg font-bold font-mono hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
