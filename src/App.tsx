import React from "react";
import { MainArea } from "./MainArea/MainArea";

export interface Song {
  songFile: any;
  image: any;
  name: string;
}

const Footer = () => {
  return (
    <div>
      <ol>
        <p>+-∞</p>
      </ol>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <h1 style={{ color: "white" }}>tvrdoljub</h1>
      <MainArea />
      <Footer />
    </div>
  );
}

export default App;
