import { connectToDatabase } from "../../lib/dbconnection";
import { getSession } from "next-auth/react";
import { ObjectID } from "bson";

export default async function (req, res) {
  const session = await getSession({ req });

  if (!session) {
    res.status(404).json({ message: "you are not admin" });
    return;
  }

  if (req.method === "PATCH") {
    const data = req.body;
    const {
      id,
      priceValue,
      DiscPriceValue,
      warrantyValue,
      imageValue,
      descreptionValue,
      componyValue,
      catagoryValue,
    } = data;
    const currId = new ObjectID(id);
    const client = await connectToDatabase();
    const db = client.db();
    const productCollection = db.collection("products");
    const result = await productCollection.updateOne(
      { _id: currId },
      {
        $set: {
          price: priceValue,
          DiscPrice: DiscPriceValue,
          warranty: warrantyValue,
          image: imageValue,
          description: descreptionValue,
          compony: componyValue,
          catagory: catagoryValue,
        },
      }
    );
    client.close();
    res.status(201).json({ message: "Item updated" });
  } else res.status(403).json({ message: "Please use a appropriate method" });
}
