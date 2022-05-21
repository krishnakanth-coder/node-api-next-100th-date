const app = require("./app.js");
const { addDays, formatRelative, format } = require("date-fns");

app.get("/", (request, response) => {
  const result = formatRelative(addDays(new Date(), 100), new Date());
  let next_100th_date = format(new Date(result), "dd-MM-yyyy");

  response.send(next_100th_date);
});

app.listen(3000);
