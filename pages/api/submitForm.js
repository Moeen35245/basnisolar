import { connectToDatabase } from "../../lib/dbconnection";

export default async function (req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { eName, eEmail, ePhone, eAddress, eMessage } = data;

    const client = await connectToDatabase();
    const db = client.db();
    const userCollection = db.collection("form");
    const result = await userCollection.insertOne({
      name: eName,
      email: eEmail,
      phone: ePhone,
      address: eAddress,
      message: eMessage,
    });
    client.close();
    res.status(201).json({ message: "Item added" });
  } else res.status(403).json({ message: "Please use a appropriate method" });
}
