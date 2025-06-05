import {Outlet} from "react-router";
import HeaderResponsive from "./HeaderResponsive";
import Footer from "./Footer";

const RouterLayout = () => {
  return (
    <>
      <HeaderResponsive />
      <div className="container mx-auto min-h-[95vh] pt-24">
        <Outlet/>
      </div>
      <Footer />
    </>
  )
}
export default RouterLayout;