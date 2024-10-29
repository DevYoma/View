import { Button } from "@mui/material";
import "./Support.scss";
import Logo from "../Logo/Logo";

const Support = () => {
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<Logo icon />}
        sx={{
            marginTop: "-80px",
          backgroundColor: "rgba(46, 149, 244, 1)",
          color: "white",
          borderRadius: "99px",
          padding: "1rem auto",
          fontWeight: "600",
          fontSize: "20px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        }}
      >
        Support
      </Button>
    </div>
  );
}

export default Support