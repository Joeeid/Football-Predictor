import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const YOUR_API_KEY = "b31bd953f3mshc3882e09f24bcc5p1c10a4jsncd8e06b94690";
var fedFilter = "all";
var matchFilter;

app.use(
	"/bootstrap",
	express.static(__dirname + "/node_modules/bootstrap/dist/")
);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
	var options, federations, matches, accuracy, errors;

	options = {
		method: "GET",
		url: "https://football-prediction-api.p.rapidapi.com/api/v2/list-federations",
		headers: {
			"X-RapidAPI-Key": YOUR_API_KEY,
			"X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		federations = response.data.data;
	} catch (error) {
		console.error(error);
		if (error.response) errors = error.response.statusText;
	}

	options = {
		method: "GET",
		url: "https://football-prediction-api.p.rapidapi.com/api/v2/predictions",
		params: {
			federation: fedFilter === "all" ? "" : fedFilter,
		},
		headers: {
			"X-RapidAPI-Key": "b31bd953f3mshc3882e09f24bcc5p1c10a4jsncd8e06b94690",
			"X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		matches = response.data.data;
	} catch (error) {
		console.error(error);
		if (error.response) errors = error.response.statusText;
	}

	options = {
		method: "GET",
		url: "https://football-prediction-api.p.rapidapi.com/api/v2/performance-stats",
		headers: {
			"X-RapidAPI-Key": "b31bd953f3mshc3882e09f24bcc5p1c10a4jsncd8e06b94690",
			"X-RapidAPI-Host": "football-prediction-api.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		accuracy = response.data.data.accuracy.yesterday;
	} catch (error) {
		console.error(error);
		if (error.response) errors = error.response.statusText;
	}

	res.render("index.ejs", {
		federations: federations,
		selectedFederation: fedFilter,
		matches: matches,
		error: errors,
		selectedMatch: matchFilter,
		accuracy: accuracy,
	});

	fedFilter = "all";
	matchFilter = "";
	errors = "";
});

app.post("/filter", (req, res) => {
	fedFilter = req.body.federation;
	res.redirect("/");
});

app.post("/predict", async (req, res) => {
	matchFilter = req.body.match;
	res.redirect("/");
});

app.listen(port, () =>
	console.log(`Football Predictor App listening on port ${port}!`)
);
