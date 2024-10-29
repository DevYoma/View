import "./PricingPackage.scss"
import CustomButton from "../../atoms/Button/CustomButton";
import Price from "../../atoms/Price/Price";
// import { useLoading } from "../../context/LoadingContext";

type Props = {
  tagName: string;
  tagIcon: string;
  name: string;
  description: string;
  price: string;
  onButtonClick: () => void;
}

const PricingPackage = ({ tagName, tagIcon, name, description, price, onButtonClick }: Props) => {
  // const { setLoading } = useLoading();

  // const handleButtonClick = () => {
  //   setLoading(true);
  //   setTimeout(() => setLoading(false), 3000);
  // }

  return (
    <div className="pricingPackage">
      <div className="pricingPackageTag">
        <img src={tagIcon} alt={tagName} />
        <span>{tagName}</span>
      </div>

      <div className="pricingPackageDetails">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      <div className="pricingPackageFooter">
        <div>
          <CustomButton 
            children="Know more"
            variant="primary"
            onClick={onButtonClick}
          />

          <CustomButton 
            children="Buy Now"
            variant="secondary"
            onClick={onButtonClick}
          />
        </div>

        <Price amount={price} />
      </div>
    </div>
  );
}

export default PricingPackage