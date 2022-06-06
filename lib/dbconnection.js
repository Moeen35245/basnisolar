// import { MongoClient } from "mongodb";

// export const connectToDatabase = async () => {
//   const client = await MongoClient.connect(`${process.env.MONGO_URL}`);

//   return client;
// };

/* This is a database connection function*/
import mongoose from "mongoose";

const connection = {}; /* creating connection object */

async function connectToDatabase() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default connectToDatabase;
