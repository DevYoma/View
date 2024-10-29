import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import AlertBanner from "../AlertBanner/AlertBanner";
import "./Dashboard.scss";
import PricingPackage from "../PricingPackage/PricingPackage";
import MiniPackage from "../MiniPackage/MiniPackage";
import { useLoading } from "../../context/LoadingContext";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import { useEffect, useState } from "react";
import PackageModal from "../PackageModal/PackageModal";
import CrownImg from "../../assets/crownImg.png"
import LampImg from "../../assets/lampImg.png";
import BriefCaseImg from "../../assets/briefcaseImg.png";
import FilterIcon from "../../assets/filter.png";

const Dashboard = () => {  
  const { loading, setLoading } = useLoading();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!loading && isModalOpen) {
      setTimeout(() => setIsModalOpen(true), 300); 
    }
  }, [loading, isModalOpen]);

   const handleButtonClick = () => {
     setLoading(true);
     setTimeout(() => {
       setLoading(false);
       setIsModalOpen(true); // Open the modal after loading
     }, 3000);
   };

  return (
    <div className="dashboard">
      {loading && <LoadingOverlay />}
      <PackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="dashboardSidebar">
        <Sidebar />
      </div>

      <div className="dashboardMain">
        <Navbar />
        <AlertBanner />
        <div className="dashboardMainContent">
          <PricingPackage
            onButtonClick={handleButtonClick}
            tagIcon={CrownImg}
            tagName="All Inclusive Solution"
            name="Business Elite Package"
            description="Premium business support with company setup, end-to-end compliance, accounting, and payroll solutions"
            price="7,628"
          />
          <MiniPackage
            onButtonClick={handleButtonClick}
            icon={BriefCaseImg}
            name="Incorporation Package"
            description="Effortless business setup with our all-inclusive incorporation services"
            price="770"
          />
        </div>
        <div className="dashboardMainContent">
          <PricingPackage
            onButtonClick={handleButtonClick}
            tagIcon={LampImg}
            tagName="Great for Startups"
            name="Founders Starter Package"
            description="Kickstart your business with hassle-free company registration and streamlined compliance."
            price="2,885"
          />
          <MiniPackage
            onButtonClick={handleButtonClick}
            icon={FilterIcon}
            name="Personalized Package"
            description="Design your own package with services customized for your needs."
            // price="770"
            singleButton
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard