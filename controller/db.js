const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    process.env.DB_URI,
    {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.log(error);
      }
      console.log("DB CONECTED");
    }
  );
};

module.exports = dbCon;
