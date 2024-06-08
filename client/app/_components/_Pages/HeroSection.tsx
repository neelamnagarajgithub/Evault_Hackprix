import Link from "next/link";
import { BiArrowFromLeft } from "react-icons/bi";
import herosectionimage from "@/public/herosectionimage.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen w-full">
      <div className=" h-screen w-full flex justify-center items-center px-40">
        <div className="flex gap-2 flex-col ">
          <h1 className=" text-white text-5xl font-mono font-bold ">
            Revolutionizing Legal Record Management with Blockchain Technology
          </h1>
          <p className=" text-white">
            Join us in creating a secure, transparent, and efficient eVault
            system for legal records.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className=" bg-blue-800 font-semibold font-mono text-2xl w-max px-4 py-2 rounded-lg text-white hover:bg-blue-900 transition-all duration-300 ease-in-out mt-4 flex justify-center items-center gap-1 hover:gap-2"
            >
              Get started
              <span>
                <BiArrowFromLeft />
              </span>
            </Link>
            <Link href="/about" className="text-white underline mt-2">
              Learn more
            </Link>
          </div>
        </div>
        <div className=" relative w-[1500px] h-[700px] flex justify-center items-center ">
          <Image
            src={herosectionimage}
            alt="hero-section-image"
            className="object-cover object-center w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}
