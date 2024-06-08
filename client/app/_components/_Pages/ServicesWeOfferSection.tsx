import Image from "next/image";
import ServicesweofferImage from "@/public/ServicesweofferImage.png";

export default function ServicesWeOfferSection() {
  return (
    <section className="">
      <div className="h-screen w-full bg-black">
        <Image
          src={ServicesweofferImage}
          alt="Services we offer"
          className="h-full w-full object-contain object-center z-[15]"
        />
      </div>
    </section>
  );
}
