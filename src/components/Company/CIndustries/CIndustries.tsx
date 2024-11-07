import React, { useState, useEffect } from "react";
import CustomButton from "../../../atoms/Button/CustomButton";
import "./CIndustries.scss";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import CharacterCount from "../../CharacterCount/CharacterCount";
import { Button, IconButton } from "@mui/material";
import Footer from "../../Footer/Footer";
import { getIndustryLists } from "../../../services/api";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

type IndustryAPIType = {
  _id: string; 
  id: number;
  name: string;
}

const CIndustries = () => {
  const [textAreaText, setTextAreaText] = useState("");
  const [visaNumber, setVisaNumber] = useState(0);
  const [lists, setLists] = useState<IndustryAPIType[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
  ];

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await getIndustryLists();
        setLists(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching packages:", err);
      }
    };

    fetchPackages();
  }, []);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaText(e.target.value);
  };

   const handleIndustryClick = (industryName: string) => {
     setSelectedIndustries(
       (prevSelected) =>
         prevSelected?.includes(industryName)
           ? prevSelected.filter((item) => item !== industryName) // Remove if already selected
           : [...prevSelected, industryName] // Add if not selected
     );
   };


  return (
    <div className="CIndustries">
      <p className="CIndustriesHeader">
        Please Select the Industries/Sectors Aligned with Your Business
      </p>

      {/* I need to have a div here, now what that div would do is onclick of any button, it shows the clicked list here */}
      <div className="CIndustriesSelected">
        {selectedIndustries.length > 0
          ? selectedIndustries.map((industry, index) => (
              <CustomButton
                key={index}
                children={industry}
                variant="selectedIndustry"
                icon={<ClearIcon />}
                onClick={() => handleIndustryClick(industry)} // Deselect on click & try to update active state
              />
            ))
          : // <p>No industries selected</p>
            null}
      </div>

      <div className="CIndustriesList">
        {lists.map((list) => (
          <CustomButton
            key={list.id}
            children={list.name}
            variant="primary"
            icon={<AddIcon />}
            activeIcon={<CheckIcon />}
            onClick={() => handleIndustryClick(list.name)}
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
                boxShadow: "none",
              }}
            >
              Cost: $00.00
            </Button>
          </div>
        </div>

        <div className="CIndustriesUae">
          <h1>Do you wish to sell or buy goods and services within U.A.E</h1>

          <div>
            <CustomButton children="Yes" variant="primary" />
            <CustomButton children="No" variant="primary" />
          </div>
        </div>

        <div className="CIndustriesOptions">
          {/* <BasicCheckboxes /> */}
          <div className="checkbox-container">
            {options.map((option, index) => (
              <label key={index} className="checkbox-label">
                <input type="checkbox" className="checkbox-input" />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="CIndustriesLocation">
          <h1>Do you have a location in mind</h1>
          {/* The below should be a select fieldd */}
          <CustomButton children="Yes" variant="primary" />
        </div>

        <div className="CIndustriesTurnover">
          <h1>Will your company's turnover exceed 3 million AED?</h1>
          <div>
            <CustomButton children="Yes" variant="primary" />
            <CustomButton children="No" variant="primary" />
            <CustomButton children="Not sure" variant="primary" />
          </div>
        </div>
      </div>

      <Footer isButtonAvailable={true} />
    </div>
  );
}

export default CIndustries