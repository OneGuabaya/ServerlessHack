const output = require("@output");

const handler = async (event) => {
  let {
    httpMethod: method,
    queryStringParameters: q
    } = event;

  const Lista = ["foo","bar","baz","qux","fred"]
 
    if (method == "GET") {

      if(Lista.find(element => element == q.payload))

      return output(q);

     }

     return output({"payload":"not found"})
}

module.exports = {handler}