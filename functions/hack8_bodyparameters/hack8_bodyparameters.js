const output = require("@output");
let middy = require("middy");
let {jsonBodyParser} = require("middy/middlewares")

const bodyParemeters = async (event) => {
  let {
    httpMethod: method,
    body: q
    } = event;

    if (method == "GET") {
      return output(q);
     }
     return output({})
}

exports.handler = middy(bodyParemeters)
                    .use(jsonBodyParser())