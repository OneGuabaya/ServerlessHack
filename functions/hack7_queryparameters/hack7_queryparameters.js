const output = require("@output");

const handler = async (event) => {

   let {
    httpMethod: method,
    queryStringParameters: q
    } = event;

   if (method == "GET") {
   return output(q);
  }
  return output({})
}

module.exports = { handler }