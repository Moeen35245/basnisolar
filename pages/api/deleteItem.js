import { connectToDatabase } from "../../lib/dbconnection";
import { getSession } from "next-auth/react";
import { ObjectID } from "bson";

export default async function (req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(403).json({ message: "you are not admin" });
    return;
  }

  if (req.method === "DELETE") {
    const data = req.body;
    const { id } = data;
    const currId = new ObjectID(id);

    const client = await connectToDatabase();
    const db = client.db();
    const userCollection = db.collection("products");
    const result = await userCollection.deleteOne({
      _id: currId,
    });
    client.close();
    res.status(201).json({ message: "Item added" });
  } else res.status(403).json({ message: "Please use a appropriate method" });
}
