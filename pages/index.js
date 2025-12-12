import AnimatingLines from "@/components/AnimatingLines";
import DownArrow from "@/components/DownArrow";
import Footer from "@/components/Footer";
import PuzzleShape from "@/components/PuzzleShape";
import HeroSection from "@/sections/HeroSection";
import HorizontalScrollCarousel from "@/sections/Section1";
import Section2 from "@/sections/Section2";
import Section5 from "@/sections/Section5";
import SepacialitiesSection from "@/sections/SpecialitiesSection";


export default function Home() {
  return (
   <div>

  
    <HeroSection />
    <DownArrow />
    {/* Portfolio Preview Section */}
    <HorizontalScrollCarousel />
    {/* Animating Text Section */}
    <AnimatingLines />
    {/* Services Section */}
    <Section2 />   
    {/* Sepecialities Section */}
    <SepacialitiesSection />
    {/* Puzzle Section */}
    <PuzzleShape />
    {/* Testimonials Section */}
    <Section5 />

   </div>
  );
}
