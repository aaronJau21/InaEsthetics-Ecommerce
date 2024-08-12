import { CopyToClipboard } from "react-copy-to-clipboard";
import { CiSearch } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoBagOutline } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import Logo from "/img/logo.png";
import { rutas } from "./data/rutas";
import { NavLink } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

export const HeaderComponent = () => {
  const copie = () => toast.success("Se copio correctamente");

  return (
    <>
      <header className="bg-primary pr-[9rem] flex gap-x-5 justify-end text-white py-3 items-center">
        <ToastContainer autoClose={1000} />
        <CopyToClipboard text="aaronjau21@gmail.com" onCopy={() => copie()}>
          <button className="cursor-pointer font-poppins flex items-center gap-x-2">
            {" "}
            <IoIosMail size={25} /> admision@inaesthetics.pe
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
            className={({ isActive }) =>
              isActive
                ? "text-primary text-lg font-poppins"
                : "text-lg font-poppins text-gray-500"
            }
            //
          >
            {ruta.title}
          </NavLink>
        ))}

        <div className="flex gap-x-7 items-center">
          <CiSearch size={30} className="text-primary" />
          <IoBagOutline size={30} className="text-primary" />
          <div className="bg-prmtext-primary  px-1 py-2 rounded-md">
            <GiHamburgerMenu size={30} color={`white`} />
          </div>
        </div>
      </div>
    </>
  );
};
