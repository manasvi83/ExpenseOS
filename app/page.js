// import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { FAQSection, Footer } from "./_components/Footer";
import Tools from "./_components/Tools.jsx";


export default function Home() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Tools/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
