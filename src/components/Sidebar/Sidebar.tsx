import { useState } from 'react';
import Logo from '../../atoms/Logo/Logo';
import './Sidebar.scss';
import CompanyIcon from "../../assets/companyLogo.png";
import DocumentIcon from "../../assets/documentLogo.png"
import ServiceIcon from "../../assets/serviceLogo.png";
import ComplianceIcon from "../../assets/complianceLogo.png";
import BookIcon from "../../assets/booksLogo.png";
import MoneyIcon from "../../assets/moneyLogo.png";
import SidebarFooterLogo from "../../assets/sidebarFooterLogo.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Sidebar = () => {
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
        route: "/company"
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
    <div className="sidebar">
      <div className="sidebarLogo">
        <Logo />
      </div>

      <div className="sidebarItems">
        {links.map((link) => (
          <div
            key={link.id}
            className={`sidebarItem ${selected === link.id ? "active" : ""}`}
            onClick={() => setSelected(link.id)}
          >
            <img src={link.icon} alt={link.text} />
            <span>{link.text}</span>
          </div>
        ))}
      </div>

      <div className="sidebarFooterLogo">
        <img src={SidebarFooterLogo} alt="footer" />
        <span>X.Y.Z LLC</span> <KeyboardArrowDownIcon />
      </div>
    </div>
  );
}

export default Sidebar