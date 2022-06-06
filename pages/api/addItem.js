import connectToDatabase from "../../lib/dbconnection";
import { getSession } from "next-auth/react";
import Product from "../../models/Product";
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
    await connectToDatabase();

    const addProduct = new Product({
      price: ePrice,
      DiscPrice: eDiscPrice,
      warranty: eWarranty,
      image: eImage,
      description: eDescription,
      compony: eCompony,
      catagory: eCatagory,
    });
    const result = await addProduct.save();

    res.status(201).json({ message: "Item added" });
  } else res.status(403).json({ message: "Please use a appropriate method" });
}
