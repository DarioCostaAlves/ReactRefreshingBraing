import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const nome = "Dário Alves";
function App() {
  return (
    <div>
      <h1>Veterinário {nome}</h1>
      <Button />
    </div>
  );
}

export default App;
