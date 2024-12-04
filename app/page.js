import CaseStudy from "@/components/CaseStudy";
import Header from "@/components/Header";
import Testimonial2 from "@/components/Testimonial2";
import Podcast from "@/components/Podcast";
import Services from "@/components/Services";
import Video from "@/components/videoupload/Video";
import "slick-carousel/slick/slick.css";        // Main Slick CSS
import "slick-carousel/slick/slick-theme.css";
import Booking from "@/components/callenderly/Booking";
import LogoSlider from "@/components/aboutusc/Parenter";
export default function Home() {
  return (
   <div className="overflow-hidden ">
    
   
    <Header/>
    <LogoSlider/>
    <Services/>
    <Video/>
    <Testimonial2/>
    <CaseStudy/>
    <Booking/>
    {/* <Podcast/> */}
   
    
 
  
    
    
   
   </div>
  );
}
