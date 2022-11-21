const output = require("@output");
const middy = require ("middy")
const {jsonBodyParser} = require("middy/middlewares")

const fnFindBody = async (event) => {

  let {
    httpMethod: method,
    body: q
    } = event;

  const Lista = ["foo","bar","baz","qux","fred"]
 
    if (method == "GET") {

      if(Lista.find(element => element == q.payload))

      return output(q);

     }

     return output({"payload":"not found"})
}

exports.handler = middy(fnFindBody)
                    .use(jsonBodyParser())