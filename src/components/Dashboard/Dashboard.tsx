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
import Company from "../Company/Company";
import classNames from "classnames";
import { getPackages } from "../../services/api";

type APIPackageType = {
  _id: string;
  packagePrice: string;
  packageName: string;
  packageDescription: string;
}

const Dashboard = () => {  
  const { loading, setLoading } = useLoading();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOtherContent, setShowOtherContent] = useState(false);
  const [packages, setPackages] = useState<APIPackageType[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await getPackages();
        setPackages(data);  
        console.log(data);
      } catch (err) {
        console.error("Error fetching packages:", err);
      }
    };

    fetchPackages();
  
  }, []);

  useEffect(() => {
    if (!loading && isModalOpen) {
      setTimeout(() => setIsModalOpen(true), 300); 
    }
  }, [loading, isModalOpen]);

  
  const showAlternateDashboardContent = () => {
    setShowOtherContent(true);
  };


  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(true); // Open the modal after loading
    }, 3000);
  };

  
  const dashboardClasses = classNames("dashboard", {
    alternateContent: showOtherContent,
  });

  return (
    <div className={dashboardClasses}>
      {loading && <LoadingOverlay />}
      <PackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={showAlternateDashboardContent}
      />

      <div className="dashboardSidebar">
        <Sidebar />
      </div>

      <div className="dashboardMain">
        {showOtherContent ? (
          <Company />
        ) : (
          <>
            <Navbar />
            <AlertBanner />
            <div className="dashboardMainContent">
              {packages.length > 0 && 
                packages.slice(0, 2).map((pkg, index) => {
                  return index % 2 === 0 ? (
                    <PricingPackage
                      key={pkg._id}
                      onButtonClick={handleButtonClick}
                      tagIcon={CrownImg}
                      tagName={"All Inclusive Solution"}
                      name={pkg.packageName}
                      description={pkg.packageDescription}
                      price={pkg.packagePrice}
                      isPopular={true}
                    />
                  ) : (
                    <MiniPackage
                      key={pkg._id}
                      onButtonClick={handleButtonClick}
                      icon={BriefCaseImg}
                      name={pkg.packageName}
                      description={pkg.packageDescription}
                      price={pkg.packagePrice}
                    />
                  );
                })
              }
            </div>
            <div className="dashboardMainContent">
                {packages.length > 2 &&
                  packages.slice(2).map((pkg, index) => {
                    return index % 2 === 0 ? (
                      <PricingPackage
                        key={pkg._id}
                        onButtonClick={handleButtonClick}
                        tagIcon={LampImg}
                        tagName={pkg.packageName}
                        name={pkg.packageName}
                        description={pkg.packageDescription}
                        price={pkg.packagePrice}
                      />
                    ) : (
                      <MiniPackage
                        key={pkg._id}
                        onButtonClick={handleButtonClick}
                        icon={FilterIcon}
                        name={pkg.packageName}
                        description={pkg.packageDescription}
                        price={pkg.packagePrice}
                      />
                    );
                  })}
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard