import Head from "next/head";
import AddItem from "../../components/products/AddItem";
// import AddsItem from "../../components/products/AddsItem";
import { useRouter } from "next/router";

function productadd() {
  return (
    <div>
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description.."
          content="Best Solar Installation service in Nagaur Rajasthan"
        />
        <meta name="description" content="Solar Panels, Solar Installation" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <AddItem />
    </div>
  );
}

export default productadd;
