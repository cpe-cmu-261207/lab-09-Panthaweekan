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
            <div style={{ width: "30%" }}>
              <img
                src="img/mypic.jpg"
                height={275}
                width={275}
                style={{ objectfit: "cover", textAlign: "right" }}
                className=" d-flex mx-auto rounded-circle"
              />
            </div>
            <div>
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexdirection: "column",
                  alignitems: "flex-start",
                }}
              ></div>
              <div
                className="fw-bold fs-2"
                style={{ textalign: "left", color: "rgb(189, 0, 0)" }}
              >
                Panthaweekan Somngam
              </div>
              <div
                style={{
                  textalign: "left",
                  width: "650px",
                  fontsize: "18px",
                  color: "rgb(189, 0, 0)",
                  fontfamily: "Roboto Condensed ,sans-serif",
                }}
              >
                Hi my name is Panthaweekan Somngam. Im studying at Chiangmai
                Uni. and my major is Computer Engineering (CPE). I love
                programming a lot that why i choose this major. I'm interest in
                computer languaue (C++ HTML JAVAscript CSS)
              </div>
            </div>
          </div>
          <br />
          <div className="vstack align-items-center justify-content-center">
            <div
              className="fs-2 "
              style={{ color: "rgb(189, 0, 0)", textalign: "center" }}
            >
              My skills
            </div>
          </div>
          <br />
          <div className="vstack align-items-center justify-content-center">
            <div
              className="card mb-3"
              style={{
                maxwidth: "350px",
                backgroundColor: "rgb(189, 0, 0)",
                color: "rgb(240, 240, 240)",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="img/program.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">PROGRAMMING</h5>
                    <p
                      className="card-text"
                      style={{
                        backgroundColor: "rgb(189, 0 ,0)",
                        color: "rgb(240, 240, 240)",
                      }}
                    >
                      I like to coding! I creat online website by using HTML and
                      CSS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-3"
              style={{
                maxwidth: "350px",
                backgroundColor: "rgb(189, 0, 0)",
                color: "rgb(240, 240, 240)",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="img/esport.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">ESPORT</h5>
                    <p
                      className="card-text"
                      style={{
                        maxwidth: "350px",
                        backgroundColor: "rgb(189, 0, 0)",
                        color: "rgb(240, 240, 240)",
                      }}
                    >
                      Im also love to play computer game very much and Im
                      playing for Armory Gaming and the game I play call
                      Valorant
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-3"
              style={{
                maxwidth: "700px",
                backgroundColor: "rgb(189, 0, 0)",
                color: "rgb(240, 240, 240)",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="img/basketball.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">BASKETBALL</h5>
                    <p
                      className="card-text"
                      style={{
                        backgroundColor: "rgb(189, 0, 0)",
                        color: "rgb(240, 240, 240)",
                      }}
                    >
                      basketball is my favorite sport that i play everyday and I
                      can play it well too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />{" "}
      </div>
      <br />
      <Footer />
    </div>
  );
}
