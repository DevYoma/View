import "./MiniPackage.scss";
import Price from "../../atoms/Price/Price";
import CustomButton from "../../atoms/Button/CustomButton";
// import { useLoading } from "../../context/LoadingContext";

type MiniPackageProp = {
  onButtonClick : () => void;
  price?: string;
  icon: string;
  name: string;
  description: string;
  singleButton?: boolean;
}

const MiniPackage = ({ onButtonClick, price, icon, name, description, singleButton }: MiniPackageProp) => {
    // const { setLoading } = useLoading();

    // const handleButtonClick = () => {
    //     setLoading(true);
    //     setTimeout(() => setLoading(false), 3000);
    //     console.log('miniPackage');
    // }

  return (
    <div className="miniPackage">
      <div className="miniPackageHeader">
        <img src={icon} alt="icon" />
        {price && (<Price amount={price} />)}
      </div>

      <div className="miniPackageDetails">
        <h2>{name}</h2>
        <p>
          {description}
        </p>
      </div>

      <div className="miniPackageFooter">
        {singleButton ? (
          <CustomButton 
            children="Know more"
            variant="outline"
            onClick={onButtonClick}
        />
        ) : (
          <>
            <CustomButton 
              children="Know more"
              variant="primary"
              style={{ border: "1px solid lightgrey" }} 
              onClick={onButtonClick}
            />

            <CustomButton 
              children="Buy Now" 
              variant="secondary" 
              onClick={onButtonClick}
            />
          </>
        )}
        
      </div>
    </div>
  );
}

export default MiniPackage