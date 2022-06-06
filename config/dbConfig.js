const mongoose = require("mongoose");

mongoose
   .connect(process.env.DB)
   .then(() => console.log("DB CONNECTED SUCCESSFULLY"))
   .catch((error) => {
      console.error("FAILED TO CONNECT DB");
      throw error;
   });
