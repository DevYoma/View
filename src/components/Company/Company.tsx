import CIndustries from "./CIndustries/CIndustries"
import CNav from "./CNav/CNav"
import "./Company.scss"
import { CProgressBar } from "./CProgressBar/CProgressBar"

const Company = () => {
  return (
    <div className="company">
      <CNav />
      <CProgressBar />
      <CIndustries />
    </div>
  )
}

export default Company