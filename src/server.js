const app = require("./index");
const connect = require("./configs/db");

app.listen(process.env.PORT||8080, async function () {
  await connect();
  console.log("listening on port 8080");
});
