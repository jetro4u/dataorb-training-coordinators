import IntroSection from '../components/IntroSection';
import RequirementSection from '../components/RequirementSection';
import JobDescriptionSection from '../components/JobDescriptionSection';
import OutcomeSection from '../components/OutcomeSection';
import BenefitSection from '../components/BenefitSection';
import StepSection from '../components/StepSection';
import Footer from '../components/Footer';

const ApplySection = () => {
  return (
    <div className="bg-gray-100 w-full flex justify-center py-5">
      <div className="w-full max-w-screen-md">
        <div className="bg-white w-full p-4 rounded-lg shadow-md">
          <div className="h-8"></div>

          <div className="px-4">
            <div className="text-center">
              <p className="text-gray-700 leading-loose">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevvV8ZiO0W1dMe2VlXtbrrbWSC0XjDPqc5rtuLQkExx6K3kg/viewform?embedded=true" width="700" height="2142">Loading…</iframe>
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-11"></div>
        </div>
      </div>
    </div>
  );
};

export default function MaidenclassName() {
    return (
        <>
            <header>
		        <a href="#" className="logo"><img src="logo.png" alt="" /></a>
	        </header>
            <IntroSection />
            <RequirementSection />
            <JobDescriptionSection />
            <OutcomeSection />
            <BenefitSection />
            <StepSection />
            <ApplySection />
            <Footer />
        </>
    );
}