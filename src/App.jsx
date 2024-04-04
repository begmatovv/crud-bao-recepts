import "./App.css";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

import RootLayout from "./layout/RootLayout";
import ReceptsLayout from "./layout/ReceptsLayout";
import ReceptsDetail from "./pages/recepts/ReceptsDetail";
import Recepts from "./pages/recepts/Recepts";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="recepts" element={<ReceptsLayout />}>
          <Route index element={<Recepts />} />\
          <Route path=":id" element={<ReceptsDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
