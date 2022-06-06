import connectToDatabase from "../../lib/dbconnection";
import Form from "../../models/Form";
export default async function (req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { eName, eEmail, ePhone, eAddress, eMessage } = data;

    await connectToDatabase();

    const submitForm = new Form({
      name: eName,
      email: eEmail,
      phone: ePhone,
      address: eAddress,
      message: eMessage,
    });

    const result = await submitForm.save();

    // client.close();
    res.status(201).json({ message: "Item added" });
  } else res.status(403).json({ message: "Please use a appropriate method" });
}
