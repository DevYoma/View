import React, { useState } from "react";
import CustomButton from "../../../atoms/Button/CustomButton";
import "./CIndustries.scss";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import CharacterCount from "../../CharacterCount/CharacterCount";
import { Button, IconButton } from "@mui/material";
import Footer from "../../Footer/Footer";

const CIndustries = () => {
    const [textAreaText,setTextAreaText] = useState("");
    const [visaNumber, setVisaNumber] = useState(0);
    const lists = [
      {
        id: 1,
        name: "Healthcare",
      },
      {
        id: 2,
        name: "Manufacturing",
      },
      {
        id: 3,
        name: "Professional Services",
      },
      {
        id: 4,
        name: "Information Technology",
      },
      {
        id: 5,
        name: "Finance and Insurance",
      },
      {
        id: 6,
        name: "Construction and Real Estate",
      },
      {
        id: 7,
        name: "Commerce and Retail",
      },
      {
        id: 8,
        name: "Education",
      },
      {
        id: 9,
        name: "Logistics and Transportation",
      },
      {
        id: 10,
        name: "Tourism and Hospitality",
      },
      {
        id: 11, 
        name: "Others"
      },
    ];

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaText(e.target.value)
    }
  return (
    <div className="CIndustries">
      <p className="CIndustriesHeader">
        Please Select the Industries/Sectors Aligned with Your Business
      </p>

      <div className="CIndustriesList">
        {lists.map((list) => (
          <CustomButton
            children={list.name}
            variant="primary"
            icon={<AddIcon />}
          />
        ))}
      </div>

      <div className="CIndustriesAbout">
        <p>
          Tell us about your business (Select the category and describe the
          business){" "}
        </p>

        <div className="CIndustriesAboutButtons">
          <CustomButton children="Goods" variant="industry" />
          <CustomButton children="Services" variant="industry" />
          <CustomButton children="Trading" variant="industry" />
        </div>

        <div className="CIndustriesAboutTextArea">
          <textarea
            placeholder="Enter your business details here...."
            onChange={handleTextChange}
            maxLength={100}
          />
          <CharacterCount value={textAreaText} />
        </div>

        <div className="CIndustriesAboutVisa">
          <p>Select number of Visa you need</p>

          <div className="CIndustriesAboutVisaContainer">
            <div>
              <IconButton onClick={() => setVisaNumber(visaNumber - 1)}>
                <RemoveIcon />
              </IconButton>
              <IconButton
                aria-label="notifications"
                size="large"
                sx={{
                  background: "white",
                  padding: "11.5px 20px",
                  borderRadius: "15px",
                }}
              >
                {visaNumber}
              </IconButton>
              <IconButton onClick={() => setVisaNumber(visaNumber + 1)}>
                <AddIcon />
              </IconButton>
            </div>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(46, 149, 244, 1)",
                color: "white",
                borderRadius: "10px",
                padding: "1rem auto",
                fontWeight: "500",
                fontSize: "18px",
                textTransform: "none",
                boxShadow: "none"
              }}
            >
              Cost: $00.00
            </Button>
          </div>
        </div>
      </div>

      <Footer isButtonAvailable={true}/>
    </div>
  );
}

export default CIndustries