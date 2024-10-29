import "./Footer.scss";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Support from "../../atoms/Support/Support";

const Footer = () => {
  return (
    <div className="footer">
      <IconButton
        style={{
          background: "#E7F0F9",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          padding: "14px 22px",
        }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>

      <Support />
    </div>
  );
}

export default Footer