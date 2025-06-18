import {Outlet} from "react-router";
import HeaderResponsive from "./HeaderResponsive";
import Footer from "./Footer";
import { Toaster } from "sonner";

const RouterLayout = () => {
  return (
    <>
      <HeaderResponsive />
      <div className="container mx-auto min-h-[95vh] pt-24">
        <Outlet/>
      </div>
      <Footer />
      <Toaster richColors/>
    </>
  )
}
export default RouterLayout;