import Challenge from "@/components/caseStudyDetail/Challenge";
import Header from "@/components/caseStudyDetail/Header";
import Solution from "@/components/caseStudyDetail/Solution";
import Result from "@/components/caseStudyDetail/Result";
import { caseStudiesData } from "@/servicedata/caseStudy";

export default function CaseStudyPage({ params }) {
  const { slug } = params;
  const caseStudy = caseStudiesData.find((study) => study.slug === slug);

  if (!caseStudy) return null;

  return (
    <div className="overflow-hidden">
      <Header caseStudy={caseStudy} />
      <Challenge challenges={caseStudy.challenges} />
      <Solution solutions={caseStudy.solutions} />
      <Result results={caseStudy.results} />
    </div>
  );
}
