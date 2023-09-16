import React from "react";
import Card from "./Card";
// import Navbar from "./Navbar";

export default function SearchResult() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="row w-100">
        <Card />
      </main>
      <footer className="fixed-bottom bg-dark bg-opacity-50 text-light p-3 d-flex justify-content-center align-items-center">
        <p className="m-0">Copy write</p>
      </footer>
    </>
  );
}
