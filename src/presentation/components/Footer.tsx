import LogoFooter from "/img/logoFooter.png";
import { NavLink } from "react-router-dom";

// imagenes
import Libro from "/img/libro-reclamaciones.png";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-[#433827] pt-20 pb-28">
        <div className="flex justify-center gap-x-20 px-40 text-white">
          <div className="">
            <img src={LogoFooter} alt="Logo" width="250" />
            <p className="font-poppins text-sm mt-5">
              En nuestro Centro de Bienestar Integral, <br /> nos dedicamos a
              realzar tu belleza <br /> natural con servicios exclusivos <br />{" "}
              diseñados para ofrecerte la mejor <br /> experiencia posible.
            </p>
          </div>
          <div className=" items-center">
            <h3 className="text-2xl pt-4 font-bold font-poppins">Enlaces Rápidos</h3>
            <ul className="mt-7 font-poppins">
              <li>
                <NavLink to="/tienda">Tienda</NavLink>
              </li>
              <li className="my-2">
                <NavLink to="/tratamiento">Tratamientos</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
            </ul>
          </div>
          <div className="font-poppins">
            <h3 className="text-2xl pt-4 font-bold">Dirección</h3>

            <p className="mt-5">
              Av. Sánchez Carrión 615 <br /> Oficina 1002, Jesús María Lima,
              Perú
            </p>

            <h3 className="text-2xl pt-4 font-bold">Atención</h3>
            <p className="mt-5">
              Lunes a Viernes : 9:00am - 6:00pm <br />
              Sabado: 9:00am - 6:00pm
            </p>
          </div>
          <div className="font-poppins">
            <img src={Libro} alt="Libro de Reclamaciones" className="ml-10" />
            <h3 className="text-center text-2xl font-bold">
              Libro de <br /> Reclamaciones
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-[#2b2319] py-5">
        <h2 className="text-center text-2xl text-white font-poppins">
          Copyright © 2024 Inaesthetics. Todos los derechos reservados
        </h2>
      </div>
    </footer>
  );
};
