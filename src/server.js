const { PORT = 5000 } = process.env;
const app = require("./app");
console.log(`goto http://localhost:${PORT} (press CTRL+C to quit)`);
const listener = () => console.log(`Listening on Port ${PORT}!`);

app.listen(PORT, listener);
