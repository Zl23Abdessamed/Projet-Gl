import FAQSection from './Faq';
import FeaturesSection from './Features';
import HowItWorksSection from './HowItWorks';
import TeacherQualification from './TeacherQualification';
import Search from "./SearchSection";

const LandingPageMainBody = () => {
    return (
        <>
            <Search />
            <FeaturesSection />
            <HowItWorksSection />
            <TeacherQualification />
            <FAQSection />
        </>
    )
};

export default LandingPageMainBody