const output = require("@output");

const handler = async (event) => {
  if (event.httpMethod == "GET") {
    return output({"content":"get"});
  }

  return output({})
}

module.exports = { handler }