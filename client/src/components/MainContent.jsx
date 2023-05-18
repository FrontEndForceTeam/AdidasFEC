import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { useState } from "react";

export default function MainContent() {
  const [shoe, setShoe] = useState(1);
  const handleShoeChange = (id) => {
    setShoe(id);
  };
  return (
    <>
      <Header />
      <Body shoe={shoe} handleShoeChange={handleShoeChange} />
      <Footer />
    </>
  );
}
