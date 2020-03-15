const express = require('express');
const app = express();

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));


require("./routes/js/routes.js")(app);
require("./routes/html/index.html")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


