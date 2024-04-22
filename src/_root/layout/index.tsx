import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
     <Footer />
    </>
  );
};

export default RootLayout;
