import { Outlet } from "react-router-dom";
import { HeaderComponent } from '../components/HeaderComponent';
import { Footer } from '../components/Footer';

export const Layout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </div>
  );
};
