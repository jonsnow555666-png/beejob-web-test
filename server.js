const http = require("http");

const port = process.env.PORT || 3000;
const release = process.env.RELEASE_NAME || "A";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      status: "healthy",
      release
    }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <!doctype html>
    <html>
      <head>
        <title>BeeJob Web Test</title>
      </head>
      <body>
        <h1>BeeJob Web Service</h1>
        <h2>Release ${release}</h2>
        <p>Running successfully on BeeJob Cloud.</p>
      </body>
    </html>
  `);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`BeeJob test server listening on ${port}`);
});