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
import RadioInput from "../../../atoms/RadioInput/RadioInput";
import axios from "axios";

type IndustryAPIType = {
  _id: string; 
  id: number;
  name: string;
}

type FormData = {
  selectedIndustries: string[];
  aboutBusiness: string;
  textAreaText: string;
  visaNumber: number;
  uae: string;
  optionsbox: string[];
  locations: string[];
  turnOver: string;
}

const CIndustries = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [aboutBusiness, setAboutBusiness] = useState(""); // For Goods, Services, Trading
  const [textAreaText, setTextAreaText] = useState("");
  const [visaNumber, setVisaNumber] = useState(0);
  const [uae, setUae] = useState(""); // Yes or No for selling/buying within U.A.E.
  const [optionsbox, setOptionsbox] = useState<string[]>([]); // For checkboxes
  const [locations, setLocations] = useState<string[]>([]);
  const [locationInput, setLocationInput] = useState<string>("");
  const [turnOver, setTurnOver] = useState(""); // Yes, No, Not Sure for turnover
  const [lists, setLists] = useState<IndustryAPIType[]>([]);

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

    const handleIndustryClick = (industry: string) => {
      setSelectedIndustries((prevIndustries) =>
        prevIndustries.includes(industry)
          ? prevIndustries.filter((item) => item !== industry)
          : [...prevIndustries, industry]
      );
    };

  const handleAboutBusinessChange = (value: string) => {
    setAboutBusiness(value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaText(e.target.value);
  };

  const handleUaeChange = (value: string) => {
    setUae(value);
  };

  const handleTurnOverChange = (value: string) => {
    setTurnOver(value);
  };
  
  // const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setLocations((prevLocations) => [...prevLocations, value]);
  // };

  const handleAddLocation = () => {
    if (locationInput.trim() !== "") {
      // Add location to the locations array
      setLocations((prevLocations) => [
        ...prevLocations,
        locationInput.trim(),
      ]);
      setLocationInput(""); // Clear the input field after adding
    }
  };

  const handleRemoveLocation = (loc: string) => {
    setLocations((prevLocations) =>
      prevLocations.filter((location) => location !== loc)
    );
  };

  // Handle Checkbox options
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setOptionsbox((prevOptions) =>
      checked ? [...prevOptions, value] : prevOptions.filter((option) => option !== value)
    );
  };


  // Submit handler (for demonstration)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Collect data into an object or use the state variables directly
    const formData: FormData = {
      selectedIndustries,
      aboutBusiness,
      textAreaText,
      visaNumber,
      uae,
      optionsbox,
      locations,
      turnOver,
    };

    
    for (const [key, value] of Object.entries(formData)) {
      if (!value || value === "") {
        alert(`Please fill in the ${key} field.`);
        return;
      }
    }

    // implement logic for val. checkboxes

    console.log("Form Submitted with data:", formData);
    // Implement submission logic here

    try {
      const response = await axios.post(
        "http://localhost:5000/api/business",
        formData
      );
      console.log("Response:", response.data);

      if (response.status === 201) {
        alert("Data submitted successfully");
      } else {
        alert("Failed to save data!");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("An error occured while submitting the form");
    }
  };

  return (
    <form className="CIndustries" onSubmit={handleSubmit}>
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
          <RadioInput
            name="about"
            options={[
              { label: "Goods", value: "goods" },
              { label: "Services", value: "services" },
              { label: "Trading", value: "trading" },
            ]}
            selectedValue={aboutBusiness}
            onChange={handleAboutBusinessChange}
          />
        </div>

        <div className="CIndustriesAboutTextArea">
          <textarea
            placeholder="Enter your business details here...."
            value={textAreaText}
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
      </div>

      <div className="CIndustriesUae">
        <p>Do you wish to sell or buy goods and services within U.A.E?</p>

        <div>
          <RadioInput
            name="uae"
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            selectedValue={uae}
            onChange={handleUaeChange}
          />
        </div>
      </div>

      <div className="CIndustriesOptions">
        <p>Do you wish to have any of the following?</p>
        {/* <BasicCheckboxes /> */}
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              value="Retail Shop"
              checked={optionsbox.includes("Retail Shop")}
              onChange={handleOptionChange}
            />
            {"Retail Shop"}
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              value="Virtual Office Space"
              checked={optionsbox.includes("Virtual Office Space")}
              onChange={handleOptionChange}
            />
            {"Virtual Office Space"}
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              value="Physical Office Space"
              checked={optionsbox.includes("Physical Office Space")}
              onChange={handleOptionChange}
            />
            {"Industrial Area"}
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              value="Warehouse"
              checked={optionsbox.includes("Warehouse")}
              onChange={handleOptionChange}
            />
            {"Warehouse"}
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              value="None"
              checked={optionsbox.includes("None")}
              onChange={handleOptionChange}
            />
            {"Physical Office Space"}
          </label>

          <label className="checkbox-label">
            <input type="checkbox" className="checkbox-input" />
            {"None"}
          </label>
        </div>
      </div>

      <div className="CIndustriesLocation">
        <p>Do you have any preferred location in mind?</p>
        {/* have a details icon beside the above */}

        {/* <RadioInput
          name="location"
          options={[{ label: "Yes", value: "yes" }]}
          selectedValue={locations.length > 0 ? "yes" : ""}
          onChange={handleLocationChange}
        /> */}

        {/* location add button*/}
        <div className="location-container">
          <small>Location</small>
          <div>
            <div className="location-containerInput">
              <input
                type="text"
                placeholder="Add Location"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
              />
              {locations.length > 0 && (
                <div className="added-locations">
                  {/* <p>Added Locations:</p> */}
                  {locations?.map((loc, index) => (
                    <div key={index} className="location-item">
                      <span>{loc}</span>
                      <IconButton onClick={() => handleRemoveLocation(loc)}>
                        <ClearIcon />
                      </IconButton>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* create a selectable boolean prop, and make Icon and {...others} not change if selectable */}

            <CustomButton
              children="Add"
              icon={<AddIcon />}
              variant="formSelect"
              onClick={handleAddLocation}
              // selectable={true} // write this again
            />

            {/* <button onClick={handleAddLocation}>Add</button> */}
          </div>
        </div>
      </div>

      <div className="CIndustriesTurnover">
        <p>Will your company's turnover exceed 3 million AED?</p>
        <div>
          <RadioInput
            name="turnover"
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
              { label: "Not Sure", value: "not-sure" },
            ]}
            selectedValue={turnOver}
            onChange={handleTurnOverChange}
          />
        </div>
      </div>

      {/* <button type="submit">Save</button> */}
      <CustomButton 
        children="Save" 
        variant="secondary" 
        type="submit"
        style={{
          marginBottom: "1rem"
        }}
      />

      <Footer isButtonAvailable={true} />
    </form>
  );
}

export default CIndustries