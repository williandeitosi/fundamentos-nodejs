import http from "node:http";
import { Transform } from "node:stream";

class TransformaInfo extends Transform {
  _transform(chunk, encoding, callback) {
    const invertNumbers = Number(chunk.toString()) * -1;

    console.log(invertNumbers);

    callback(null, Buffer.from(String(invertNumbers)));
  }
}

const server = http.createServer(async (req, res) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  const fullBuffer = Buffer.concat(buffers).toString();

  console.log(fullBuffer);

  return res.end(fullBuffer);
});

server.listen(3334, () => {
  console.log(`Server is Running`);
});
