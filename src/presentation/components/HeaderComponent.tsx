import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillMail } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import Logo from "/img/logo.png";
import { rutas } from "./data/rutas";
import { NavLink } from "react-router-dom";

export const HeaderComponent = () => {
  const copie = () => toast.success("Wow so easy!");

  return (
    <>
      <header className="bg-orange-400 px-5 flex gap-x-5 justify-end text-white py-3 items-center">
        <ToastContainer autoClose={1000} />
        <CopyToClipboard text="aaronjau21@gmail.com" onCopy={() => copie()}>
          <button className="cursor-pointer font-poppins flex items-center gap-x-2">
            {" "}
            <AiFillMail /> admision@inaesthetics.pe
          </button>
        </CopyToClipboard>
        <p className="flex font-poppins items-center gap-x-1">
          {" "}
          <FaPhoneVolume /> 953200699
        </p>
      </header>

      <div className="flex justify-around px-24 items-center py-5">
        <NavLink to="/">
          <img src={Logo} width="170" />
        </NavLink>

        {rutas.map((ruta) => (
          <NavLink
            key={ruta.title}
            to={ruta.url}
            className="text-lg font-poppins text-gray-500"
          >
            {ruta.title}
          </NavLink>
        ))}

        <div className="flex gap-x-7 items-center">
          <CiSearch size={30} className="text-orange-400" />
          <IoBagOutline size={30} className="text-orange-400" />
          <div className="bg-orange-400 px-1 py-2 rounded-md">
            <GiHamburgerMenu size={30} color={`white`} />
          </div>
        </div>
      </div>
    </>
  );
};
