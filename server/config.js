const config = {
    useJSON: true, // Toggle between true (JSON files) and false (MongoDB)
    mongoURI: 'mongodb://localhost:27017/easyshop', // MongoDB connection string , need to replace with correct string . ALso need to hide it.
    jsonFilePath: './data/items.json', // Path to the JSON file. Not sure if we will need it here
  };
  
  module.exports = config;
  