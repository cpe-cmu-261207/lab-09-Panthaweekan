import React from "react";
import Footer from "../components/Footer";

import { Navbar } from "../components/Navbar";

export default function MainLayout(props) {
  return (
    <div>
      {props.children}
      <Footer />
    </div>
  );
}
