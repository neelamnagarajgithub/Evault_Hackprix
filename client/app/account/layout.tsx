import SideBar from "./SideBar";

export default function AccoutnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="flex justify-between items-center gap-8 px-20 h-screen w-full">
        <div className="top-0 left-0 absolute h-screen w-full bg-black z-[-10]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff16_1px,transparent_1px),linear-gradient(to_bottom,#ffffff16_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <SideBar />
        {children}
      </div>
    </section>
  );
}
