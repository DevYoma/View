import axios from 'axios';

export const getPackages = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/packages');  
    return response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error;
    // return []
  }
};

export const getIndustryLists = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/industries');
    return response.data;
  } catch (error) {
    console.error("Error fetching lists:", error);
    throw error; 
  }
};