import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BaseLayout from "./layouts/base";
import Home from "./pages/home";
import NominationForm from "./pages/nomination"
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Login/>} />
      <Route path="nomination/:id" element={<NominationForm />} />
      <Route path="home" element={<Home />} /> 
      <Route path="Signup" element={<Signup/>} /> 
      {/* <Route path="*" element={<Error />} /> */}
      
    </Route>)
 
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;