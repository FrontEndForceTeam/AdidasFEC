import "./App.css";
import {useState} from 'react';
import MainContent from "./components/MainContent";
import { Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useNavigate,
  Route,
} from "react-router-dom";
function App() {

  const [shoe, setShoe] = useState(1);
  const handleShoeChange = (id) => {
    setShoe(id);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route path={`/${shoe}`} element={<MainContent shoe={shoe} handleShoeChange={handleShoeChange} />}/>
      <Route path="/" element={<MainContent shoe={shoe} handleShoeChange={handleShoeChange} />}/>
    </Route>
  )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
