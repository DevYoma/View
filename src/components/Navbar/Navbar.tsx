import { Box, Button, IconButton } from "@mui/material";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import "./Navbar.scss";
import CallIcon from "@mui/icons-material/Call";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ProfileImg from "../../assets/profileImg.png";
import UserProfile from "../../atoms/UserProfile/UserProfile";
import NavDrawer from "../NavDrawer/NavDrawer";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarMobile">
        <NavDrawer />
      </div>
      <div className="navbarSearchBar">
        <SearchBar />
      </div>

      <div className="navbarConsultation">
        <Button
          variant="contained"
          startIcon={<CallIcon />}
          sx={{
            minHeight: "55px",
            backgroundColor: "#007FFF",
            color: "white",
            borderRadius: "15px",
            padding: "1rem auto",
            fontWeight: "600",
            fontSize: "18px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Book Free Consultation
        </Button>
      </div>

      <div className="navbarRight">
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            aria-label="notifications"
            size="large"
            sx={{
              background: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "15px"
            }}
          >
            <NotificationsActiveOutlinedIcon />
          </IconButton>
          {/* <Avatar sx={{ bgcolor: "#6200EE" }}>ZY</Avatar> */}
          <UserProfile 
            avatarSrc={ProfileImg}
            username="ZY"
          />
        </Box>
      </div>
    </div>
  );
}

export default Navbar