import aishaimage from "@/public/aishakhan.png";
import rajivimage from "@/public/rajivdesai.png";
import ananyaimage from "@/public/ananyagupta.png";
import vikramimage from "@/public/vikramsingh.png";
import arjunimage from "@/public/arjunsharma.png";
import priyaimage from "@/public/priyapatel.png";
import Image from "next/image";

export default function TestimonialsSection() {
  const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "Lawyer",
      review:
        "Since adopting eVault, managing client documents has become seamless. The level of security and ease of access it provides is unmatched.",
      profileImage: aishaimage,
    },
    {
      id: 2,
      name: "John Doe",
      job: "Judge",
      review:
        "eVault's integration with our existing case management system has been smooth and efficient. ",
      profileImage: rajivimage,
    },
    {
      id: 3,
      name: "Jaya Prakesh",
      job: "Client",
      review:
        "With eVault, I no longer worry about the safety of my legal documents. The platform's secure access and",
      profileImage: ananyaimage,
    },
    {
      id: 4,
      name: "Nagaraj Neelam",
      job: "Lawyer",
      review:
        "eVault has transformed how we manage legal records. It's secure, efficient, and incredibly easy to use.",
      profileImage: vikramimage,
    },
    {
      id: 5,
      name: "Nissi Bandi",
      job: "Judge",
      review:
        "The transparency and accessibility provided by eVault have significantly improved our court proceedings.",
      profileImage: priyaimage,
    },
    {
      id: 6,
      name: "Anviksha Pallati",
      job: "Client",
      review:
        "I can now access my legal documents anytime, anywhere, thanks to eVault's secure platform.",
      profileImage: arjunimage,
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center bg-black h-screen gap-8">
      <h1 className="text-4xl text-blue-100 font-bold">
        What our users are say
      </h1>
      <div className="h-auto w-full bg-black flex justify-center items-center px-40">
        <div className="flex justify-start items-center gap-4 overflow-x-auto p-2">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="ml-3 min-w-[500px] min-h-[300px] bg-zinc-800 flex flex-col justify-center items-center gap-4 p-4 rounded-lg border border-blue-100"
            >
              <p className="text-white text-xl font-mono">{`"${review.review}"`}</p>
              <div className="flex gap-8">
                <Image
                  src={review.profileImage}
                  alt="profile-image"
                  className="rounded-full h-[60px] w-[60px] object-cover"
                />
                <div>
                  <p className="text-white text-2xl font-bold">{review.name}</p>
                  <p className="text-white text-2xl font-bold">{review.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
