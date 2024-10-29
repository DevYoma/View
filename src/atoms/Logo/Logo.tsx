import "./Logo.scss"
import OneTapLogo from "../../assets/Logo.png";
import MiniLogo from "../../assets/miniLogo.png";
import SupportLogo from "../../assets/supportLogo.png";

type Props = {
  icon?: boolean;
}

const Logo = ({ icon=false }: Props) => {
  if(icon) {
    return (
      <div className="supportLogo">
        <img src={SupportLogo} alt="support-logo" />
      </div>
    )
  }

  return (
    <div className="logo">
        <img className="logoImg" src={OneTapLogo} alt="Logo" />
    </div>
  )
}

export default Logo