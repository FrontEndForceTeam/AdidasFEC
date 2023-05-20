import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Body from "./Body/Body";



export default function MainContent({shoe, handleShoeChange}) {
 
  return (
    <>
      <Header />
      <Body shoe={shoe} handleShoeChange={handleShoeChange} />
      <Footer />
    </>
  );
}
