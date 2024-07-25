const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://suman:suman@cloudcluster.rff2b.mongodb.net/?retryWrites=true&w=majority&appName=Cloudcluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    // Send a ping to confirm a successful connection
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
module.exports = {
    run,
}
