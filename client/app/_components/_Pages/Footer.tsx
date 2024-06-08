import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-800 h-auto px-40 flex  py-10 flex-col justify-center items-center gap-8">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-8">
          <Link href="/about" className="text-white text-2xl font-mono">
            About
          </Link>
          <Link href="/benifit" className="text-white text-2xl font-mono">
            Benifits
          </Link>
          <Link href="/FAQ" className="text-white text-2xl font-mono">
            FAQ
          </Link>
        </div>
        <h1 className="text-white text-4xl font-mono">EVault</h1>
      </div>
      <div className="text-white text-xl">copyrights EVault&copy; </div>
    </footer>
  );
}
