// seedLists.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const List = require("./models/listModel"); // Import listModel

dotenv.config();

const seedLists = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Lists data
  const lists = [
    { id: 1, name: "Healthcare" },
    { id: 2, name: "Manufacturing" },
    { id: 3, name: "Professional Services" },
    { id: 4, name: "Information Technology" },
    { id: 5, name: "Finance and Insurance" },
    { id: 6, name: "Construction and Real Estate" },
    { id: 7, name: "Commerce and Retail" },
    { id: 8, name: "Education" },
    { id: 9, name: "Logistics and Transportation" },
    { id: 10, name: "Tourism and Hospitality" },
    { id: 11, name: "Others" },
  ];

  try {
    await List.insertMany(lists); // Insert data into the "lists" collection
    console.log("List data seeded successfully.");
  } catch (error) {
    console.error("Error seeding list data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedLists();
