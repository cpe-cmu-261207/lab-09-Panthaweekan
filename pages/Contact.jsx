import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#BD0000", textalign: "center" }}
      className="p-5"
    >
      <div
        style={{
          backgroundColor: "#000000",
          textalign: "center",
          maxwidth: "750px",
        }}
        className="vstack mx-auto gap-2 border border -2 rounded -3 p-3 align-items-center justify-content-center"
      >
        <Navbar />
        <div>
          <div className="d-flex">
            <div style={{ width: "50%" }}>
              <img
                src="img/mypic.jpg"
                width="250"
                height="250"
                style={{ objectfit: "cover" }}
                className="rounded-circle"
              />
            </div>
            <div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexdirection: "column",
                  alignitems: "flex-start",
                }}
              ></div>
              <div
                className="fw-bold fs-3"
                style={{ textalign: "left", color: "white" }}
              >
                CONTACT ME
              </div>
              <div
                className="fw-bold fs-4"
                style={{ textalign: "left", color: "white" }}
              >
                My infomation
              </div>
              <div
                style={{
                  textalign: "left",
                  width: "auto",
                  color: "rgb(155, 155, 155)",
                }}
                className="fs-6"
              >
                <span style={{ color: "white" }}>Realname</span> : Panthaweekan
                Somngam
                <br />
                <span style={{ color: "white" }}>Nickname </span>: Tata
                <br />
                <span style={{ color: "white" }}>Address</span> : 6 m.1
                baansatit convince sutep road sutep Chiangmai
                <br />
                <span style={{ color: "white" }}>facebook</span> :{" "}
                <a
                  href="https://web.facebook.com/phuntaweekran.somngam"
                  target="_blank"
                >
                  https://web.facebook.com/phuntaweekran.somngam
                </a>
                <br />
                <span style={{ color: "white" }}>Email</span> :{" "}
                <a href="mailto:Panthaweekan_somngam@cmu.ac.th">
                  Panthaweekan_somngam@cmu.ac.th
                </a>
                <br />
                <span style={{ color: "white" }}>Phone number</span> :
                094-635-9510
                <br />
                <span style={{ color: "white" }}>Freelance</span> :{" "}
                <span style={{ color: "red" }}>Unavailable</span>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
