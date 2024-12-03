import { Outlet} from "react-router-dom";
import MainNav from "../components/menu/Nav";
// import Footer from "../components/menu/footer";
 

const BaseLayout = () => {
 
  return (
    <>
 
       <MainNav/>
      <main>
        <Outlet />
      </main>
     {/* <Footer/> */}
    </>
  );
};

export default BaseLayout;