import { useSession, getSession } from "next-auth/react";
import { connectToDatabase } from "../../lib/dbconnection";
function submitedForms({ data }) {
  const { data: session, status } = useSession();

  if (status === "authenticated")
    return (
      <>
        <div className="mx-5 mt-10 place-items-center gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div className="shadow-md rounded-xl p-5 border max-w-[320px] sm:max-w-[500px]">
              <div className="flex gap-2">
                <p>
                  <strong>Name:</strong>
                </p>
                <p>{" " + item.name}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Email:</strong>
                </p>
                <p>{" " + item.email}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Number:</strong>
                </p>
                <p>{" " + item.phone}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Message:</strong>
                </p>
                <p>{" " + item.message}</p>
              </div>
              <div className="flex gap-2">
                <p>
                  <strong>Adress:</strong>
                </p>
                <p>{" " + item.address}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  return (
    <>
      <h1>Only admin can access this page</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const client = await connectToDatabase();
  const db = client.db();
  const userCollection = db.collection("form");
  const data = await userCollection.find({}).toArray();

  return {
    props: {
      data: data.map((item) => ({
        id: item._id.toString(),
        name: item.name,
        email: item.email,
        phone: item.phone,
        address: item.address,
        message: item.message,
      })),
    },
  };
}

export default submitedForms;
