const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database =require("./config/database");

const userRoutes = require("./routes/user");
const cookieParser = require("cookie-parser");
const cors = require("cors");


// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

// Connecting to database
database.connect();


// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

// Setting up routes
app.use("/api/v1/auth", userRoutes);
// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});