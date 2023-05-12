import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainContent />
    </>
  );
}

export default App;
