import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body shoe={shoe} handleShoeChange={handleShoeChange} />,
//   },
// ]);

// const router = createBrowserRouter([
//   {
//     path: { shoe },
//     element: <Body shoe={shoe} handleShoeChange={handleShoeChange} />,
//   },
// ]);

export default function MainContent() {
  const [shoe, setShoe] = useState(1);
  const handleShoeChange = (id) => {
    setShoe(id);
  };
  return (
    <>
      <Header />
      {/* <RouterProvider router={router} /> */}
      <Body shoe={shoe} handleShoeChange={handleShoeChange} />
      <Footer />
    </>
  );
}
