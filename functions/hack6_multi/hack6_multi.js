const output = require("@output");

const handler = async (event) => {

   switch (event.httpMethod) {
   case 'GET':
   return output({"method":"get", "content":"El metodo escogido es GET"})
   case 'POST':
   return output({"method":"post", "content":"El metodo escogido es POST"})
   case 'PUT':
   return output({"method":"put", "content":"El metodo escogido es PUT"})
   case 'DELETE':
   return output({"method":"delete", "content":"El metodo escogido es DELETE"})
  }
  

  return output({})
}

module.exports = { handler }