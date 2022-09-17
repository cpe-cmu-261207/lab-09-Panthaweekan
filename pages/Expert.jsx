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
        <br />
        <p style={{ color: "white" }} className="fw-bold fs-2">
          My Experience
        </p>
        <div>
          <div className="vstack align-items-center justify-content-center">
            <div className="card mb-3 align-items-center">
              <img
                src="img/CPP.png"
                className="card-img-top"
                alt="..."
                style={{ width: "500px", backgroundColor: "black" }}
              />
              <div
                className="card-body rounded my-3"
                style={{
                  width: "500px",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(189, 0, 0)",
                }}
              >
                <h5 className="card-title">C++ Project</h5>
                <p className="card-text">
                  I have been coded C++ project to source a lot files on
                  computer. such as files type , file created date , file size
                </p>
              </div>
            </div>
            <div className="card mb-3 align-items-center">
              <img
                src="img/scratch-jr.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "black",
                }}
              />
              <div
                className="card-body rounded my-3"
                style={{
                  width: "500px",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(189, 0, 0)",
                }}
              >
                <h5 className="card-title">Stratch Project</h5>
                <p className="card-text">
                  Stratch project that i have been created is VDO game that play
                  like mario. do the mission to pass to another map till the
                  finish
                </p>
              </div>
            </div>
            <div className="card mb-3 align-items-center">
              <img
                src="img/mypicESPORT.jpg"
                className="card-img-center"
                alt="..."
                style={{ width: "500px", backgroundColor: "black" }}
              />
              <div
                className="card-body rounded my-3"
                style={{
                  width: "500px",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(189, 0, 0)",
                }}
              >
                <h5 className="card-title">Esport</h5>
                <p className="card-text">
                  Nowaday I'm playing for Armory Gaming and the game that I play
                  is Valorant.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </div>
  );
}
