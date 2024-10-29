import { IconButton } from "@mui/material";
import CustomButton from "../../atoms/Button/CustomButton";
import Price from "../../atoms/Price/Price";
import "./PackageModal.scss";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

type PackageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const PackageModal = ({ isOpen, onClose, onConfirm }: PackageModalProps) => {
    if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          <CloseIcon />
        </button>

        <table>
          <thead>
            <tr>
              <th></th>
              <th style={{ fontSize: "24px", fontWeight: "600" }}>
                Founders Starter Package
              </th>
              <th style={{ fontSize: "24px", fontWeight: "600" }}>
                Business Elite Package
              </th>
              <th style={{ fontSize: "24px", fontWeight: "600" }}>
                Incorporation Package
              </th>
            </tr>
            <tr className="tableRowWithDesign">
              <th>Price</th>
              <th>
                <Price amount="2,885" />
              </th>
              <th>
                <Price amount="7,628" styles={{ color: "#248FF2" }} />
              </th>
              <th>
                <Price amount="2,120" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Business Setup - Freezone</td>
              <td>✔️</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            {/* Add additional rows here similar to the image structure */}
            <tr>
              <td>VAT Registration</td>
              <td>✔️</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>

            <tr>
              <td>VAT Profile Amendments</td>
              <td>✔️</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>

            <tr>
              <td>Corporate Tax Registration</td>
              <td>✔️</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>

            <tr>
              <td>VAT Returns-Quarterly</td>
              <td>✔️</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>

            <tr>
              <td>Basic Books- Annually</td>
              <td>Up to 4 employees</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>

            <tr>
              <td>Professional Books & MIS - Monthly</td>
              <td>--</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>

            <tr>
              <td>VAT Consultancy</td>
              <td>✔️</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
          </tbody>

          <tfoot>
            <td
              style={{
                textAlign: "left",
              }}
            >
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
            </td>
            <td>
              <CustomButton children="Buy Now" variant="secondary" onClick={() => {
                onConfirm();
                onClose();
              }}/>
            </td>
            <td>
              <CustomButton children="Buy Now" variant="secondary" />
            </td>
            <td>
              <CustomButton children="Buy Now" variant="secondary" />
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default PackageModal