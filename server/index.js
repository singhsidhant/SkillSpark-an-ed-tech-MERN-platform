const express = require("express");
const app = express();


// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(3000, () => {
	console.log(`App is listening at 3000`);
});