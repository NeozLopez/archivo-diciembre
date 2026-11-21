const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8080;
const root = __dirname;
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".mp4": "video/mp4"
};

http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const relativePath = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.resolve(root, `.${decodeURIComponent(relativePath)}`);

  if (!filePath.startsWith(root)) {
    response.writeHead(403).end("Acceso denegado");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === "ENOENT" ? 404 : 500).end("Archivo no encontrado");
      return;
    }
    response.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    response.end(content);
  });
}).listen(port, () => console.log(`Sitio disponible en http://localhost:${port}`));
