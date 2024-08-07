import { TtitleGeneral } from "../../../components/TtitleGeneral";
import Producto1 from "/img/producto.png";

export const AlgunosProductos = () => {
  return (
    <div className="py-20">
      <TtitleGeneral title1="Descubre" title2="Nuestros" title3="Productos" />
      <div className="container mx-auto w-10/12 mt-16">
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto1}
              alt={`Imagen del Producto ${Producto1}`}
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />
            <div className="mt-5 text-center font-poppins">
              <p className=" text-sm text-gray-500">
                Age absolu + Consulta
              </p>
              <p className=" text-sm text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto1}
              alt={`Imagen del Producto ${Producto1}`}
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />
            <div className="mt-5 text-center font-poppins">
              <p className=" text-sm text-gray-500">
                Age absolu + Consulta
              </p>
              <p className=" text-sm text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto1}
              alt={`Imagen del Producto ${Producto1}`}
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />
            <div className="mt-5 text-center font-poppins">
              <p className=" text-sm text-gray-500">
                Age absolu + Consulta
              </p>
              <p className=" text-sm text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto1}
              alt={`Imagen del Producto ${Producto1}`}
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />
            <div className="mt-5 text-center font-poppins">
              <p className=" text-sm text-gray-500">
                Age absolu + Consulta
              </p>
              <p className=" text-sm text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto1}
              alt={`Imagen del Producto ${Producto1}`}
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />
            <div className="mt-5 text-center font-poppins">
              <p className=" text-sm text-gray-500">
                Age absolu + Consulta
              </p>
              <p className=" text-sm text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-9">
            <img
              src={Producto1}
              alt={`Imagen del Producto ${Producto1}`}
              width="300"
              className="rounded-3xl shadow-lg shadow-gray-600"
            />
            <div className="mt-5 text-center font-poppins">
              <p className=" text-sm text-gray-500">
                Age absolu + Consulta
              </p>
              <p className=" text-sm text-gray-500">
                Virtual en medicina estética
              </p>
              <p className="text-lg font-semibold">S/ 216.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-10/12">
        <button className="bg-[#433827] text-white w-full py-5 rounded-xl text-xl font-poppins">Ver más Productos</button>
      </div>
    </div>
  );
};
