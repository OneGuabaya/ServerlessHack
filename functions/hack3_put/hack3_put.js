const output = require("@output");

const handler = async (event) => {
  if (event.httpMethod == "PUT") {
    return output({"content":"put"});
  }
}

module.exports = { handler }
