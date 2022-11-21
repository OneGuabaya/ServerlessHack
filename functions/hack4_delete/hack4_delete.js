const output = require("@output");

const handler = async (event) => {
  if (event.httpMethod == "DELETE") {
    return output({"content":"delete"});
  }
}

module.exports = { handler }
