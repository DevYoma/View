import { Box, IconButton } from "@mui/material";
import SearchBar from "../../../atoms/SearchBar/SearchBar";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PhoneIcon from "@mui/icons-material/Phone";
import "./CNav.scss";
import UserProfile from "../../../atoms/UserProfile/UserProfile";

const CNav = () => {
  return (
    <nav className="cNav">
      <h1 className="cNavLeft">Business Overview & Visa Requirements</h1>

      <div className="cNavRight">
        <div className="cNavRightSearch">
            <SearchBar />
        </div>
        <div className="cNavRightIcons">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
                aria-label="notifications"
                size="large"
                sx={{
                background: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "15px",
                }}
            >
                <NotificationsActiveOutlinedIcon />
            </IconButton>

            <IconButton
                aria-label="notifications"
                size="large"
                sx={{
                background: "rgba(46, 149, 244, 1)",
                color: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "15px",
                }}
            >
                <PhoneIcon />
            </IconButton>
            </Box>
        </div>
        <div className="CNavRightProfile">
            <UserProfile username="ZY" styles={{ width: "fit-content" }}/>
        </div>
      </div>
    </nav>
  );
}

export default CNav