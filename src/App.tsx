import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BaseLayout from "./layouts/base";
import Home from "./pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="login" element={<Login />} /> */}
      {/* <Route path="*" element={<Error />} /> */}
      
    </Route>)
 
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;