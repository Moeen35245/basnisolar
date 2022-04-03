import Productlist from "../../components/products/productlist";
import Head from "next/head";
import { connectToDatabase } from "../../lib/dbconnection";
import { useState, useEffect } from "react";
function products({ data }) {
  const [currData, setCurrData] = useState(data);

  function filterData(text) {
    const result = data.filter((item) => {
      if (text === "All") return item.price != null;
      return item.catagory === text || item.compony === text;
    });
    setCurrData(result);
  }

  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description.."
          content="50w solar panles, 100w solar panles, 2000w solar panles and 500w solar panles"
        />
        <meta
          name="description"
          content="Solar Panels, Solar Installation roof top solar panels"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Productlist filterData={filterData} data={currData} />
    </div>
  );
}

export async function getServerSideProps() {
  const client = await connectToDatabase();
  const db = client.db();
  const productsCollection = db.collection("products");
  const data = await productsCollection.find({}).toArray();

  return {
    props: {
      data: data.map((item) => ({
        id: item._id.toString(),
        price: item.price,
        priceDisc: item.DiscPrice,
        imgLink: item.image,
        description: item.description,
        warranty: item.warranty,
        compony: item.compony,
        catagory: item.catagory,
      })),
    },
  };
}

export default products;
