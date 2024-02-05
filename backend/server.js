// server.js
const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const app = express();
const connectDB = require('./config/db');

const port = 8080;

const recruiterv1=require("./routes/recruiterv1");
const companyv1=require("./routes/companyv1");
const sendEmail=require("./routes/sendEmail");

connectDB();

//middlewares
app.use(morgan("dev"));
app.use(cors());
// Serving static files json
app.use(express.json());
app.use("/api/v1/recruiter", recruiterv1);
app.use("/api/v1/company",companyv1);
app.use("/api/v1/mail",sendEmail);

// Starting the server
app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`.green.white);
});
