import Header from "../../Components/landing/Header";
import Footer from "../../Components/landing/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPageMainBody from "../../Components/landing/LandingPageMainBody";
import LandingPageSearchPage from "../../Components/landing/LandingPageSearchPage";
import LandidngPageSubjectsPage from "../../Components/landing/LandidngPageSubjectsPage";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPageMainBody />} />
        <Route path="/search" element={<LandingPageSearchPage />} />
        <Route
          path="/subjects/:category/:level?"
          element={<LandidngPageSubjectsPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default LandingPage;
