import React, { useState } from "react";
import "./App.css";
import Home from "./components/home.component";

function App() {
  let [name, setName] = useState();
  name = "Muneeb";

  return <Home title="HomeAja" myName={name} />;
}

export default App;
