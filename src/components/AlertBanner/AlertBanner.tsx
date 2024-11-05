import { Button } from "@mui/material";
import "./AlertBanner.scss";
import WarningImg from "../../assets/warningImg.png"

const AlertBanner = () => {
  return (
    <div className="alertBanner">
      <img src={WarningImg} alt="warning" />
      <p>
        Please provide your company details to seamlessly access our services.
      </p>
      <div>
        <Button
          className="alertBannerButton"
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#2A2626",
            borderRadius: "15px",
            padding: "1rem auto",
            fontWeight: "500",
            fontSize: "1rem",
            // "&:hover": {
            //   backgroundColor: "#0056b3",
            // },
          }}
        >
          Let's get started
        </Button>
      </div>
    </div>
  );
}

export default AlertBanner