import { connectToDatabase } from "../../lib/dbconnection";
import { getSession } from "next-auth/react";

export default async function (req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(403).json({ message: "you are not admin" });
    return;
  }

  if (req.method === "POST") {
    const data = req.body;
    const {
      ePrice,
      eDiscPrice,
      eWarranty,
      eImage,
      eDescription,
      eCompony,
      eCatagory,
    } = data;

    const client = await connectToDatabase();
    const db = client.db();
    const userCollection = db.collection("products");
    const result = await userCollection.insertOne({
      price: ePrice,
      DiscPrice: eDiscPrice,
      warranty: eWarranty,
      image: eImage,
      description: eDescription,
      compony: eCompony,
      catagory: eCatagory,
    });
    client.close();
    res.status(201).json({ message: "Item added" });
  } else res.status(403).json({ message: "Please use a appropriate method" });
}
