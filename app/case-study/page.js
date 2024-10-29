import Challenge from "@/components/caseStudyDetail/Challenge";
import Header from "@/components/caseStudyDetail/Header";
import Navbar from "@/components/navbar";
import Solution from "@/components/caseStudyDetail/Solution";
import Result from "@/components/caseStudyDetail/Result";

export default function Home() {
  return (
   <div className="overflow-hidden">
   
    <Header/>
    <Challenge/>
    <Solution/>
    <Result/>
    
   
   </div>
  );
}
