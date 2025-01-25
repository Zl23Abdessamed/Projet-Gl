import Footer from "../../Components/main/Footer";
import MainPagesWrapper from "../../Components/main/MainRoutesWrapper";
import Sidebar from "../../Components/main/Sidebar";

const Main = () => {
  return (
    <div className="w-screen flex flex-col overflow-hidden">
      {/* Flex container for Sidebar and MainPagesWrapper */}
      <div className="flex flex-1">
        <Sidebar />
        <MainPagesWrapper />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
