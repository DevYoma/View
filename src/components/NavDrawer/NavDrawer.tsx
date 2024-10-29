import { Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
// import "./LPNavDrawer.scss";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavDrawer.scss";
import Logo from "../../atoms/Logo/Logo";
import CompanyIcon from "../../assets/companyLogo.png";
import DocumentIcon from "../../assets/documentLogo.png";
import ServiceIcon from "../../assets/serviceLogo.png";
import ComplianceIcon from "../../assets/complianceLogo.png";
import BookIcon from "../../assets/booksLogo.png";
import MoneyIcon from "../../assets/moneyLogo.png";
import SidebarFooterLogo from "../../assets/sidebarFooterLogo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
   const [selected, setSelected] = useState(1)
    const [links] = useState([
      {
        id: 1,
        text: "Dashboard",
        icon: DocumentIcon,
      },
      {
        id: 2,
        text: "Company",
        icon: CompanyIcon,
      },
      {
        id: 3,
        text: "Documents",
        icon: DocumentIcon,
      },
      {
        id: 4,
        text: "Services",
        icon: ServiceIcon,
      },
      {
        id: 5,
        text: "Compliance",
        icon: ComplianceIcon
      },
      {
        id: 6,
        text: "Books",
        icon: BookIcon
      },
      {
        id: 7,
        text: "Money",
        icon: MoneyIcon
      },
    ]);
  return (
    <div className="lpNavDrawer">
      <IconButton
        edge="end"
        sx={{ width: "54px", height: "54px" }}
        aria-label="logo"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        {isDrawerOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        // className="navDrawer__container"
      >
        <Box
          sx={{
            // background: "blue", 
            minHeight: "100%"
          }}
          // p={2}
          width={"60vw"}
          textAlign="left"
          role="presentation"
        >
          <div className="navSidebar">
            <div className="navSidebarLogo">
              <Logo />
            </div>

            <div className="navSidebarItems">
              {links.map((link) => (
              <div
                key={link.id}
                className={`navSidebarItem ${selected === link.id ? "active" : ""}`}
                onClick={() => setSelected(link.id)}
              >
                <img src={link.icon} alt={link.text} />
                <span>{link.text}</span>
              </div>
              ))}
            </div>

            <div className="navSidebarFooter">
              <img src={SidebarFooterLogo} alt="footer" />
              <span>X.Y.Z LLC</span> <KeyboardArrowDownIcon />
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
