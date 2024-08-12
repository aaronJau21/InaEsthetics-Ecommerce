import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaRegRectangleList } from "react-icons/fa6";

import { TtitleGeneral } from "../../../components/TtitleGeneral";
import Producto from "/img/producto.png";

export const MainTienda = () => {
  return (
    <div className="py-28 ">
      <TtitleGeneral title1="Descubre" title2="Nuestros" title3="Productos" />

      <main className="container mx-auto w-8/12 mt-28 font-poppins">
        <div className="flex justify-between">
          <h4 className="text-primary font-bold">
            Mostrando 1-12 de 41 resultados
          </h4>

          <div className="flex gap-x-5 items-center">
            <button className="flex items-center border border-black px-3 py-2 rounded-lg">
              Orden por defecto <GoTriangleDown size="21" />
            </button>

            <div className="bg-primary rounded-lg p-1">
              <HiOutlineSquares2X2 size="33" className="text-white  " />
            </div>

            <div className="border border-black px-3 py-1 rounded-lg">
              <FaRegRectangleList size="33" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-14">
          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />
            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto}
              alt="Imagen del Producto"
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />

            <div className="mt-5 text-center font-poppins">
              <p className=" text-base text-gray-500">Age absolu + Consulta</p>
              <p className=" text-base text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-x-14">
          <button className=" text-3xl font-bold bg-primary text-white px-3 rounded-lg">
            1
          </button>
          <button className=" text-3xl font-bold text-gray-500">2</button>
          <button className=" text-3xl font-bold text-gray-500">3</button>
          <GoTriangleRight size="35" className="cursor-pointer"/>
        </div>
      </main>
    </div>
  );
};
