import CaseStudy from "@/components/CaseStudy";
import Header from "@/components/Header";
import Testimonial2 from "@/components/Testimonial2";
import Podcast from "@/components/Podcast";
import Services from "@/components/Services";
import Footer from "@/components/footer/Footer";
import "slick-carousel/slick/slick.css";        // Main Slick CSS
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
   <div className="overflow-hidden ">
    
   
    <Header/>
    <Services/>
    <Testimonial2/>
    <CaseStudy/>
    <Podcast/>
   
    
 
  
    
    
   
   </div>
  );
}
