// seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Package = require("./models/Package");

dotenv.config();

const seedPackages = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const packages = [
    {
      packageName: "Business Elite Package",
      packageDescription:
        "Premium business support with company setup, end-to-end compliance, accounting, and payroll solutions",
      packagePrice: 7628,
    },
    {
      packageName: "Incorporation Package",
      packageDescription:
        "Effortless business setup with our all-inclusive incorporation services",
      packagePrice: 770,
    },
    {
      packageName: "Founders Starter Package",
      packageDescription:
        "Kickstart your business with hassle-free company registration and streamlined compliance.",
      packagePrice: 2885,
    },
    {
      packageName: "Personalized Package",
      packageDescription:
        "Design your own package with services customized for your needs.",
      // packagePrice: ,
    },
  ];

  try {
    await Package.insertMany(packages);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedPackages();
