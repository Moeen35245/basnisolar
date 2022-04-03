import Head from "next/head";
import About from "../components/common/About";
import AboutInfo from "../components/common/AboutInfo";
import Contact from "../components/common/Contact";
import ContactSlog from "../components/common/ContactSlog";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Service from "../components/common/Service";
import ServiceInfo from "../components/common/ServiceInfo";

function Home() {
  return (
    <div>
      <Head>
        <title>Basni Solar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description.."
          content="Best Solar Installation service in Nagaur Rajasthan"
        />
        <meta name="description" content="Solar Panels, Solar Installation" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />
      <About />
      <AboutInfo />
      <Service />
      <ServiceInfo />
      <ContactSlog />
      <Contact />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
