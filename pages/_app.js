import "../styles/globals.css";
import "../styles/main.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Navbar from "../components/common/Navbar";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const progress = new ProgressBar({
  size: 4,
  color: "#FDB400",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Navbar />

        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
/*
 colors: {
        icream: "#F8F7FF",
        iblue: "#3641B7",
        ired: "#FF5670",
        iyellow: "#FDB400",
        inavy: "#003049",
        igray: "#627193",
      },css
*/
