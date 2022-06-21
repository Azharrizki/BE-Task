const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");
const handleErrors = require("./middlewares/errorHandler");

const app = express();
const port = 3001;

// Connection URL
const url =
	"mongodb+srv://azharrizki7834:azhar7834@cluster0.xsn42.mongodb.net/?retryWrites=true&w=majority";

// Database Name
const dbName = "blogDB";

app.use(bodyParser.urlencoded({ extended: true }));

const client = new MongoClient(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
	const articleCollection = client.db(dbName).collection("articles");
	const commentCollection = client.db(dbName).collection("comments");

	app.locals.articleCollection = articleCollection;
	app.locals.commentCollection = commentCollection;
});

app.use(cors());

app.use("/", routes);

app.use(handleErrors);

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
