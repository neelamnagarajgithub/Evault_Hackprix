import Footer from "./_components/_Pages/Footer";
import HeroSection from "./_components/_Pages/HeroSection";
import ServicesWeOfferSection from "./_components/_Pages/ServicesWeOfferSection";
import TestimonialsSection from "./_components/_Pages/TestimonialsSection";
import ContactUsButton from "./_components/contacusButton";
export default function Page() {
  return (
    <main className=" flex flex-col relative">
      <div className="top-0 left-0 absolute h-screen w-full bg-black z-[-10]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <HeroSection />
      <ServicesWeOfferSection />
      <TestimonialsSection />
      <ContactUsButton />
      <Footer />
    </main>
  );
}
